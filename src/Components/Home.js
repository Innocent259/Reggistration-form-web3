import React, {useEffect, useState } from 'react';
import './Home.css';
import web3 from '../utils/web3';
import registration from '../utils/registration';

//const owner ='0x0B725AA0c6F7eaa970BCE09907d525d54e214520'





export default function Home() {
  //const [length, setLength] = useState("");
  const [name, setName] = useState("");
  const [students, setStudents] = useState([])
  const [studentId, setStudentId] = useState(0);
  const [highschoolName, setHighschoolName] = useState("");
  const [universityFaculty, setUniversityFaculty] = useState("");
  const [message, setMessage] = useState("");
  
  const gettingStudents = async () => {
    const Students = await registration.methods.getStudents().call();
    //console.log(Students);
    setStudents(Students)
    // setLength(Students.length);
    // console.log("Students length:", Students.length); 
    
    
    
    
    
    
  }
  useEffect (() => {
    gettingStudents()
  });

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    let accounts;
    try {
      accounts = await window.ethereum.enable();
    } catch (error) {
      console.log(error);
    }
    
    setMessage("Processing your request please wait...");

    await registration.methods
    .addStudent(name, studentId, highschoolName, universityFaculty)
    .send({ from: accounts[0]})
    .then(() => {
      setMessage(" successfully registered");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    })
    
    // const gettingStudents = async () => {
    //   const student = await registration.methods.getStudents().call();
    //   let accounts = await window.ethereum.enable();
    //   //setLength(student.length);
    //   // if ( accounts[0].toString().toLowercase() == owner.toString().toLowercase()){
    //   //   setRole
    //   // }
     

    // }
  
  
    
 }
    return (   
       <div className="min-h-screen flex flex-col justify-center items-center">
         {/* <div className="text-xl text-gray-700 font-mono font-bold">Fill this form</div> */}


        <div>
          <h1>New Students registration form</h1>
        <h2>charges will be applied to your account</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
        <div>  
         <label> Name </label>
           
         <input type="text"
         value ={name}
         onChange = {(e) => setName(e.target.value)}>

         </input>
         </div> 

         <div>
         <label> Id number  </label>
          <input type="text"
          value = {studentId}
          onChange = {(e) => setStudentId(e.target.value)}
          ></input>
          </div>

          <div>
          <label> Highschool name  </label>
             <input type="text"
             value = {highschoolName}
             onChange = {(e) => setHighschoolName(e.target.value)}>

             </input>
             </div>

             <div> 
             <label>University faculty</label>
             <input type="text"
             value = {universityFaculty}
             onChange = {(e) => setUniversityFaculty(e.target.value)}>
             </input>
             </div>
             <div className="text-gray-700 text-xl font-bold mb-4">
                <h3>{message}</h3>
              </div> 
              
               

              <button className="m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
              Enter
            </button>
            </form>
            
            </div>
            <h5>Already on list</h5>
            
            <div>

              {students.map((student) => {
                
                return (
                  
                  <div>
                    
                    {/* <label>Name</label> */}
                    <div>{student.Name}</div> 
                    {/* <label>Id</label> */}
                    <div>{student.studentId}</div>
                    <div>{student.highschoolName}</div>

                   
                   </div>   

                
                  // {student.studentId}
                  
                )
                
              })}
            </div>
                
               
               
        
               
          
      
             
         </div>
        //  </div>
        //   </div>
          
            
               
        
    );
}
 
