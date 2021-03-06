import React, { useState } from 'react';
import { IconButton, Tooltip, makeStyles, useTheme } from '@material-ui/core';
import { useQuery, gql } from '@apollo/client';

import { ReactComponent as EditIcon } from '../../assets/icons/edit_icon.svg';
import { ReactComponent as AddIcon } from '../../assets/icons/add_icon.svg';
import { ReactComponent as SaveIcon } from '../../assets/icons/save_icon.svg';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash_icon.svg';
import { ReactComponent as UndoIcon } from '../../assets/icons/undo_icon.svg';

import LoadingComponent from '../loadingComponent/loading.component';
import AlertDialog from '../alertDialog/alertDialog.component';

import enums from '../../tables/enums';

import { isOnEditVar } from '../../graphql/cache';
import {
  useDataStateByTable,
  useResetDataStatus,
} from '../../utils/dataState.manager';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: '0px',
    right: '0px',
  },
  editBtn: {
    fill: theme.palette.primary.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editBtnActive: {
    fill: 'white',
    backgroundColor: theme.palette.primary.dark,
  },
  btn: {
    fill: theme.palette.inactiveGray,

    justifyContent: 'center',
    alignItems: 'center',
  },
  btnActive: {
    fill: theme.palette.secondary.main,
  },
}));

// eslint-disable-next-line react/prop-types
export default ({ tableName, onDelete, onUpdate, featureId }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [exitDialogOpen, setExitDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const tableState = useDataStateByTable(tableName);
  const resetDataStatus = useResetDataStatus(tableName);

  const { selectedItems, changes } = tableState;

  if (!selectedItems) {
    delete tableState.selectedItems;
  }

  let unsavedChanges = false;
  const fieldsChanged = new Map();

  if (changes) {
    Object.values(changes).forEach((featureItem) => {
      Object.values(featureItem).forEach((field) => {
        if (field.changed) {
          unsavedChanges = true;
          fieldsChanged.set(field.columnName, field.newValue);
        }
      });
    });
  }

  const onExitResponse = (response) => {
    if (response) resetDataStatus();
    isOnEditVar(!response);
    setExitDialogOpen(false);
  };

  const onDeleteResponse = (response) => {
    // DELETE OPERATION
    if (response) {
      selectedItems.forEach((id) => {
        onDelete({ variables: { id } });
      });
    }

    setDeleteDialogOpen(false);
  };

  const GET_DATA = gql`
    query {
      isOnEdit @client @client
      userInfo @client
    }
  `;

  const {
    data: { isOnEdit, userInfo },
    loading,
  } = useQuery(GET_DATA);

  if (loading) return <LoadingComponent />;

  const handleEditBtn = () => {
    if (userInfo && enums.authRoles.includes(userInfo.role)) {
      if (isOnEdit) {
        if (unsavedChanges) setExitDialogOpen(true);
        else isOnEditVar(false);
      } else isOnEditVar(true);
    }
  };

  const handleDeleteBtn = () => {
    if (isOnEdit && selectedItems.length > 0) setDeleteDialogOpen(true);
  };

  const handleDiscardBtn = () => {
    if (featureId) resetDataStatus(featureId);
    else if (selectedItems) {
      selectedItems.forEach((id) => {
        resetDataStatus(id);
      });
    }
  };

  return (
    <div className={classes.root}>
      <div>
        <Tooltip title={!isOnEdit ? 'Editar' : 'Fechar edição'} placement="top">
          <IconButton
            className={`${classes.editBtn} ${
              isOnEdit ? classes.editBtnActive : ''
            }`}
            onClick={handleEditBtn}
          >
            <EditIcon />
          </IconButton>
        </Tooltip>
      </div>
      <Tooltip title="Adicionar" placement="top">
        <IconButton
          className={`${classes.btn} ${isOnEdit ? classes.btnActive : ''}`}
          disabled={!isOnEdit}
        >
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Excluir" placement="top">
        <IconButton
          className={`${classes.btn} ${isOnEdit ? classes.btnActive : ''}`}
          disabled={!isOnEdit}
          onClick={handleDeleteBtn}
        >
          <TrashIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Salvar alterações" placement="top">
        <IconButton
          className={`${classes.btn} ${
            isOnEdit && unsavedChanges ? classes.btnActive : ''
          }`}
          disabled={!(isOnEdit && unsavedChanges)}
          onClick={() => {
            onUpdate(fieldsChanged);
          }}
        >
          <SaveIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Descartar alterações" placement="top">
        <IconButton
          className={`${classes.btn} ${
            isOnEdit && unsavedChanges ? classes.btnActive : ''
          }`}
          disabled={!(isOnEdit && unsavedChanges)}
          onClick={handleDiscardBtn}
        >
          <UndoIcon />
        </IconButton>
      </Tooltip>
      <AlertDialog
        open={exitDialogOpen}
        title="Sair sem salvar"
        msg="Você tem certeza que deseja sair da edição sem salvar alterações?"
        onResponse={onExitResponse}
      />
      <AlertDialog
        open={deleteDialogOpen}
        title={`Excluir ${
          selectedItems
            ? `${selectedItems.length} items selectionados`
            : 'este item?'
        }`}
        msg={`Você tem certeza que vai excluir ${
          selectedItems
            ? `${selectedItems.length} items selectionados`
            : 'este item?'
        }? Essa operação não pode ser desfeita`}
        onResponse={onDeleteResponse}
      />
    </div>
  );
};
