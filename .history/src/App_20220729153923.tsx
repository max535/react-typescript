import React, {createElement as e} from 'react';

export function App() {
    return e('h1', {className: 'container'}, [
        e('h1', {className: 'font-bold'}, 'Text JSX'),
        e('button', {className: ''}, 'Click me!')
    ]);
}
