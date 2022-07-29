import {createContext} from 'react';

interface IModalContext{
    model: boolean,
    open: () => void,
    close: () => void,
};

createContext<IModalContext>({})
