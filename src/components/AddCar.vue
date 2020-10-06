<template>
<div>
<th>Add Car</th>

<form @submit.prevent="addCar">
      <div class="form-group row">
        <label for="brand" class="col-4 col-form-label">Brand</label>
        <div class="col-8">
          <div class="input-group">
            <input id="brand" v-model="car.brand" type="text" required="required" class="form-control here">
          </div>
        </div>
      </div>
    <div class="form-group row">
        <label for="model" class="col-4 col-form-label">Model</label>
        <div class="col-8">
          <div class="input-group">
            <input id="model" v-model="car.model" type="text" required="required" class="form-control here">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="year" class="col-4 col-form-label">Year</label>
        <div class="col-8">
          <div class="input-group">

            <select class="form-control" v-model="car.year">
    
                <option v-for="year in yearArray" :key="year">{{year}}</option>
        
            </select>
          </div>
        </div>
      </div>
     
      <div class="form-group row">
        <label for="maxSpeed" class="col-4 col-form-label">Max Speed</label>
        <div class="col-8">
          <input id="maxSpeed" v-model="car.maxSpeed" type="number" required="required" class="form-control here">
        </div>
      </div>
      <div class="form-group row">
        <label for="isAutomatic" class="col-4 col-form-label">Is Automatic</label>
        <div class="col-8">
          <div class="input-group form-check">
            <input class="form-check-input" type="checkbox" id="checkbox" v-model="car.isAutomatic">
          </div>
        </div>
      </div>

    <div class="form-group row">
        <label for="checkbox" class="col-4 col-form-label">Engine</label>
        <div class="col-8">
            <div class="input-group">
                <div class="form-check">   
                    <input class="form-check-input" type="radio" id="petrol" value="petrol" v-model="car.engine">
                    <label class="form-check-label" for="petrol">petrol</label>
                </div>
                <div class="form-check">
                    
                    <input class="form-check-input" type="radio" id="diesel" value="diesel" v-model="car.engine">
                    <label class="form-check-label" for="diesel">diesel</label>
                </div>
                <div class="form-check">
                    
                    <input class="form-check-input" type="radio" id="electric" value="electric" v-model="car.engine"></div>
                    <label class="form-check-label" for="electric">electric</label>
                <div class="form-check">
                    
                    <input class="form-check-input" type="radio" id="hybrid" value="hybrid" v-model="car.engine"></div>
                    <label class="form-check-label" for="hybrid">hybrid</label>

                </div>
        </div>
    </div>
    <div class="form-group row">
        <label for="numberOfDoors" class="col-4 col-form-label">Number of Doors</label>
        <div class="col-8">
          <div class="input-group">
            <input id="numberOfDoors" v-model="car.numberOfDoors" type="number" required="required" class="form-control here">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="offset-4 col-8">
          <button name="submit" type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
        <div class="form-group row">
            <div class="offset-4 col-8">
                <button @click="reset" name="submit" type="submit" class="btn btn-primary">reset form</button>
            </div>
      </div>
</form>
    </div>
</template>

<script>
import { carService } from '../services/Cars';

export default {
    
    data(){
        return {
            yearsArray: [],
            car: {
                brand: '',
                model: '',
                year: '',
                maxSpeed: '',
                isAutomatic: '',
                engine: '',
                numberOfDoors: '',



                
            }
        }
    },
    methods: {
        addCar(){
            carService.addACar(this.car)
                    this.$router.push({ name: 'cars-app' })

        },
        reset(){

            this.car = {}
        }
    },
    created() {
        let range = (start, stop, step=1) => Array(stop - start).fill(start).map((x, y) => x + y * step) 
        
        this.yearArray= range(1990, 2019)
    

    
      
    }
}
</script>
<style scoped>

</style>