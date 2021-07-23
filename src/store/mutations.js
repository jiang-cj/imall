import {ADDTOCART,ADD_COUNTER} from "./mutations_type";

export default {
  [ADD_COUNTER](state,payload){
    payload++
  },
  [ADDTOCART](state,payload){
    payload.checked=true
    state.cartList.push(payload)
  }
}
