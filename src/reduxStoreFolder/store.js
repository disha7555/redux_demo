import {createStore} from "redux";

const reducer=(state1=0,action)=>{
    switch (action.type) {
        case 'INCREMENT': return state1+1;                
        default:return state1;
           
    }
}
export const store=createStore(reducer);
