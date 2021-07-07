import * as ActionTypes from './actionTypes';

export const addCar = (newCar) => {
  return {
    type: ActionTypes.ADD_CAR,
    value: newCar
  }
}

export const removeCar = (index) => {
  return {
    type: ActionTypes.REMOVE_CAR,
    value: index
  }
}