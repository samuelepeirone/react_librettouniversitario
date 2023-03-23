import React from "react";
import PropTypes from 'prop-types';
import '../../assets/css/CardStats.css'

function CardStats(props) {
    return (
        <div className="CardStats">
            {
                props.inputObject.map(
                    (singleStat, i) => {
                        return (
                            <div key={i} className="StatsCard">
                                <div className="singleStat esamiSostenuti">
                                    <h1>Esami sostenuti:</h1> <p className="result">{singleStat.examCount}</p>
                                </div>
                                <div className="singleStat esamiMedia">
                                    <h1>Media:</h1> <p className="result">{singleStat.examAverage}</p>
                                </div>
                                <div className="singleStat esamiNoPassati">
                                    <h1>Non passati:</h1> <p className="result">{singleStat.examsNotPassed}</p>
                                </div>
                                <div className="singleStat esamiPassatiMer">
                                    <h1>Passati di cristo:</h1> <p className="result">{singleStat.examsPassedWithMerit}</p>
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}
CardStats.defaultProps = {
}
CardStats.propTypes = {
}
export default CardStats;