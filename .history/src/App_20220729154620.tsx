import React, {createElement as e} from 'react';

export function App() {
    return e('h1', {className: 'container'}, [
        e('h1', {className: 'font-bold', key: 1}, 'Text JSX'),
        e('button', {className: 'py-2 px-4 border', key: 2}, 'Click me!')
    ]);
}
