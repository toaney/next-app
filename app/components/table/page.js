'use client';

import { useCallback, useEffect, useState } from 'react';
import './styles.css';


function sortData({ tableData, sortKey, sortOrder }) {

  if (!sortKey) return tableData;

  const sortedData = tableData.sort((a, b) => {
    return a[sortKey] < b[sortKey] ? -1 : 1;
  })

  if (sortOrder === 'desc') {
    return sortedData.reverse();
  }

  return sortedData
}

function SortButton({columnValue, onClick, sortOrder, sortKey} ) {

  return (
    <button onClick={onClick}>
      {/* {console.log(columnValue)} */}
      {sortKey === columnValue && sortOrder === 'asc' ?
        '▲'
        :
        'V'
      }
      {/* {columnValue} */}
    </button>
  )
}

const table = () => {
  const [users, setUsers] = useState([]);
  const [sortKey, setSortKey] = useState('firstName');
  const [sortOrder, setSortOrder] = useState('asc');

  let columnNames = [
    { value: 'firstName', label: "First Name" },
    { value: 'lastName', label: "Last Name" },
    { value: 'email', label: "Email" }
  ]

  const sortedData = useCallback(
    () => sortData({ tableData: users, sortKey, sortOrder }),
    [users, sortKey, sortOrder]
  );

  function changeSort(key){
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setSortKey(key);
  }

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

    return () => { unmounted = true };
  }, [])


  return (
    <>
      <h2>Table</h2>
      <table className='table-component'>
        <thead>
          <tr>
            {columnNames.map(column => {
              {console.log('$$$$$$$$$$$$$$')}
              {console.log(column.value)}
              return (
                <td>{column.label} <SortButton columnValue={column.value} onClick={() => changeSort(column.value)} sortOrder={sortOrder} sortKey={sortKey}/></td>
              )
            })

            }

          </tr>
        </thead>

        <tbody>
          {/* {console.log('@@@@@@@@@@@@@@@@@@@@@')}
      {console.log(sortedData)} */}
          {sortedData().map(user => {
            return (
              <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
              </tr>

            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default table;