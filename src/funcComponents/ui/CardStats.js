import React from "react";
import PropTypes from 'prop-types';
import '../../assets/css/CardStats.css'
import {MdAutoGraph, MdTrendingDown} from 'react-icons/md';

function CardStats(props) {
    return (
        <div className="CardStats">
            <p className="info">Informazioni sulla tua carriera universitaria:</p>
            {   
                props.inputObject.map(
                    (singleStat, i) => {
                        return (
                            <div key={i} className="StatsCard">
                                <div className="singleStat esamiSostenuti">
                                    <h1>Esami sostenuti:</h1> <p className="result">{singleStat.examCount}</p>
                                </div>
                                <div className="singleStat esamiMedia">
                                    <h1>Media:</h1> <p className="result">{(singleStat.examAverage).toFixed(2)}</p>
                                </div>
                                <div className="singleStat esamiNoPassati">
                                    <h1>Non passati:</h1> <p className="result">{singleStat.examsNotPassed}</p>
                                    <p className="percentage" style={{color: '#e86b6d'}}><MdTrendingDown className="icons"/> {(((singleStat.examsNotPassed)/singleStat.examCount)*100).toFixed(1)}%</p>
                                </div>
                                <div className="singleStat esamiPassatiMer">
                                    <h1>Passati con merito:</h1> <p className="result">{singleStat.examsPassedWithMerit}</p>
                                    <p className="percentage" style={{color: '#0abb3c'}}><MdAutoGraph className="icons"/> {(((singleStat.examsPassedWithMerit)/singleStat.examCount)*100).toFixed(1)}%</p>
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}
CardStats.propTypes = {
    inputObject: PropTypes.object.isRequired
}
export default CardStats;