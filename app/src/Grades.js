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

import React, { Component } from 'react'
import { List, TextField, ReferenceField, NumberField, Edit } from 'react-admin';

export class GradesList extends Component {
	render() {
		return (
			<List {...props} >
				<TextField 
					label="ID"
					source='id' />
				<ReferenceField
					label="Student" 
					source='id'
					reference={this.props.student_id}
				>
					{this.props.student_id}
				</ReferenceField>
				<TextField type={this.props.type}/>
				<NumberField source={this.props.grade}/>
				<NumberField source={this.props.max}/>
			</List>
		)
	}
}

export class GradesEdit extends Component {
	render() {
		return (
			<Edit>
				{/* <TextField 
					label="ID"
					source={this.props.id} />
				<ReferenceField
					label="Student" 
					source={this.props.student_id}
					reference={this.props.student_id}
				>
					{this.props.student_id}
				</ReferenceField>
				<Textfield type={this.props.type}/>
				<Numberfield source={this.props.grade}/>
				<Numberfield source={this.props.max}/> */}
			</Edit>
		)
	}
}

export class GradesCreate extends Component {
	render() {
		return (
			<div>
				
			</div>
		)
	}
}

export default GradesList