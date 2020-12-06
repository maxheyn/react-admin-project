import * as React from "react";
import { Admin, fetchUtils, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { GradesList, GradesCreate, GradesEdit } from './Grades';
import {StudentsList, StudentsShow, StudentsEdit, StudentsCreate } from './Students'


import './App.css';

function App() {
  
  const httpClient = (url, options = {}) => {
    options.user = {
      authenticated: true,
      token: 'Basic ' + btoa('teacher:testing')
    };
    return fetchUtils.fetchJson(url, options);
  }

  const dataProvider = jsonServerProvider('/project5', httpClient);

  return (
    <Admin dataProvider={dataProvider} title="React Admin Dashboard 3750 Project 6">
      {/* <Resource 
        name="grades" 
        list={ GradesList }
        edit={ GradesEdit}
        create={ GradesCreate }
      /> */}

      <Resource 
        name="students" 
        list={ StudentsList }
        // show= { StudentsShow }
        // edit={ StudentsEdit }
        // create={ StudentsCreate }
      />
    </Admin>
  )
}

export default App;