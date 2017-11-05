import * as eng from './translations/eng.json';
import * as ger from './translations/ger.json';
import * as pol from './translations/pol.json';

export function getTranslation(lang){
    switch(lang){
        case "eng": {
            return eng;
        }
        case "ger": {
            return ger;
        }
        case "pol": {
            return pol;
        }
        default: return eng; 
    }
}