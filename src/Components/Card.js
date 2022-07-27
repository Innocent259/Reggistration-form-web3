import React, {useState} from 'react';
import registration from '../utils/registration'


function Card() {
    const[attendees, setAttendees] = useState([]);
    let allStudents = [];
    const getStudents = async(e) => {
        e.preventDefault();
        const Students = await registration.methods.getStudents().call()
        setAttendees(Students)
        console.log('Sub student', attendees)
    }

    return (
        <div>
            <button onClick={getStudents}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded my-4">
                show attendees
                </button>
                

                <div>
                
            
                                          
        </div>

        </div>

    );
    
}
export default Card;