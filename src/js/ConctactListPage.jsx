import React, {useContext} from 'react';

import { Context } from './context/Provider.jsx';

import { actions } from './context/actions.js';


export default function ContactListPage(){

    const { state, dispatch } = useContext(Context);

    return(
        <div>
            <h1>Contact List Page</h1>

            <button onClick={() => dispatch(actions.ADD_CONTACT({name: 'Andres'}))}>Add test contact</button>

            {state.contacts.map((contact) => (
                <div>
                    <p>{contact.name}</p>
                </div>
            ))}

        </div>
    )
}