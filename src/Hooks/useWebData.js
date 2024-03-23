// "use client";
// import { useEffect, useState } from "react";
// // import SteinStore from "stein-js-client";
// import { db } from "../firebaseSdk";
// import { collection, getDocs } from "firebase/firestore";

// // const api = "https://api.steinhq.com/v1/storages/65a562272acf6d63de7ba018";

// const useWebData = ({ sheetName }) => {
//   // const store = new SteinStore(api);
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // if (sheetName)
//     //   store.read(sheetName).then((data) => {
//     //     // setData(data);
//     //   });
//     async function fetchData() {
//       const querySnapshot = await getDocs(collection(db, sheetName));
//       querySnapshot.forEach((doc) => {
//         // console.log("======", doc.data());
//         setData((prevData) => [...prevData, doc.data()]);
//         setLoading(false);
//       });
//     }
//     fetchData();
//   }, []);

//   return { data, loading };
// };

// export default useWebData;
