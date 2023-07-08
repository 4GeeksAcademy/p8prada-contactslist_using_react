import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ContactListPage from '../ConctactListPage.jsx';

// import Home from './home.jsx';
// import TodoPage from './TodoPage.jsx';
import ContextProvider from '../context/Provider.jsx';


export default function Router() {
    return (
            <BrowserRouter>
                    <ContextProvider>

                    {/* <ContactListPage/> */}
                    <Routes>
                        <Route exact path="/" element={<ContactListPage />} />
                        
                        <Route exact path="*" element={<h1>NOT FOUND!</h1>} />
                        </Routes>
                    </ContextProvider>
            </BrowserRouter>
    )
}