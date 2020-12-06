/* 
app/src/Students.js (20 pts)
This needs to export 4 named functions

StudentsList, which returns a react-admin List component that contains
A TextField for the id
A TextField for the name

StudentsShow, which returns a react-admin Show component that contains
A TextField for the id
A TextField for the name
A custom component that we will write called GradesTable, which shows all the grades for the student in a material-ui table

StudentsEdit, which returns a react-admin Edit component that contains
A TextField for the id
A TextInput for the name

StudentsCreate, which returns a react-admin Create component that contains
A TextInput for the id
A TextInput for the name
*/

import React from 'react'
import { List, Datagrid, TextField, TextInput, Edit, Create, SimpleForm, Show } from 'react-admin';
import * as GradesTable from './GradesTable';

export const StudentsList = (props) => {
	return (
		<List {...props}>
			<Datagrid rowClick="edit">
                <TextField 
                    label="Username"
                    source='id'
                />
                <TextField 
                    label="Student"
                    source="name" 
                />
			</Datagrid>
		</List>
	)
}

export const StudentsShow = (props) => {
	return (
		<Show {...props}>
			<Datagrid>
                <TextField 
                    label="Username"
                    source='id'
                />
                <TextField 
                    label="Student"
                    source="name" 
                />
                {/* <GradesTable /> */}
			</Datagrid>
		</Show>
	)
}

export const StudentsEdit = (props) => {
	return (
		<Edit title='Edit a Student' {...props}>
			<SimpleForm>
                <TextField 
                    label="Username"
                    source='id'
                />
                <TextInput source="name" />
			</SimpleForm>
		</Edit>
	)
}

export const StudentsCreate = (props) => {
	return (
		<Create title='Create a Student' {...props}>
			<SimpleForm>
                <TextInput 
                    label="Username"
                    source='id'
                />
                <TextInput source="name" />
			</SimpleForm>
		</Create>
	)
}

let ex = { StudentsList, StudentsShow, StudentsEdit, StudentsCreate }

export default ex;