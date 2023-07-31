'use client'

export default function reduce() {

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

  let output = directory.reduce((item) => { item.name === "John"})


  console.log(output)


  return(
    <>
      <h3>Reduce Methods</h3>
    </>
  )
}