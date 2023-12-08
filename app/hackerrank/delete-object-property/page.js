'use client'

const page = () => {
  function removeProperty(obj, property){
    var x
    // for (x in object) {
    //   if (x === property){
    //     delete object[x];
    //   }

    //   return object;
    // }


    // const newObj = {...obj}
    
    // console.log(typeof(newObj))
    

    const newObj = Object.keys(obj).forEach((item) => {
      if (item !== property) {
        return item
      }
    })


    
    // const modifiedObj = newObj.map(prop => {
    //   if (prop !== property){
    //     return prop
    //   }
    // })



    return newObj;
  }

  var obj = {name: "Mary", age: 25}



  console.log('before', obj)
  removeProperty(obj, 'name');
  console.log('after', obj)


  return (
    <>
      <h2>Delete property from an object</h2>
    </>
  )
}

export default page;