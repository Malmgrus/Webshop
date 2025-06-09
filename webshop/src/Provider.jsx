import React, { useState, createContext } from 'react';

export const StoreContext = createContext({});

export const Provider = ({ children }) => {
    const [store, setStore] = useState({});

    return (
        <StoreContext.Provider value={{ store, setStore }}>
            {children}
        </StoreContext.Provider>
    )
};