import axios from 'axios';

class PropertyAPI{
    static getProperties(){
        return axios.post('/api/properties/', {})
        .then(p => p);
    }

    static addProperty(propertyID){
        return axios.post('/api/properties/add/' + propertyID, {});
    }
}
export default PropertyAPI;
