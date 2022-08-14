
import { useState } from 'react';
import './App.css';
import data from './components/data';
import Questions from './components/Questions'
function App() {
  const [questions,setQuestions] = useState(data);
return (
  <>
  {questions.map(question=>{
    return(
      <Questions key={question.id} {...question}/>
    )
  })}
  </>
)
}

export default App;
