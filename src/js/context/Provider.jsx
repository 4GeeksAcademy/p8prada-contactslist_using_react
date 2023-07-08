import React, {createContext, useReducer} from "react";

import { ADD_CONTACT, EDIT_CONTACT } from '../context/actions.js'
export const Context = createContext();


const reducer = (state, action) => {
    console.log('In the reducer', action)
    switch(action.type){
        case ADD_CONTACT: {
            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    action.data
                ]
            }
        }

        case EDIT_CONTACT:{
            return{

            }
        }

        default: {
            return state;
        }
    }
}

const initialState = {
    contacts: [
        {
            name: 'Julian Prada',
            email: 'p8prada@gmail.com',
            phone: '(786) 612-2978',
            address: '3000 SW 17th ST'
        }
    ]
}

export default function Provider(props){

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={{state, dispatch}}>
            {props.children}
        </Context.Provider>
    )
}