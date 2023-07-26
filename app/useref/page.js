'use client'

import React from 'react';
import './useref.css';

const page = (() => {

  const titleFocus = React.useRef();

  const shiftFocus = (() => {
    titleFocus.current.focus();
  })

  return(
    <>
      <h2>useRef</h2>
      <button onClick={() => shiftFocus()}>Shift Focus</button><br />
      
      <button className="button">push</button><br />
      <button className="button">push</button><br />
      <button className="button">push</button><br />
      <button className="button">push</button><br />
      <button className="button">push</button><br />
      <button className="button" ref={titleFocus}>push</button><br />
      <button className="button">push</button><br />
      <button className="button">push</button><br />
      <button className="button">push</button><br />
      <button className="button">push</button><br />
  
    </>
  )
})

export default page;