import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Index = ({ children }) => {
    return (
        <>
            <ToastContainer position="top-right" limit={1} />
            {children}
        </>
    );
};

export default Index;