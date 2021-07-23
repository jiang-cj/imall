import {ADDTOCART,ADD_COUNTER} from "./mutations_type";

export default {
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
        let oldProduct = null
        for (let item of context.state.cartList){
          if (item.idd ===payload.iid){
            oldProduct = item
          }
        }
        if (oldProduct){
          context.commit(ADD_COUNTER,oldProduct)
        }else{
          payload.count = 1
          context.commit(ADDTOCART,payload)
          // context.state.cartList.push(payload)

        }
    })
  }
}
