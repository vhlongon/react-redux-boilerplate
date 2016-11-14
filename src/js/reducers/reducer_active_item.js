// State argument is not application state, only the state this specific reducer is responsible for
export default function (state = {}, action) {
  switch (action.type) {
    case 'ITEM_SELECTED':
      return {...state, ...action.item};
  }
  return state;
}
