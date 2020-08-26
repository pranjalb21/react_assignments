import React from 'react';

import '../CSS/User.css';

const userOutput = (props) => {
    return(
        <div className='User'>
            <p className='para'>{props.name}</p>
        </div>
    );
};

export default userOutput;