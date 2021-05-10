import React from "react";
import { useHistory } from "react-router-dom";

const Doctor = ({doctor}) => {
  const history = useHistory();

  const viewDetails = () => {
    history.push(`/doctors/${doctor.id}`)
  }

  return (
    <div>
    <p>
      {doctor.name}
    </p>
      <button onClick={viewDetails}>View Details</button>
    </div>     
  )
}

export default Doctor
