import React, { useState, useContext } from "react";
import { UserProfileContext } from './UserProfileProvider';

export const DoctorContext = React.createContext();

export const DoctorProvider = (props) => {
  const apiUrl = "/api/doctor";
  const [doctors, setDoctors] = useState([]);
  const [searchResults, setSearchResults] = useState([])
  const { getToken } = useContext(UserProfileContext);

  const getAllDoctors = () => {
    return getToken().then((token) =>
    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    })
    .then((res) => res.json())
    .then(setDoctors))
  }

  const getDoctorById = (id) => {
    return getToken().then((token) => 
      fetch(`${apiUrl}/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      .then(res => res.json())
      )
  }

  const search = (q) => {
    return getToken().then((token) =>
      fetch(`${apiUrl}/search`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      .then((res) => res.json()))
      .then(setSearchResults)
  }

  return (
    <DoctorContext.Provider value={{doctors, setDoctors, getAllDoctors, getDoctorById, search}}>
      {props.children}
    </DoctorContext.Provider>
  )
}
