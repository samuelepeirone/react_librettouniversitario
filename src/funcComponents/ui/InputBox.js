import React from "react";
import PropTypes from 'prop-types';

function InputBox(props){
    function onChangeInput(event){
        props.callbackInput(event.target.value)
    }
    return(
        <input
            onChange={onChangeInput}
            type={props.inputType}
            placeholder={props.inputPlaceholder}
            min={props.inputMin}
            max={props.inputMax}
        />
    )
}
InputBox.propTypes = {
    callbackInput: PropTypes.func.isRequired,
    inputType: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    inputMaxLength: PropTypes.number
}
export default InputBox;