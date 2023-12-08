'use client';

import React, {useEffect, useState} from 'react';
import TodoItem from './TodoItem';

const taskList = [
  {
    id: 1,
    value: "take out the trash",
    checked: false
  },
  {
    id: 2,
    value: "do the dishes",
    checked: false
  },
  {
    id: 3,
    value: "feed the rabbits",
    checked: true
  }
]


const TodoList = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState(taskList);


  const handleSubmit = e => {
    e.preventDefault();
  }


  const handleChange = (e) => {
    // write state change here

    console.log("current item");
    console.log(e.target.id)

    // let updatedTodos = [...todos]
    
    // todos.map(item => {

    //   console.log("item id")
    //   console.log(item.id)


    //   if (e.target.id === item.id.toString()) {
    //     console.log("item match")
    //     // update checked
    //     item.checked = !item.checked;
    //   }

    //   return item
    // })

    // updatedTodos.sort((a, b) => {
    //   return a.checked? 1 : -1; 
    // })

    setTodos((todos) => {
      let updatedTodos = [...todos]
    
      todos.map(item => {
  
        console.log("item id")
        console.log(item.id)
  
  
        if (e.target.id === item.id.toString()) {
          console.log("item match")
          // update checked
          item.checked = !item.checked;
        }
  
        return item
      })
  
      updatedTodos.sort((a, b) => {
        return a.checked? 1 : -1; 
      })

      return updatedTodos
    })

    // setTodos([
    //   {
    //     id: 1,
    //     value: "take out the trash1",
    //     checked: false
    //   },
    //   {
    //     id: 2,
    //     value: "do the dishes1",
    //     checked: false
    //   },
    //   {
    //     id: 3,
    //     value: "feed the rabbits1",
    //     checked: true
    //   }
    // ])
    
  }

  return(
    <>
      <h2>Todos</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"></input>
        <button>Add Todo</button>
      </form>

      {todos.map(item => {
        return <TodoItem key={item.id} id={item.id} value={item.value} checked={item.checked} callback={handleChange}/>
      })}
    </>
  )
}

export default TodoList;












// 'use client';

// import React, {useState} from 'react';




// const TodoList = () => {
//   const [todoInput, setTodoInput] = useState('')
//   const [list, setList] = useState(["test", "test2"]);



//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setList([...list, todoInput])
//     setTodoInput('')

//   }

//   return (
//     <>
//       <h1>Todo List</h1>

//       <form onSubmit={handleSubmit}>
//         <input type="text" value={todoInput} onChange={(e)=> {setTodoInput(e.target.value)}}></input>
//         <button>submit</button>
//       </form>

//       <ul>
//         <li>test</li>
//         {list.map((item) => {
//           return (
//             <li>
//               {item}
//             </li>
//           )
//         })}

//       </ul>

//     </> 


//   )

// }

// export default TodoList;