/* eslint-disable import/no-anonymous-default-export */
/* app/src/GradesTable.js (15 pts)
This needs to export 1 default function (unnamed) that returns 
a basic material-ui table (https://material-ui.com/components/tables/). 
The table should have rows for the grade ID, type, max and grade.
*/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const GradesTable = (props) => {
  const classes = useStyles();
  const record = props.record || {};
  const rows = record.grades || [];
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Type</TableCell>
            <TableCell align="right">Max</TableCell>
            <TableCell align="right">Grade</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell align="right">{row.max}</TableCell>
              <TableCell align="right">{row.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

GradesTable.defaultProps = { label: "Grades" }

export default GradesTable;