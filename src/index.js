import React from 'react';
import ReactDOM from 'react-dom';
import UserPanel from './UserPanel';

function App(){

    return (
        <>
            <UserPanel/>
        </>
    )

}
ReactDOM.render(<App/>, document.getElementById('root'));

//ReactDOM.render(React.createElement(UserPanel,{}, null), document.getElementById('root'));
