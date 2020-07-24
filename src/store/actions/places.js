import {generatePlaces} from "../../mocks/places";
const places = generatePlaces();

const ActionType = {
  SET_PLACES: `SET_PLACES`,
};

const ActionCreator = {
  setPlaces() {
    return {type: ActionType.SET_PLACES, payload: places};
  }
};

export {ActionType, ActionCreator};
