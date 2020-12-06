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

export default function() {
    return {

    }
}

