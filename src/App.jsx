import React, { useState } from "react";
import "./App.css";
 

function App() {
  const [input, setInput] = useState({ firstName: "", lastName:""})
  const [submitData, setSubmitData] = useState([])
  const [currentIndex, setCurrentIndex] = useState(null);


  const changeHandle = (e) => {
    const { name, value } = e.target
    setInput({...input, [name]: value })
  }
  
  const handleSubmitData = () => {
     if (currentIndex !== null) {
       // Update the existing entry
       const updatedData = [...submitData];
       updatedData[currentIndex] = input;
       setSubmitData(updatedData);
       setCurrentIndex(null); // Reset currentIndex
     } else {
       
       setSubmitData((prevData) => [...prevData, input])
     }


     setInput({firstName:"",lastName:""})


  }
   const handleUpdatedData = (index) => {
     const select = [...submitData];
     const selectedData = select[index];
     setInput({firstName: selectedData.firstName,lastName: selectedData.lastName});
     setCurrentIndex(index);
   };



  const handleDeleteData = (index) => {
    const deletedData = [...submitData]
    deletedData.splice(index, 1)
    setSubmitData(deletedData)
}


 return (
   <>
     <div className="container">
       <h4>Form</h4>
       <div className="content">
         <input
           name="firstName"
           value={input.firstName}
           placeholder="First Name..."
           onChange={changeHandle}
         />
         <input
           name="lastName"
           value={input.lastName}
           placeholder="Last Name..."
           onChange={changeHandle}
         />
        
         <button onClick={handleSubmitData}>Submit Data</button>
       </div>
     </div>

     <table id="customers">
       <thead>
         <tr>
           <th>First Name</th>
           <th>Last Name</th>
           <th>Edit</th>
           <th>Delete</th>
         </tr>
       </thead>
       <tbody>
         {submitData.map((val, index) => (
           <tr key={index}>
             <td>{val.firstName}</td>
             <td>{val.lastName}</td>
             <td>
               <button onClick={()=>handleUpdatedData(index)}>Edit</button>
             </td>
             <td>
               <button onClick={() => handleDeleteData(index)}>
                 Delete Data
               </button>
             </td>
           </tr>
         ))}
       </tbody>
     </table>
   </>
 );
}


export default App;
