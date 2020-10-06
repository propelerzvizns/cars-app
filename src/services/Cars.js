import axios from "axios";

export default class Cars {


   async getAll(){
         
        const { data } = await axios.get('http://localhost:3000/api/cars')

        return data;
    }
}
export const carService = new Cars();