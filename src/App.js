import axios from "axios";
import { useState,useEffect } from "react";
import { BrowserRouter, Route,Routes} from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  /*const getQuestions = async (category = "", diff = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${diff&& `&difficulty=${diff}`}&type=multiple`
    );

    setQuestions(data.results);
  };*/
  async function getQuestions(category = "", diff = "") {
    try {
      const {data} = await axios.get( `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${diff && `&difficulty=${diff}`}&type=multiple`);
      setQuestions(data.results)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getQuestions();
  },[])

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
        <Route path='/' element={<Home name={name} setName={setName} getQuestions={getQuestions}/>} /> 
        
        <Route path='/Quiz' element={<Quiz name={name} score={score} setScore={setScore} questions={questions} setQuestions={setQuestions}/>}/>
          
         <Route path='/Result' element={<Result />}/>
           
     </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
