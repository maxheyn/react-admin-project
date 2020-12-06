/* app/src/RestClient.js (20 pts)

This needs to export 1 default function (unnamed) that returns a rest client that
encapsulates the basic rest client ra-data-json-server.  
In this function, it needs to return an object of functions, 
one for each sort of operation that may be performed by the react-admin UI.
These functions all take in 2 arguments, resource and params.  
The functions are called getList, getOne, getMany, getManyReference, update, updateMany, create, delete, and deleteMany. 
We will only need to override getOne and getMany.  
The rest of the functions will just call the base client's identical 
function name and pass in the resource and params we were given.

getOne: this function is called when we click a list item in the UI and want to view details specifically about 1 object.  
We're overriding this so that when we're doing getOne on a resource type of student we also get all the grades 
associated with that student.  That way, when we return the final object back to the rest of the UI it has an extra 
field in it callled 'grades' that holds an array of all the grades for that student.  
This is used in the GradesTable mentioned above.  
If the resource is not students, we can simply call the base client like
we do in the other functions.

getMany: this function is called when we load the grades list view.  
Since we have a Reference field in each row of that list view that points to a student object, 
the UI tries to use getMany to make a request to our API /students?id=craigb&id=cbaker 
so it can get all the visible students in one shot.  
Unfortunately, our API doesn't support that type of call, so we have to instead of a getOne 
on each of the students that are specified in params.ids, and then return an array of those results to the UI.
*/

import { fetchUtils } from 'react-admin'

import jsonServerRestClient from 'ra-data-json-server'

const getListParams = {
    filter: {},
    pagination: {
        page: 1,
        perPage: 5000,
    },
    sort: {
        field: 'type',
        order: 'desc',
    }
}

const RestClient = (apiUrl, httpClient = fetchUtils.fetchJson) => {
    let baseClient = jsonServerRestClient(apiUrl, httpClient);

    return {
        getList: (resource, params) => (baseClient.getList(resource, params)),
        getOne: (resource, params) => {
            const promises = [];
            const studentObj = {};
            const grades = []
            if (resource === 'students') {
                promises.push(baseClient.getOne(resource, params.id)
                    .then((response) => {
                        studentObj.push(response.data);
                    })
                )
                getListParams.filter.student_id = studentObj.id;
                promises.push(baseClient.getList('grades', getListParams)
                    .then((response) => {
                        grades.push(response.data);
                )
            } else 
                jsonServerRestClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
                    data: json,
                }));
        },
        getMany: (resource, params) => {
            const promises = [];
            const results = [];
            for (let i = 0; i < params.ids.length; i++) {
                const id = params.ids[i];
                promises.push(baseClient.getOne(resource, {id})
                    .then((response) => {
                        results.push(response.data)
                    })
                )
            }
            return Promise.all(promises).then(() => ({data:results}));
        },
        getManyReference: (resource, params) => (baseClient.getManyReference(resource, params)),
        update: (resource, params) => (baseClient.update(resource, params)),
        updateMany: (resource, params) => (baseClient.updateMany(resource, params)),
        create: (resource, params) => (baseClient.create(resource, params)),
        delete: (resource, params) => (baseClient.delete(resource, params)),
        deleteMany: (resource, params) => (baseClient.deleteMany(resource, params))
    };
}

export default RestClient;