import React from "react";
import PropTypes from 'prop-types';
import '../../assets/css/NavBar.css'

function NavBar(props){
    return(
        <nav>
            <span className={props.ClassPage1}>{props.Page1} {props.IconPage1}</span>
            <span className={props.ClassPage2}>{props.Page2} {props.IconPage2}</span>
        </nav>
    )
}
NavBar.defaultProps = {
    Page1: 'Page1',
    Page2: 'Page2'
}
NavBar.propTypes = {
    ClassPage1: PropTypes.string,
    ClassPage2: PropTypes.string,
    Page1: PropTypes.element,
    Page1: PropTypes.element,
    IconPage1: PropTypes.element,
    IconPage2: PropTypes.element
}
export default NavBar;