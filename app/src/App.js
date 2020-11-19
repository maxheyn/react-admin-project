import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { GradesList, GradesCreate, GradesEdit } from './Grades';
import './App.css';

function App() {
  const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
  return <Admin dataProvider={dataProvider}>
    <Resource name='grades' list={GradesList} />
  </Admin>
}

export default App;