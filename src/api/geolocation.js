/*global navigator*/

const geolocation = {

    get(callback){
        console.log("hello from the navigator!");
        navigator.geolocation.getCurrentPosition(
            (pos) => callback({ commit }, pos),
            (err) => callback(err),
            this.options
        );
    },

    options: {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0
    },

    /*success(pos, callback) {
        console.log("hello from the success!");
        console.log(`poz: ${pos}`);
        //return [pos.coords.latitude, pos.coords.longitude];
        return callback(pos);
    },

    error(err, callback) {
        console.log("hello from the error!");
        console.warn(`ERROR(${err.code}): ${err.message}`);
        //return `ERROR`;
        return callback(err);
    }*/

};

export default geolocation;