'use client';

import React from 'react';

const directory = [
  {
    name: "John",
    email: "john.doe@test.com"
  },
  {
    name: "Edward",
    email: "edward.smith@test.com"
  },
  {
    name: "John",
    email: "johnDoe1@gmail.com"
  },
  {
    name: "Sandra",
    email: "sandra.bullock@test.com"
  },
  {
    name: "Edward",
    email: "smith@test.com"
  },
  {
    name: "Sandra",
    email: "bsandra@gmail.com"
  },
  {
    name: "Alice",
    email: "alice.b@test.com"
  }
];

let dict = {};
let output = []

directory.map((item) => {
  console.log(item.name)
  
  if (dict[item.name] || dict[item.name] === 0){
    let outputIndex = dict[item.name]
    console.log(dict[item.name])
    console.log("$$$$$$$$$$$$")
    output[outputIndex].email.push(item.email)
  } else {
    let index = output.length
    output.push({name: item.name, email: [item.email]})
    dict[item.name] = index
    console.log(dict[item.name])
  }

  console.log(dict)
})


console.log(dict)
console.log(output)

const page = (() => {
  return (
    <>
      <h3>Map method with dictionary</h3>
    </>
  )
});

export default page;