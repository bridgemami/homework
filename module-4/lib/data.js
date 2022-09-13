import fs from 'fs';
import path from 'path';
// get filepath to data directory
const dataJ = path.join( process.cwd(), 'data');

// function returns ids for all json objects in array
export function getAllIds() {
//get filepath to json file
const filePath = path.join( dataJ, 'author.json' ); 
//load json file contents
const jsonData = fs.readFileSync( filePath, 'utf8' );
//convert string from file into json array object
const jsonObj = JSON.parse( jsonData);
//use map() on array to extract just id properties into new array of object values
return jsonObj.map(item => {
    return {
        params: {
            id: item.id.toString()
        }
    }
}

)
}

//function returns names and ids for all json objects in array, sorted by name property.

export function getSortedList() {

}

//async function to get the complete data for just one author/person
export async function getData(idRequested) {

}