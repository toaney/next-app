import "./styles.css";
import React, { useState, useEffect } from "react";
import Carousel from "./carousel/Carousel";

export default function App() {
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    fetchData("https://pokeapi.co/api/v2/pokemon/bulbasaur", {signal: abortController.signal});

    return () => {
      abortController.abort();
    }
  }, []);

  const fetchData = async function (url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP Error: status ${response.status}`);
      }
      const data = await response.json();
      // console.log(data.types.map(item => item.type.name));
      const typeList = [];
      console.log(data);
      // setItemList(data.types.map((item) => typeList.push(item.type.name)));
      setItemList(
        data.stats.map((item) =>
          typeList.push(`{${item.stat.name}, ${item.base_stat}}`)
        )
      );
      console.log(
        data.stats.map((item) =>
          typeList.push(`{${item.stat.name}, ${item.base_stat}}`)
        )
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Carousel itemList={itemList} />
    </div>
  );
}



// import React, { useState, useEffect } from "react";
// import Carousel from "./carousel/Carousel";

// export default function App() {
//   const [itemList, setItemList] = useState([]);

//   useEffect(() => {
//     const abortConroller = AbortController;
//     async function fetchData(url) {
//       try {
//         const response = await fetch(url, {signal: AbortController.signal});
//         if (!response.ok) {
//           throw new Error(`HTTP Error: status ${response.status}`);
//         }
//         const data = await response.data.json();
//         console.log(data);

//         setItemList(data);
//         return data;
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     fetchData("https://pokeapi.co/api/v2/pokemon/pikachu");
//     // return (() => {
//     // abortConroller.abort()
//     // })
//   }, []);

//   return (
//     <div className="App">
//       <Carousel />
//     </div>
//   );
// }
