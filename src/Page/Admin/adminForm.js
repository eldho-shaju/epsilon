// import {
//   Form,
//   Input,
//   Select,
//   Option,
//   RadioGroup,
//   Radio,
//   useFieldState,
//   useFieldApi,
// } from "informed";
// import "../ContactUs/ContactUs.css";
// import useAdminForm from "./useAdminForm";
// import { useEffect } from "react";

// const AdminForm = () => {
//   const {
//     handleChange,
//     docSelected,
//     operation,
//     handleOperationChange,
//     collectionName,
//     docVal,
//     handleDocumentChange,
//     formApiRef,
//     handleSubmit,
//     handleChangeImg,
//     img,
//     setImg,
//     message,
//     setMessage,
//   } = useAdminForm();

//   return (
//     <div>
//       <RadioButton handleChange={handleChange} />
//       <Form
//         className="contact-form"
//         formApiRef={formApiRef}
//         onSubmit={handleSubmit}
//       >
//         <MyForm
//           collectionName={collectionName}
//           operation={operation}
//           docSelected={docSelected}
//           docVal={docVal}
//           handleChangeImg={handleChangeImg}
//           handleOperationChange={handleOperationChange}
//           handleDocumentChange={handleDocumentChange}
//           img={img}
//           setImg={setImg}
//           formApiRef={formApiRef}
//         />
//       </Form>
//     </div>
//   );
// };

// export default AdminForm;

// function capitalizeFirstLetter(str = "") {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// const RadioButton = ({ handleChange }) => {
//   return (
//     <Form className="contact-form">
//       <RadioGroup name="collection" onChange={handleChange}>
//         <Radio value="product-type" label="Product Type" />
//         <Radio value="product-list" label="Product List" />
//         <Radio value="product-detail" label="Product Details" />
//       </RadioGroup>
//     </Form>
//   );
// };

// const MyForm = (props) => {
//   const {
//     collectionName,
//     handleChangeImg,
//     handleDocumentChange,
//     handleOperationChange,
//     operation,
//     docVal,
//     docSelected,
//     img,
//     setImg,
//     formApiRef,
//   } = props;

//   const keysArr = docVal && docVal?.length > 0 && Object.keys(docVal[0]);
//   const isDocSelected = !!docSelected;
//   const isOperationSelected = !!operation && operation === "Create";

//   return (
//     <>
//       <Select
//         name="operation"
//         label="Operation"
//         className="input-group"
//         disabled={!!collectionName === false}
//         onChange={handleOperationChange}
//       >
//         <Option key="" value="" disabled>
//           Options
//         </Option>
//         <Option key="create">Create</Option>
//         <Option key="update">Update</Option>
//         <Option key="delete">Delete</Option>
//       </Select>
//       {!!operation && (
//         <>
//           {operation !== "Create" && docVal?.length > 0 ? (
//             <>
//               <Select
//                 name="doc"
//                 label="Document"
//                 className="input-group"
//                 onChange={handleDocumentChange}
//               >
//                 <Option value="" disabled>
//                   Options
//                 </Option>
//                 {docVal?.map((ele) => (
//                   <Option key={ele?.key}>{ele?.key}</Option>
//                 ))}
//               </Select>
//             </>
//           ) : (
//             operation === "Create" && (
//               <Input
//                 label="Document Name"
//                 name="docName"
//                 type="text"
//                 placeholder="Enter document name"
//                 required={operation === "Create"}
//                 autoCapitalize="on"
//                 className="input-group"
//               />
//             )
//           )}
//         </>
//       )}
//       {/* {collectionName === "product-list" && isDocSelected ? } */}
//       {(isOperationSelected || isDocSelected) && (
//         <>
//           {keysArr &&
//             keysArr?.length > 0 &&
//             keysArr
//               ?.filter((ele) => ele !== "key")
//               ?.map((ele) => (
//                 <MyInput
//                   key={ele}
//                   ele={ele}
//                   values={docSelected}
//                   operation={operation}
//                   img={img}
//                   handleChangeImg={handleChangeImg}
//                   setImg={setImg}
//                 />
//               ))}
//           <div>
//             <button
//               onClick={() => {
//                 formApiRef?.current?.reset();
//                 setImg(null);
//               }}
//             >
//               Clear All
//             </button>
//             <button type="submit">
//               {operation === "Delete" ? "Delete" : "Upload & Submit"}
//             </button>
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// const MyInput = ({ ele, values, operation, img, handleChangeImg, setImg }) => {
//   const { setValueQuietly, setValue, clearValue } = useFieldApi(ele);
//   const { value: doc, dirty } = useFieldState("doc");

//   const inputValue = values && values[ele];

//   useEffect(() => {
//     if (!!doc) {
//       dirty ? setValue(inputValue) : setValueQuietly(inputValue);
//       if (ele === "img" && values) {
//         const link = values && values[ele];
//         setImg(link);
//       }
//     }
//   }, [doc]);

//   return (
//     <>
//       {ele !== "img" ? (
//         <Input
//           label={capitalizeFirstLetter(ele) || "Product Type"}
//           name={ele}
//           type="text"
//           placeholder={`Enter ${ele}`}
//           required={operation === "Create"}
//           className="input-group"
//           // initialValue={values?.type || ""}
//         />
//       ) : (
//         ele === "img" && (
//           <div style={{ marginTop: "15px", width: "min-content" }}>
//             {!!img && (
//               <img
//                 src={
//                   operation === "Create" && !!img
//                     ? URL.createObjectURL(img)
//                     : img
//                 }
//                 style={{
//                   width: "35%",
//                   borderRadius: "5px",
//                   marginBottom: "2px",
//                 }}
//               />
//             )}
//             <input
//               style={{ paddingLeft: "1px" }}
//               type="file"
//               placeholder="Upload your image"
//               required={operation === "Create"}
//               className="input-group"
//               onChange={handleChangeImg}
//             />
//           </div>
//         )
//       )}
//     </>
//   );
// };
