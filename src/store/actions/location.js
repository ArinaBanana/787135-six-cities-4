const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
};

const ActionCreator = {
  setLocation: (city) => {
    return {type: ActionType.CHANGE_CITY, payload: city};
  }
};

export {ActionType, ActionCreator};
