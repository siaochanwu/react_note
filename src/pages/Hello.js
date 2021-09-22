import React from "react";
import PropTypes from 'prop-types';

const Hello = (props) => {
    const {names} = props;

    return(
        <div>
            {names.map(name => (
                <h1>{`Hello ${name}`}</h1>
            ))}
            
        </div>
    )
}

Hello.propTypes = {
    names: PropTypes.array,
}

export default Hello;