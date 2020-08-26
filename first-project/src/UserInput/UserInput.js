import React from 'react';
import '../CSS/User.css';

const userInput = (props) => {
    return (
        <div className='User'>
            <input className='text' type="text" onChange={props.change} value={props.default} placeholder='Enter something to show' />
        </div>
    );
};
export default userInput;