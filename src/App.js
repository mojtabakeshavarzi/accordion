import { useState } from "react";
import Question from "./Question";
import data from './data';


function App() {

  const[questions , setQuestions] = useState(data);

  return (
    <div className="container">
      <h3>Welcome to random Facts !</h3>
      <div className="info">
    {
      questions.map((question) => {
        return (
          <Question {...question}/>
          )
      })
    }
      </div>

    </div>
  );
}

export default App;
