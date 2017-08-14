import axios from 'axios';

class PropertyAPI{
    static getProperties(){
        return axios.post('/api/properties/', {token: '123'})
        .then(p => p);
    }

    static addProperty(propertyID){
        return axios.post('/api/properties/add/' + propertyID, {propertyID: propertyID});
    }

    static deleteProperty(propertyID){
        return axios.post('/api/properties/delete/' + propertyID, {});
    }

    static getSavedProperties(){
        return axios.post('/api/saved-properties/', {})
        .then(p => p);
    }
}
export default PropertyAPI;
