'use client';

import React, {useEffect, useState} from 'react';
import './styles.css';

let columnNames = [
  {value: 'firstName', label: "First Name"},
  {value: 'lastName', label: "Last Name"},
  {value: 'email', label: "Email"}
  
]

const Header = ({columns}) => {
  console.log('********')
  console.log(columns)

  return(

      <thead>
        <tr>
          {columns.map(column=>{
            return(
              <td>{column.label}</td>
            )
          })

          }

        </tr>
      </thead>

  )
}

const Body = ({data}) => {

  console.log("######")
  console.log(data)
  return(
    <tbody>
      <tr>
        <td>data1</td>
        <td>data2</td>
        <td>data3</td>
      </tr>
      {data.map(item => {
        return(
          <tr>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
          </tr>
        
        )
      })}
    </tbody>
  )
}


const table = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let unmounted = false;

    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(json => {
      console.log(json)
      if (!unmounted) {
        setUsers(json.users)
      }
    })
      
    return () => {unmounted = true};
  }, [])





  return (
    <>
      <h2>Table</h2>
      <table className='table-component'>
        <Header columns={columnNames}/>
        <Body data={users}/>
      </table>
    </>
  )
}

export default table;