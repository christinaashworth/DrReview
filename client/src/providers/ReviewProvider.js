import React, { useState, useContext } from "react";
import { UserProfileContext } from './UserProfileProvider';

export const ReviewContext = React.createContext();

export const ReviewProvider = (props) => {
  const apiUrl = "/api/review";
  const [doctorId, setDoctorId] = useState(0)
  const { getToken } = useContext(UserProfileContext);

  const getReviewsByDoctor = (doctorId) => {
    return getToken().then((token) => 
      fetch(`${apiUrl}/GetReviewsByDoctor/${doctorId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((res) => res.json()))
  }

  const getReviewsByUser = (userId) => {
    return getToken().then((token) =>
      fetch(`${apiUrl}/GetReviewsByUser/${userId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((res) => res.json()))
  }

  const getReviewById = (reviewId) => {
    return getToken().then((token) => 
    fetch(`${apiUrl}/${reviewId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
    )
  }

  const addReview = (review) => {
    return getToken().then((token) =>
    fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review)
    })
      .then((res) => res.json()))
  }

  const updateReview = (review) => {
    return getToken().then((token) =>
    fetch(`${apiUrl}/${review.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(review)
    }))
  }

  const deleteReview = (id) => {
    return getToken().then((token) =>
      fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }))
  }

  return (
    <ReviewContext.Provider value={{ getReviewsByDoctor, getReviewsByUser, getReviewById, addReview, updateReview, deleteReview, doctorId, setDoctorId }}>
      {props.children}
    </ReviewContext.Provider>
  )
}
