import StudentCard from "./Card"

export default function Students ({students, showByDate}) {
   let changeCard = showByDate.length > 0 ? showByDate : students
    return (
        <div className="student-list">
        <h2>{showByDate.length > 0 ? showByDate[0].cohort.cohortCode.split("")
                .slice(0, -4)
                .join("") +
                " " +
                showByDate[0].cohort.cohortCode.slice(1).slice(-4) :"All Students"}</h2>
        <h4>Total Students: {changeCard.length}</h4>
            {
                changeCard.map(student => {
                    return (
                        <StudentCard
                        key={student.id} 
                        student = {student}/>
                    )
                })
            }   
        </div>   
    )
}