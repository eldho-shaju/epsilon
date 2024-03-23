// import {
//   collection,
//   deleteDoc,
//   doc,
//   getDocs,
//   setDoc,
// } from "firebase/firestore";
// import { db, storage } from "../../firebaseSdk";
// import { useId, useRef, useState } from "react";
// import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

// const useAdminForm = () => {
//   const [operation, setOperation] = useState();
//   const [docVal, setDocVal] = useState([]);
//   const [docSelected, setDocSelected] = useState(null);
//   const [message, setMessage] = useState({ status: false, msg: "" });
//   const [collectionName, setCollectionName] = useState(null);
//   const [img, setImg] = useState("");
//   const formApiRef = useRef();
//   const imgUrlRef = useRef(null);
//   // const [imgUrl, setImgUrl] = useState(null);
//   const id = useId();

//   const handleChange = (e) => {
//     setDocVal([]);
//     setCollectionName(e.value);
//     formApiRef.current.reset();
//     setOperation(null);
//     setDocSelected(null);
//     setImg(null);
//   };

//   const handleOperationChange = async (e) => {
//     setOperation(e.value);
//     setImg("");
//     if (!!collectionName) {
//       setDocVal([]);
//       const doc = await getDocs(collection(db, collectionName));
//       doc.forEach(async (doc) => {
//         setDocVal((prevVal) => [...prevVal, { key: doc?.id, ...doc?.data() }]);
//         // if (!!doc.data() === false) {
//         //   setError(true);
//         // }
//       });
//     }
//   };

//   const handleDocumentChange = async (e) => {
//     const obj =
//       docVal &&
//       docVal?.length > 0 &&
//       docVal?.find((ele) => ele?.key === e.value);
//     setDocSelected(obj);
//     // const objLength = Object.keys(obj).length;
//     // if (collectionName === "product-list" && objLength > 0) {
//     //   const sfRef = db.collection(collectionName).doc(obj?.key);
//     //   const collections = await sfRef.listCollections();
//     //   collections.forEach((collection) => {
//     //     console.log("Found subcollection with id:", collection.id);
//     //   });
//     // }
//   };

//   const handleChangeImg = async (e) => {
//     setImg(e.target.files[0]);
//     const storageRef = ref(
//       storage,
//       `${collectionName}/${e.target.files[0]?.name + "_" + id}`
//     );
//     uploadBytes(storageRef, e.target.files[0]);
//     try {
//       const response = await getDownloadURL(
//         ref(storage, `${collectionName}/${e.target.files[0]?.name + "_" + id}`)
//       );
//       if (!!response) imgUrlRef.current = response;
//     } catch (error) {
//       console.error("Error fetching download URL:", error);
//     }
//   };

//   const keysArr = docVal && docVal?.length > 0 && Object.keys(docVal[0]);

//   const handleSubmit = async (formVal) => {
//     if (docSelected === null && img === null) return;
//     const documentName = formVal?.values?.docName
//       ? `${formVal?.values?.docName}`
//       : docSelected?.key;

//     const isMerging = operation === "Update" ? true : false;
//     const data = {};
//     keysArr
//       ?.filter((key) => key !== "key" && key !== "id")
//       ?.forEach((key) => {
//         if (key === "img") {
//           data[key] = imgUrlRef.current;
//         } else {
//           data[key] = formVal?.values[key];
//         }
//       });
//     try {
//       if (operation === "Create" || operation === "Update") {
//         await setDoc(doc(db, collectionName, documentName), data, {
//           merge: isMerging,
//         });
//       }
//       if (operation === "Delete") {
//         await deleteDoc(doc(db, collectionName, docSelected?.key));
//       }
//       setMessage({ status: true, msg: "Successfull" });
//       formApiRef.current.reset();
//       setImg(null);
//     } catch (err) {
//       console.error(err);
//       setMessage({ status: true, msg: "Something went wrong" });
//     }
//   };

//   return {
//     handleChange,
//     docSelected,
//     operation,
//     handleOperationChange,
//     collectionName,
//     docVal,
//     handleDocumentChange,
//     formApiRef,
//     handleSubmit,
//     img,
//     setImg,
//     handleChangeImg,
//     message,
//     setMessage,
//   };
// };

// export default useAdminForm;
