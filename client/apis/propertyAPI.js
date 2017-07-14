import axios from 'axios';

class PropertyAPI{
    static getProperties(){
        return axios.get('/api/properties/1/');
    }
}
export default PropertyAPI;
