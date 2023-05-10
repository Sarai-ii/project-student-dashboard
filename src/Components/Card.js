import { useState } from "react";
import "./StudentCard.css";
import StudentDetail from "./StudentDetail";

function StudentCard ({student}) {

    const [showDetails, setShowDetails] = useState(false);

    
    function handleBirthday (birthday) {
        let months = ["January","February", "March", "June", "July", "August", "September", "October", "November", "December"]
        
        let birthdate = new Date(birthday)
        let year = birthdate.getFullYear()
        let month = birthdate.getMonth()
        let day = birthdate.getDay()
        // console.log(`${months[month]} ${day}, ${year}`)
        return `${months[month]} ${day}, ${year}`
    }
    
    function onTrackToGraduate (certified, currentCode) {
        certified = student.certifications
        if (certified.resume === true && certified.linkedin === true && certified.github === true && certified.mockInterview === true && currentCode > 600){
            return ("On Track To Graduate")
        } else {
            console.log("works")
        }

    }

    const toggleShowDetails = () => {
        setShowDetails(!showDetails)
    }
        
        return (
            <div className= " main-container container-fluid">
            <img className="card-img"src={student.profilePhoto} alt="profile"></img>
            <div className="row">
                <div className="text-start col">
                    <h3 className="">{student.names.preferredName} {student.names.surname}</h3>

                    <p className=""> {student.username}</p>
                    <p><span className="text-success">Birthday:</span> {handleBirthday(student.dob)}</p> 
                </div>
                <div className=" text-success col-4">
                    <p >{onTrackToGraduate(student.certifications,student.codewars.current.total)}</p>
                </div>
                <div className="">
                    {
                        showDetails ? (
                            <div className="">
                                <button className="btn text-success" type="submit" onClick={toggleShowDetails}>Show Less..</button>
                                <span>
                                    <StudentDetail student={student}/></span>
                            </div>
                        ) : (
                            <button className="btn text-success" type="submit" onClick={toggleShowDetails}>Show More...</button>
                            )
                        }
                </div>   
            </div>
        </div>
    )
}
export default StudentCard;





