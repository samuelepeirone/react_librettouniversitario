import { useState, useEffect } from 'react';
import '../assets/css/Home.css';
import Button from '../funcComponents/ui/Button';
import InputBox from '../funcComponents/ui/InputBox';
import { Link } from 'react-router-dom'

function Home() {
  let tempNameExam = ''
  let tempGradeExam = ''
  let tempDateExam = ''
  const [state, setState] = useState(
    {
      exam: localStorage.getItem("librettoEsami")===null?[]:JSON.parse(localStorage.getItem("librettoEsami"))
    }
  )
  useEffect(
    () => {
      console.log('componente pronto -> didMount')
    }, [state]
  )
  function getNomeEsame(nomeEsame) {
    tempNameExam=nomeEsame
  }
  function getVotoEsame(votoEsame) {
    tempGradeExam=votoEsame
  }
  function getDataExam(dataEsame) {
    tempDateExam=dataEsame
  }
  function computeFinalResult(grade){
    var x=grade
    switch (true){
      case (x==31):
        return '30 e lode'
      case (x >= 18 && x<=30):
        return 'promosso'
      case (x<18):
        return 'bocciato'
      default:
        alert('diavolo matto')
        break;
    }
  }
  function saveExam() {
    let tempFinalResult=computeFinalResult(tempGradeExam)
    console.log('SALVA!')
    let tempExam = state.exam
    tempExam.push(
      {
        name: tempNameExam,
        grade: tempGradeExam,
        date: tempDateExam,
        finalResult: tempFinalResult
      }
    )
    setState(
      {
        ...state,
        exam: tempExam
      }
    )
    localStorage.setItem("librettoEsami", JSON.stringify(tempExam));
  }
  return (
    <div className="Home" id='ready'>
      <h1>Libretto universitario</h1>
      <Link to={'ListaEsami'}>Vai alla lista esami</Link>
      <p>
        <InputBox
          inputType={'text'}
          inputPlaceholder={'inserisci nome esame'}
          callbackInput={getNomeEsame}
        />
      </p>
      <p>
        <InputBox
          inputType={'number'}
          inputPlaceholder={'inserisci voto esame'}
          callbackInput={getVotoEsame}
          inputMin={0}
          inputMax={31}
        />
      </p>
      <p>
        <InputBox
          inputType={'date'}
          callbackInput={getDataExam}
        />
      </p>
      <p>
        <Button
          label={'inserisci'}
          callbackButton={saveExam}
        />
      </p>
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
    </div>
  );
}

export default Home;
