import * as React from "react";
import { Admin, fetchUtils, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { GradesList } from './Grades';
import { GradesCreate } from './Grades';
import { GradesEdit } from './Grades';
import './App.css';

function App() {
  const httpClient = (url, options = {}) => {
    if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
    }
    //add your own headers here
    options.user = {
      authenticated: true,
      token: 'SRTRDFVESGNJYTUKTYTHRG'
    };
    return fetchUtils.fetchJson(url, options);
  }
  const dataProvider = jsonServerProvider('http://3.90.38.43/project5', httpClient);
  return <Admin dataProvider={dataProvider} title="Project 6">
    <Resource name='grades'
      list={GradesList}
      create={GradesCreate}
      edit={GradesEdit} 
    />
    <Resource name='students'
      list={GradesList}
      create={GradesCreate}
      edit={GradesEdit} 
    />
  </Admin>
}

export default App;