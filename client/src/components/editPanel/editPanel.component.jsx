import React from 'react';
import {
  Box,
  Button,
  GridList,
  GridListTile,
  IconButton,
  Tooltip,
  makeStyles,
  useTheme,
} from '@material-ui/core';
import { useQuery, gql } from '@apollo/client';

import CollapseSide from '../../themes/CollapseSide';

import { ReactComponent as EditIcon } from '../../assets/icons/edit_icon.svg';
import { ReactComponent as AddIcon } from '../../assets/icons/add_icon.svg';
import { ReactComponent as SaveIcon } from '../../assets/icons/save_icon.svg';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash_icon.svg';
import { ReactComponent as UndoIcon } from '../../assets/icons/undo_icon.svg';

import LoadingComponent from '../loadingComponent/loading.component';

import enums from '../../tables/enums';

import { isOnEditVar } from '../../graphql/cache';

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

export default () => {
  const theme = useTheme();
  const classes = useStyles(theme);

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
      isOnEditVar(!isOnEdit);
    }
  };

  return (
    <div className={classes.root}>
      <div>
        <Tooltip title="Editar" placement="top">
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
        >
          <TrashIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Salvar alterações" placement="top">
        <IconButton
          className={`${classes.btn} ${isOnEdit ? classes.btnActive : ''}`}
          disabled={!isOnEdit}
        >
          <SaveIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Descartar alterações" placement="top">
        <IconButton
          className={`${classes.btn} ${isOnEdit ? classes.btnActive : ''}`}
          disabled={!isOnEdit}
        >
          <UndoIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};
