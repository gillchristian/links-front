import Store from './Store';
import AppDispatcherSingleton from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/AppConstants';
import axios from 'axios';

export default LinkStoreSingleton;

/**
 * Get all the links
 */
function getAllLinks(){
  return
}

class PersonsStore extends Store {

  constructor() {
    super();
  }

  /**
   * State getter
   */
  getState() {
  	return getAllLinks;
  }

}

var LinkStoreSingleton = new PersonsStore();

LinkStoreSingleton.dispatchToken = AppDispatcherSingleton.register(action => {

  switch(action.type) {
    /**
     * Compares the persons by age
     */
    case ActionTypes.PERSONS_COMPARE:
      compareAll();
      LinkStoreSingleton.emitChange();
      break;
    /**
     * Resets the compared persons
     */
    case ActionTypes.PERSONS_RESET:
      resetMargins();
      LinkStoreSingleton.emitChange();
      break;
    /**
     * Sort the persons by age
     */
    case ActionTypes.PERSONS_ORDER_BY_AGE:
      sortByAge();
      LinkStoreSingleton.emitChange();
      break;
    /**
     * Show tooltip related to a patriarch
     */
    case ActionTypes.PERSONS_SWITCH_TOOLTIP:
      tooltipState(action.id);
      LinkStoreSingleton.emitChange();
      break;

    default:
      // no default action
  }
});
