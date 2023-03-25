import React from "react";
import PropTypes from 'prop-types';
import '../../assets/css/Button.css'

function Button(props){
    function clickButton(event){
        props.callbackButton()
    }

    return(
        <button onClick={clickButton} id={props.id} className={props.className}>
            {props.label} {props.icon}
        </button>
    )
}
Button.defaultProps = {
    label:'Button'
}
Button.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.element,
    className: PropTypes.string,
    id: PropTypes.string,
    callbackButton: PropTypes.func.isRequired
}
export default Button;