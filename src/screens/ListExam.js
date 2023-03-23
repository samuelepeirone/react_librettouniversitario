import React from "react";
import { useState, useEffect } from 'react';
import '../assets/css/Home.css';
import Button from '../funcComponents/ui/Button';
import { Link } from 'react-router-dom'
import CardList from "../funcComponents/ui/CardList";
import CardStats from "../funcComponents/ui/CardStats";
import {AiOutlineBarChart} from 'react-icons/ai';

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
        let num = 0
        let tempExamsNotPassed = 0
        let tempExamsPassedWithMerit = 0
        state.exam.map(
            (singleExam, i) => {
                let tempNum = parseInt(singleExam.grade)
                num += tempNum
                count++
                if (singleExam.finalResult == 'bocciato') {
                    tempExamsNotPassed++
                }
                if (singleExam.grade == 30 || singleExam.grade == 31) {
                    tempExamsPassedWithMerit++
                }
            }
        )
        console.log('count--> ', count)
        let avg = num / count
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
            <h1>Lista esami</h1>
            <Link to={'/'}>Indietro</Link>
            <div className='listaInserimenti'>
                <h1>Lista esami</h1>
                <p>
                    <CardList
                        inputObject={state.exam}
                    />
                </p>
            </div>
            <div className="statsExam">
                <h1>Stats</h1>
                <p>
                    <Button
                        label={'Visualizza'}
                        icon={<AiOutlineBarChart className="icons"/>}
                        callbackButton={computeStats}
                        className={'blueButton'}
                    />
                </p>
                <p>
                    <CardStats
                        inputObject={state.stats}
                    />
                </p>
            </div>
        </div >
    );
}

export default ListExam;