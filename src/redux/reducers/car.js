import { act } from "react";

const ADD_CAR = 'ADD_CAR';

const initState = {
    cars:[
        {
            model: "BMW",
            year: 2017
        },
        {
            model: "Honda",
            year: 2015
        },
        {
            model: "Audi",
            year: 2010
        },
        {
            model: "Toyota",
            year: 2020
        },
        {
            model: "Mercedes",
            year: 2016
        }
    ]
};

export default function (state = initState, action){
    switch(action.type){
            case ADD_CAR:{
                return{
                    ...state, 
                    cars: [action.car,...state.cars]
                }
            }
        default:{
            return state
        }
    }
}


export const addCar = (car)=>{
    return(dispatch)=>{
        return dispatch({type: ADD_CAR, car})
    }
}