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
    // options.headers.set("Access-Control-Allow-Origin", "*");
    // options.headers.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    // options.headers.set('Access-Control-Expose-Headers', 'X-Total-Count');
    // options.headers.set('Access-Control-Allow-Methods', "PUT, DELETE, POST, GET, HEAD");
    options.user = {
      authenticated: true,
      token: 'SRTRDFVESGNJYTUKTYTHRG'
    };
    return fetchUtils.fetchJson(url, options);
  }
  const dataProvider = jsonServerProvider('http://localhost:5000', httpClient);
  return (
    <Admin dataProvider={dataProvider} title="React Admin Dashboard 3750 Project 6">
      <Resource name='grades'
        list={GradesList}
        create={GradesCreate}
        edit={GradesEdit} 
      />
    </Admin>
  )
}

export default App;