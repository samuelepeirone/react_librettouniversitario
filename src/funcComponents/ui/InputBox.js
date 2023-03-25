import React from "react";
import PropTypes from 'prop-types';
import '../../assets/css/InputBox.css'

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
            value={props.value}
        />
    )
}
InputBox.defaultProps = {
    inputPlaceholder:'Input',
    inputType: 'text'
}
InputBox.propTypes = {
    callbackInput: PropTypes.func.isRequired,
    inputType: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    inputMin: PropTypes.number,
    inputMax: PropTypes.number,
    value: PropTypes.string
}
export default InputBox;