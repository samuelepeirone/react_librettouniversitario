import React from "react";
import { useState, useEffect } from 'react';
import '../assets/css/Home.css';
import Button from '../funcComponents/ui/Button';
import NavBar from '../funcComponents/ui/NavBar';
import { Link } from 'react-router-dom'
import CardList from "../funcComponents/ui/CardList";
import CardStats from "../funcComponents/ui/CardStats";
import { AiOutlineBarChart } from 'react-icons/ai';
import { MdVerticalSplit, MdCreate } from 'react-icons/md';

function ListExam() {
    const [state, setState] = useState(
        {
            exam: localStorage.getItem("librettoEsami") === null ? [] : JSON.parse(localStorage.getItem("librettoEsami")),
            stats: []
        }
    )
    useEffect(
        () => {
            console.log('useEffect computeStats()')
            computeStats()
        }, [state.exam]
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
            <NavBar
                Page1={<Link to={'/'}>Libretto </Link>}
                ClassPage1={'linkPage'}
                IconPage1={<MdCreate className='icons' />}
                Page2={'Lista esami'}
                ClassPage2={'thisPage'}
                IconPage2={<MdVerticalSplit className='icons' />}
            />
            <section>
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
                        <CardStats
                            inputObject={state.stats}
                        />
                    </p>
                </div>
            </section>
        </div >
    );
}

export default ListExam;