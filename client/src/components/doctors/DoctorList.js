import React, { useContext, useEffect } from "react";
import { DoctorContext } from '../../providers/DoctorProvider';
import Doctor from "./Doctor";

const DoctorList = () => {
  const { doctors, getAllDoctors } = useContext(DoctorContext);

  useEffect(() => {
    getAllDoctors();
  }, []);

  return (
    <div className="container">
      {doctors.map((doctor) => (
        <Doctor key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
}

export default DoctorList
