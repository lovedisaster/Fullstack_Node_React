import axios from 'axios';

class PropertyAPI{
    static getProperties(){
        return axios.post('/api/properties/', {})
        .then(p => p);
    }
}
export default PropertyAPI;
