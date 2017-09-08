import React from 'react';
import ReactDOM from 'react-dom';
import SimpleInlineToolbarEditor from './Component/SimpleInlineToolbarEditor';

const App = () => (
    <div>
        <h1>SimpleInlineToolbarEditor</h1>
        <SimpleInlineToolbarEditor />
    </div>
)
console.log('Rending app');
ReactDOM.render(<App/>, document.getElementById('app'));
