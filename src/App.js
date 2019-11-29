import React, {useState} from "react";
import "./App.css";
import Header from "./Header.js";
import Form from "./Form.js";
import Preview from "./Preview.js";

function App() {
  const [input, setInput] = useState({feedback: "", party: 2});

  const handleChange = e => {
    setInput({...input, [e.target.name]: e.target.value});
  };

  return (
    <div className="app">
      <Header />

      <main className="app-main">
        <section className="app-left">
          <Form handleChange={handleChange} input={input} />
        </section>
        <section className="app-right">
          <Preview input={input} />
        </section>
      </main>
    </div>
  );
}

export default App;
