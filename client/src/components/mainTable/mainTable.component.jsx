import React, { useState } from 'react';

import { useHistory, useRouteMatch } from 'react-router-dom';

import { useTheme, makeStyles, Button, Checkbox } from '@material-ui/core/';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    height: '100%',
    overflowY: 'scroll',
  },
  tableCell: {
    maxWidth: '200px',
  },
  bodyRow: {
    maxHeight: '10px',
    '& .button-link': {
      display: 'none',
      fontSize: '0.7rem',
      padding: '2px 6px',
      margin: '0px 10px 0px 10px',
      color: theme.palette.primary.dark,
      backgroundColor: theme.palette.backgroundLightGray,
      justifyContent: 'start',
      letterSpacing: '2px',
    },
    '& :hover': {
      '& .button-link': {
        display: 'inline-flex',
      },
    },
  },
}));

const MainTable = ({ dataTable, selectedItems, onSelectItems }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const history = useHistory();
  const { path } = useRouteMatch();

  const [allSelect, setAllSelect] = useState(false);

  const checkItemSelect = (id) => selectedItems.includes(id);
  const onCheckAllItems = (event) => {
    if (allSelect) {
      onSelectItems([]);
    } else {
      const allIds = dataTable.rows.map((row) => row.id);

      onSelectItems(allIds);
    }
    setAllSelect(!allSelect);
  };

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table stickyHeader className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell key={`select-all-checkbox`} style={{ width: '40px' }}>
              <Checkbox
                checked={allSelect}
                onChange={onCheckAllItems}
                inputProps={{ 'aria-labelledby': 'Selecionar todos' }}
              />
            </TableCell>
            {dataTable.headers.map((field) => (
              <TableCell
                key={field.name}
                className={field.isMain ? classes.tableCell : ''}
              >
                {field.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable.rows.map((row) => {
            const isItemSelected = checkItemSelect(row.id);
            return (
              <TableRow key={row.id} className={classes.bodyRow}>
                <TableCell key={`${row.id} checkbox`} style={{ width: '40px' }}>
                  <Checkbox
                    checked={isItemSelected}
                    onChange={(event) => onSelectItems(row.id)}
                  />
                </TableCell>
                {dataTable.headers.map((field) => (
                  <TableCell
                    key={field.label + row.id}
                    className={field.isMain ? classes.tableCell : ''}
                  >
                    {row[field.name]}
                    {field.isMain ? (
                      <Button
                        key={field.label + row.id}
                        className="button-link"
                        size="small"
                        onClick={() => history.push(`${path}/${row.id}`)}
                      >
                        Abrir detalhes
                      </Button>
                    ) : (
                      ''
                    )}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MainTable;
