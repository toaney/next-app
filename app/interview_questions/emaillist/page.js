'use client';

// 1. Render the `initialData`
// 2. Upon entering the `name` and `email` fields and clicking the `Submit` button, add the entries as follows:
//    If the existing data contains the entered name, then append the new email entered by the user to the list of email against that name.
//    If not, then create a new entry
// 3. Add validations to the name and email fields. If invalid entries are submitted, then display the error message below indicated with class 'form__error' for 2 seconds.

import React, {useState, useEffect} from "react";
// import classes from "./App.module.css";
const initialData = [
  {
    name: "John",
    email: ["john.doe@test.com", "johnDoe1@gmail.com"]
  },
  {
    name: "Edward",
    email: ["edward.smith@test.com", "smith@test.com"]
  },
  {
    name: "Sandra",
    email: ["sandra.bullock@test.com", "bsandra@gmail.com"]
  },
  {
    name: "Alice",
    email: ["alice.b@test.com"]
  }
];



function App() {

  const [data, setData] = useState(initialData);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const errorTimeout = setTimeout(() => {
      setError('')
    }, 2000)

    return() => {
      clearTimeout(errorTimeout)
    }
  }, [error])

  function handleSubmit(e) {
    e.preventDefault();
    setError('')

    if (!name || !email) {
      setError("Please complete all fields")
    } else {

      let matchfound = false;

      const newState = data.map((item) => {
        if (item.name === name) {
          matchfound = true
          item.email.push(email)
          return item
        }
        return item
      })

      if (!matchfound) {
        newState.push({name: name, email: [email]})
      }
    
      setData(newState);
      setName('');
      setEmail('');
    }  
  };

  return (
    <>
      <ul>
        {data.map((item, index) => {
          return (
            <li key={index}>
              
                <span>{item.name}</span><br />
                <ul>

                  {item.email.length < 2 ? 
                    <li>{item.email[0]}</li> 
                  : 
                    item.email.map( (email, index)=> {
                      return <li key={index}>{email}</li>
                    })
                  }
                </ul>
            </li>
          )
        })}
      </ul>

      <form onSubmit={handleSubmit} >
        <p>Enter Name:</p>
        <input type="text" onChange={(e) => {setName(e.target.value)}} value={name}></input>

        <p>Enter Email:</p>
        <input type="text" onChange={(e) => {setEmail(e.target.value)}} value={email}></input>

        <button>Submit</button>
        {/* Render the below error for 2 seconds when invalid 'name' and 'email' are submitted in the above form. */}
        {/* <p className={classes.form__error}>Invalid data</p> */}
        {error? <p>{error}</p> : ""}
      </form>
    </>
  );
}

export default App;
