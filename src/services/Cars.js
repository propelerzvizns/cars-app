import axios from "axios";
// import router from "router";

export default class Cars {


   async getAll(){
         
        const { data } = await axios.get('http://localhost:3000/api/cars')

        return data;
    }
    addACar(car){
        // console.log(car);
        
        const newCar = {
            brand: car.brand,
            model: car.model,
            year: car.year,
            maxSpeed: car.maxSpeed,
            isAutomatic: car.isAutomatic,
            engine: car.engine,
            numberOfDoors: car.numberOfDoors
        }
        axios.post('http://localhost:3000/api/cars', newCar);
    }
}
export const carService = new Cars();