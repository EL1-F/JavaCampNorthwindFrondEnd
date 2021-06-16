//tüm state leri topladığım yer

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";



const rootReducer = combineReducers ({

    cart : cartReducer
    //diğer reducer larda buraya yazılır
})

export default rootReducer;