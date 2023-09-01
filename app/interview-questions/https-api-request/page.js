'use client'
import React, {useEffect} from 'react';


const page = () => {


useEffect(() => {
  // const Http = new XMLHttpRequest();
  // const url = 'https://reqres.in/api/users';

  // Http.open("GET", url);
  // Http.send();

  // Http.onreadystatechange=(e)=>{
  //   console.log(Http.responseText)
  // }


  const Http = new XMLHttpRequest();
  const url = 'https://reqres.in/api/users';

  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange=(e)=>{
    console.log(Http.responseText)
  }

  Http.onreadystatechange=function(){
    console.log("########")
    console.log(this)
    console.log(this.readyState)
    if(this.readyState==4 && this.status==200){
      console.log(Http.responseText)
    }
  }
  

}, [])


  return<h2>https api request</h2>
}

export default page;