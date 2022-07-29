import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { ModalState } from './context/ModalContext';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <ModalState>
        <App />
    </ModalState>
)
