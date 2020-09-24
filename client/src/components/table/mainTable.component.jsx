import React from 'react';

import {
  useTheme,
  makeStyles,
  Checkbox,
} from '@material-ui/core/';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => {
  return {
    tableWrapper: {
      height: '60vh',
    },
    tableContainer: {
      height: '100%',
      overflowY: 'scroll',
    },
  };
});

const MainTable = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
          <Table
            stickyHeader
            className={classes.table}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                {fieldsState
                  .filter(
                    (item) => item.isMain || (item.onTable && item.present)
                  )
                  .map((field, index) => {
                    return (
                      <TableCell
                        key={index}
                        align={`${!field.isMain ? 'right' : ''}`}
                      >
                        {field.isMain ? (
                          <div style={{ width: '300px' }}>{field.label}</div>
                        ) : (
                          field.label
                        )}
                      </TableCell>
                    );
                  })}
              </TableRow>
            </TableHead>
            <TableBody>
              {pocos.map((poco) => (
                <TableRow key={poco.id}>
                  {fieldsState
                    .filter(
                      (item) => item.isMain || (item.onTable && item.present)
                    )
                    .map((field, index) => {
                      return (
                        <TableCell
                          key={index}
                          align={`${!field.isMain ? 'right' : ''}`}>
                          {field.getValue(poco, enum_licen)}
                        </TableCell>
                      );
                    })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    )
}

export default MainTable