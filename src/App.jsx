import { useState } from 'react'
import './App.css'

const data = [
  {
      question: "What is JavaScript?",
      answer: "JavaScript is a widely used programming language for creating dynamic interactions on web pages."
  },
  {
      question: "What are the main JavaScript frameworks?",
      answer: "Some of the main JavaScript frameworks include React, Angular, and Vue.js."
  },
  {
      question: "What is a React component?",
      answer: "A React component is a reusable modular unit of a user interface, often used to build page interfaces."
  },
  {
      question: "What's the difference between let, const, and var in JavaScript?",
      answer: "let and const are more modern ways to declare block-scoped variables, while var has function scope. const is used to declare variables whose value should not be changed after the initial assignment."
  }
]

function App() {

  const [selected , setSelected] = useState(null);

  const toggle = i => {
    if(selected ==  i ) {
      return setSelected(null);
    }

    setSelected(i);
  }

  return (
    <>
      <div className='wrapper'>
        {data.map((item , i) => (
            <div className='accordion' key={item.question}>
              <div className='title' onClick={() => toggle(i)}>
                <h2>{item.question}</h2>  
                <span>
                  {selected === i ? "-" : "+"}
                </span>
              </div>

              <div className={selected === i ? "content show" : "content"}>
                <p>
                  {item.answer}
                </p>
              </div>
            </div>
        ))}
      </div>
    </>
  )
}

export default App
