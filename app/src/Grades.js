/* app/src/Grades.js (15 pts)
This needs to export 3 named functions

GradesList, which returns a react-admin List component that contains
A TextField for the id
A ReferenceField for the student_id, referencing the associated student object and displaying it's name
A TextField for the type
A NumberField for the Grade
A NumberField for the Max

GradesEdit, which returns a react-admin Edit component that contains
A TextField for the id
A ReferenceField for the student_id, referencing the associated student object and displaying it's name
A TextInput for the type
A NumberInput for the Grade
A NumberInput for the Max

GradesCreate, which returns a react-admin Create component that contains
A TextInput for the student_id
A TextInput for the type
A NumberInput for the Grade
A NumberInput for the Max
*/

import React from 'react'
import { List, Datagrid, TextField, TextInput, ReferenceField, NumberField, NumberInput, Edit, Create, SimpleForm } from 'react-admin';

export const GradesList = (props) => {
	return (
		<List {...props}>
			<Datagrid>
				<TextField source='id'/>
				<ReferenceField 
					label="Student"
					source='students'
					reference='student_id'
				/>
				<TextField source='type' />
				<NumberField source='grade' />
				<NumberField source='max' />
			</Datagrid>
		</List>
	)
}

export const GradesEdit = (props) => {
	return (
		<Edit title='Edit a Grade' {...props}>
			<SimpleForm>
				<TextInput source='student_id' />
				<ReferenceField 
					label="Student"
					source='students'
					reference='student_id' 
				/>
				<TextInput source='type' />
				<NumberInput source='grade' />
				<NumberInput source='max' />
			</SimpleForm>
		</Edit>
	)
}

export const GradesCreate = (props) => {
	return (
		<Create title='Create a Grade' {...props}>
			<SimpleForm>
				<TextInput source='student_id' />
				<TextInput source='type' />
				<NumberInput source='grade' />
				<NumberInput source='max' />
			</SimpleForm>
		</Create>
	)
}

export default { GradesList, GradesEdit, GradesCreate }