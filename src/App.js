import logo  from './logo.svg';
import './App.css';
import  {useState} from "react"
import data from './Components/data'
import SingleQuestion from './Components/SingleQuestion'

function App() {

const [question, setquestion] = useState(data)

  return (
    <main>
  <div className="container">
    <h3>Questions and Answers about login</h3>
  
  <section className="info">
    {
      question.map((question)=>{
return <SingleQuestion key={question.id} {...question}/>
      })
    }
  </section>
  </div>
    </main>
  );
}

export default App;
