'use client';

const page = ({params}) => {
  return<h2>test: {JSON.stringify(params.test)}</h2>
}

export default page;