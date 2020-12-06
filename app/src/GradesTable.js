/* eslint-disable import/no-anonymous-default-export */
/* app/src/GradesTable.js (15 pts)
This needs to export 1 default function (unnamed) that returns 
a basic material-ui table (https://material-ui.com/components/tables/). 
The table should have rows for the grade ID, type, max and grade.
*/

import React from 'react'
import { Datagrid, TextField } from 'react-admin'

const GradesTable = (props) => {
    return (
        <Datagrid {...props}>
            <TextField source='student_id' />
            <TextField source='type' />
            <TextField source='max' />
            <TextField source='grade' />
        </Datagrid>
    )
}

export default GradesTable;

