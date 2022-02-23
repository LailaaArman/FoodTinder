import {BASE_URL, API_KEY} from './apiConfig';
import { useSelector } from 'react-redux';

const spoonacularApi = {
    // For the search settings
  

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

        let url = "recipes/random?apiKey="+ API_KEY + "&number=5";
        let noPreferences = true;
        params.preferences.forEach(preference => {
            if(preference.value && noPreferences) {
                url += "&tags=" + preference.name;
                noPreferences = false;
            }
            else if(preference.value && !noPreferences) {
                url += "," + preference.name;
            }
        })
        return spoonacularApi.makeGetRequest(url)
        .then(response => response.recipes)
    }
}

export default spoonacularApi;