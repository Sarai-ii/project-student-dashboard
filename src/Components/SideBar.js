import "./SideBar.css"

export default function Sidebar({students, setShowByDate }) {
    
    let uniCodes = {}
    // let uniCodesArr;
    
    const sortedCohortList = students.sort((a,b) => {
    // uniCodesArr = Object.keys(uniCodes)
    // console.log(Object.keys(uniCodes))
    // let yearB = b.slice(-4)
    // let yearA = a.slice(-4)
    // return (yearB - yearA)
    // })} 
        const yearA = parseInt(a.cohort.cohortCode.slice(-4));
        const yearB = parseInt(b.cohort.cohortCode.slice(-4));
        return yearA - yearB;
  });
  console.log(students)
    
      
    function toggleShowCohortByDate (cohortCode) {
        console.log(cohortCode)
            let filteredStudents = students.filter(student => {
                return student.cohort.cohortCode === cohortCode
            }) 
            setShowByDate(filteredStudents)
    }    

    return (
        <div>
            <h3>Choose a Class by Start Date</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">All Students</li>
                {sortedCohortList.map(student => {
                    let cohortCodes = student.cohort.cohortCode.split("").slice(0,-4).join("") + " " + student.cohort.cohortCode.slice(1).slice(-4)
                    if (uniCodes[cohortCodes]){
                        return null
                    }else {
                        uniCodes[cohortCodes] = true
                        // uniCodesArr = Object.keys(uniCodes)
                    }
                    return (
                        <div key={student.id}>
                            <li onClick={() => {
                                toggleShowCohortByDate(student.cohort.cohortCode)
                            }}
                            className="list-group-item">{cohortCodes}</li>
                             
                        </div>
                    )
                })     
                }
            </ul>
        </div>
    )
}

  