/*global fetch*/

const baseUrl = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?';
const key = 'AIzaSyC_iaze08_I66PofzEHH8XcPL7YgALr_Gs'

export const get = str => `${baseUrl}key=${key}&input=${str}`;