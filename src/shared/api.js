import axios from 'axios';

/**
 * All the API's will be declared here.
 * We are using axios to do the API Calls.
 * Here we are using Mockable.io
 * @returns {AxiosPromise<any>}
 */
export function getAllItems() {
    return axios.get('https://demo0444860.mockable.io/getItems');
}
