import { useState, useEffect } from 'react';
import '../assets/css/Home.css';
import Button from '../funcComponents/ui/Button';
import InputBox from '../funcComponents/ui/InputBox';
import { Link } from 'react-router-dom'
import CardList from '../funcComponents/ui/CardList'
import { AiOutlineFileAdd, AiOutlineDelete } from 'react-icons/ai';

function Home() {
  const [state, setState] = useState(
    {
      exam: localStorage.getItem("librettoEsami") === null ? [] : JSON.parse(localStorage.getItem("librettoEsami")),
      messageName: '',
      messageGrade: '',
      messageDate: ''
    }
  )
  useEffect(
    () => {
      console.log('componente pronto -> didMount')
      controlForm()
    }, [state.messageName, state.messageGrade, state.messageDate]
  )
  function getNomeEsame(nomeEsame) {
    setState({
      ...state,
      messageName: nomeEsame
    })
  }
  function getVotoEsame(votoEsame) {
    setState({
      ...state,
      messageGrade: votoEsame
    })
  }
  function getDataExam(dataEsame) {
    setState({
      ...state,
      messageDate: dataEsame
    })
  }
  function computeFinalResult(grade) {
    var x = grade
    switch (true) {
      case (x == 31):
        return '30 e lode'
      case (x >= 18 && x <= 30):
        return 'promosso'
      case (x < 18):
        return 'bocciato'
      default:
        alert('ooops!')
        break;
    }
  }
  function computeGradeResult(grade){
    var x = grade
    switch (true) {
      case (x == 31):
        return '30 e lode'
      default:
        return x
    }
  }
  function saveExam() {
    let tempFinalResult = computeFinalResult(state.messageGrade)
    console.log('SALVA!')
    let tempExam = state.exam
    tempExam.push(
      {
        name: state.messageName,
        grade: state.messageGrade,
        gradeResult: computeGradeResult(state.messageGrade),
        date: state.messageDate,
        finalResult: tempFinalResult
      }
    )
    setState(
      {
        ...state,
        exam: tempExam,
        messageName: '',
        messageGrade: '',
        messageDate: ''
      }
    )
    localStorage.setItem("librettoEsami", JSON.stringify(tempExam));
  }
  function deleteAllExams() {
    setState(
      {
        ...state,
        exam: []
      }
    )
    localStorage.removeItem("librettoEsami")
  }
  function controlForm() {
    if (state.messageName && state.messageGrade && state.messageDate) {
      document.getElementById('addExamButton').disabled = false
    }
    else {
      document.getElementById('addExamButton').disabled = true
    }
  }

  return (
    <div className="Home" id='ready'>
      <h1>Libretto universitario</h1>
      <Link to={'ListaEsami'}>Vai alla lista esami</Link>
      <div className='formExam'>
        <h1>Inserimento</h1>
        <p>
          <InputBox
            inputType={'text'}
            inputPlaceholder={'Nome esame'}
            callbackInput={getNomeEsame}
            value={state.messageName}
          />
        </p>
        <p>
          <InputBox
            inputType={'number'}
            inputPlaceholder={'Voto esame'}
            callbackInput={getVotoEsame}
            inputMin={0}
            inputMax={31}
            value={state.messageGrade}
          />
        </p>
        <p>
          <InputBox
            inputType={'date'}
            callbackInput={getDataExam}
            value={state.messageDate}
          />
        </p>
        <p>
          <Button
            label={'Inserisci'}
            icon={<AiOutlineFileAdd className='icons'/>}
            callbackButton={saveExam}
            id={'addExamButton'}
            className={'blueButton'}
          />
        </p>
      </div>
      <div className='listaInserimenti'>
        <h1>Lista inserimenti</h1>
        <p>
          <CardList
            inputObject={state.exam}
          />
        </p>
        <p>
          <Button
            label={'Elimina lista'}
            icon={<AiOutlineDelete className='icons'/>}
            callbackButton={deleteAllExams}
            className={'redButton'}
          />
        </p>
      </div>
    </div>
  );
}

export default Home;
