import React, {useState} from "react";
import Students from "./Components/Students";
import Header from "./Components/Header";
// import StudentCard from "./Card";
import studentData from "./data/data.json"
import SideBar from "./Components/SideBar";

function App() {
  const [showByDate, setShowByDate] = useState ([])
  const [cohortCode, setCohortCode] = useState("");

  const filterTitle = (title) => {
    const filtered = studentData.filter((student) => {
      return student.cohort.cohortCode === title;
    });
    
    setShowByDate(filtered); // Updating the state with the filtered students
    setCohortCode(title); // Updating the state with the selected cohort code
  };


  return (
    <div className="container-fluid">
      <Header />
      <div className="row mt-5">
        <div className="col">
          <SideBar setShowByDate = {setShowByDate}
          filterTitle = {filterTitle}
          students={studentData} />
        </div>
        <div className="col">
          <Students students={studentData}
          showByDate={showByDate}/>
        </div>
      </div>
    </div>
  );
}

export default App;
