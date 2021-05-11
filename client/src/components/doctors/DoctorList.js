import React, { useContext, useState, useEffect } from "react";
import { DoctorContext } from '../../providers/DoctorProvider';
import Doctor from "./Doctor";
import SearchDoctors from "./SearchDoctors";
import { Button } from "semantic-ui-react"

const DoctorList = () => {
  const { doctors, getAllDoctors, searchResults } = useContext(DoctorContext);
  const [listOfDoctors, setListOfDoctors] = useState([])

  useEffect(() => {
    getAllDoctors();
  }, []);

  useEffect(() => {
    if (searchResults) {
      setListOfDoctors(searchResults) 
    } else {
      setListOfDoctors(doctors)  
    }
  }, [])

  console.log(searchResults)

  return (
    <div>
    <SearchDoctors />
    <div className="container">
      {listOfDoctors.map((doctor) => (
        <Doctor key={doctor.id} doctor={doctor} />
      ))}
    </div>
    </div>
  )
}

export default DoctorList
