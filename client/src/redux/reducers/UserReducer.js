import { LOGINFAILED, REGISTER, REGISTERFAILED } from "../const/user";

const intialstate={
    currentuser:{},
    errors:[],
    error:{}
}

export const UserReducer=(state=intialstate,action)=>{

 switch (action.type) {
    case REGISTER:
          return {...state,currentuser:action.payload}
    case REGISTERFAILED:   
         return {...state,errors:action.payload}
    case LOGINFAILED:
        return {...state,error:action.payload}
    default:
        return state
 }

}