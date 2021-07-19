import {request} from "./request"; //用{}的原因是因为不是default导出
export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}

export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type:type,
      page:page,

    }
  })
}
