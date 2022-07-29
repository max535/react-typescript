import React, {createElement as e} from 'react';

export function App() {
    return e('h1', {className: 'container', key: 1}, [
        e('h1', {className: 'font-bold', key: 2}, 'Text JSX'),
        e('button', {className: '', key: 2}, 'Click me!')
    ]);
}
