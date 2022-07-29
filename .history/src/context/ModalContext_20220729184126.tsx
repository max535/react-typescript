import {createContext, useState} from 'react';

interface IModalContext{
    model: boolean,
    open: () => void,
    close: () => void,
};

export const ModalContext = createContext<IModalContext>({
    modal: false,
    open: () => {},
    close: () => {},
});

export const ModalState = ({children}: {children: React.ReactNode}) => {
    const [modal, setModal] = useState(false);

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    );
}
