

const baseUrl = 'https://api.apixu.com/v1/forecast.json?';
const key = 'cb18824ab7e140d2944131821172407';

export const get = location => `${baseUrl}key=${key}&q=${location}&days=7`;
