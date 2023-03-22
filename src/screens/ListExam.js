import React from "react";
import { useState, useEffect } from 'react';
import Button from '../funcComponents/ui/Button';
import { Link } from 'react-router-dom'

function ListExam() {
    let tempCount = 0
    const [state, setState] = useState(
        {
            exam: localStorage.getItem("librettoEsami") === null ? [] : JSON.parse(localStorage.getItem("librettoEsami")),
            stats: []
        }
    )
    useEffect(
        () => {
            console.log('componente pronto -> didMount')
        }, [state]
    )
    function computeStats() {
        let tempExam = state.exam
        let count = 0
        let num=0
        let tempExamsNotPassed=0
        let tempExamsPassedWithMerit=0
        state.exam.map(
            (singleExam, i) => {
                let tempNum=parseInt(singleExam.grade)
                num+=tempNum
                count++
                if(singleExam.finalResult=='bocciato'){
                    tempExamsNotPassed++
                }
                if(singleExam.grade==30 || singleExam.grade==31){
                    tempExamsPassedWithMerit++
                }
            }
        )
        console.log('count--> ',count)
        let avg=num/count
        let tempStats = [{
            examCount: count,
            examAverage: avg,
            examsNotPassed: tempExamsNotPassed,
            examsPassedWithMerit: tempExamsPassedWithMerit

        }]
        setState({
            ...state,
            stats: tempStats
        })
    }
    return (
        <div id="ready" className="ListExam">
            <Link to={'/'}>Indietro</Link>
            <h1>Lista esami</h1>
            <p>
                STAMPA ESAMI:
                {
                    state.exam.map(
                        (singleExam, i) => {
                            return (
                                <div key={i}>
                                    <p>
                                        {
                                            singleExam.name
                                        }
                                        -
                                        {
                                            singleExam.grade
                                        }
                                        -
                                        {
                                            singleExam.date
                                        }
                                        -
                                        {
                                            singleExam.finalResult
                                        }
                                    </p>
                                </div>
                            )
                        }
                    )
                }
            </p>
            <h1>Stats</h1>
            <p>
                <Button
                    label={'inserisci'}
                    callbackButton={computeStats}
                />
            </p>
            {
                state.stats.map(
                    (singleStat, i) => {
                        return (
                            <div key={i}>
                                <p>
                                    Esami sostenuti: {singleStat.examCount}
                                </p>
                                <p>
                                    Media esami: {singleStat.examAverage}
                                </p>
                                <p>
                                    Non passati: {singleStat.examsNotPassed}
                                </p>
                                <p>
                                    Passati di cristo: {singleStat.examsPassedWithMerit}
                                </p>
                            </div>
                        )
                    }
                )
            }
        </div >
    );
}

export default ListExam;