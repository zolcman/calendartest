//import { CLOSE_POPUP } from '../../actionTypes'
import Immutable from 'immutable'

const initialUserState =
{


}
;
const NavBarReducer = function(state = initialUserState, action) {
   //console.log('actiondata in reducer:' + action.data + action.type);

  switch(action.type) {

  case 'CHANGETAB':
		 return Object.assign({}, state, { InTab: action.data });
 break;




  default:

  return state;
  }
}
export default NavBarReducer
