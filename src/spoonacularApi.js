import {BASE_URL, API_KEY} from './apiConfig';

const spoonacularApi = {
    makeGetRequest(params) {
        console.log(BASE_URL+params)
        return fetch(BASE_URL+params) 
           .then(response =>  {
               if (!response.status === 200) { // something went wrong if statuscode is not 200
                   throw new Error(response.status +": "+response.json().message);
               }
               return response;
           })
           .then(response => response.json());
       },

    getNewDishes(params) {
        return spoonacularApi.makeGetRequest("recipes/random?apiKey="+ API_KEY + "&number=5")
        .then(response => response.recipes)
    }
}

export default spoonacularApi;