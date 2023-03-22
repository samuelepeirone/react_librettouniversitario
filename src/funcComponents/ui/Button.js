import React from "react";
import PropTypes from 'prop-types';

function Button(props){
    function clickButton(event){
        props.callbackButton()
    }

    return(
        <button onClick={clickButton}>
            {props.label}
        </button>
    )
}
Button.defaultProps = {
    label:'title'
}
Button.propTypes = {
    label: PropTypes.string,
    classCss: PropTypes.string,
    fontSize: PropTypes.number,
    callbackButton: PropTypes.func.isRequired
}
export default Button;