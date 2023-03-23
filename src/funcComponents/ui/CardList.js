import React from "react";
import PropTypes from 'prop-types';
import '../../assets/css/CardList.css'
import {BsCalendarDate} from 'react-icons/bs';
import { IoMdSchool } from "react-icons/io";

function CardList(props) {
    return (
        <div className="CardList">
            {
                props.inputObject.map(
                    (singleExam, i) => {
                        return (
                            <div key={i} className="Card">
                                <div className="listBanner" style={singleExam.finalResult=='bocciato' ? {backgroundColor: "#EA5455"} : {backgroundColor: "#7AA874"}}></div>
                                <div className="CardBody">
                                    <h1>
                                        {
                                            singleExam.name
                                        }
                                    </h1>
                                    <p className="unitoWatermark">
                                        Università degli Studi di Torino&nbsp;
                                        <IoMdSchool className="icons"/>
                                    </p>
                                    <span className="grade">
                                        {
                                            singleExam.gradeResult
                                        }
                                    </span>
                                    <p className="date">
                                        <BsCalendarDate className="icons"/>&nbsp;
                                        {
                                            singleExam.date
                                        }
                                    </p>
                                    <p className="boxEsito">
                                        <span className="date">
                                            Esito esame:&nbsp;
                                        </span>
                                        <span className="result">
                                            {
                                                singleExam.finalResult
                                            }
                                        </span>
                                    </p>
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}
CardList.defaultProps = {
}
CardList.propTypes = {
}
export default CardList;