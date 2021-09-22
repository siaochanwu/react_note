import React, {useState} from "react";
import PropTypes from 'prop-types';

const Task = (props) => {

    const { task } = props;

    return (
        <div>{task}</div>
    )
}

Task.propTypes = {
    task: PropTypes.string,
}

Task.defaultProps = {
    task: '',
}



export default Task