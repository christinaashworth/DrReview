import React, { useState, useContext } from "react";
import { UserProfileContext } from './UserProfileProvider';

export const ReviewContext = React.createContext();

export const ReviewProvider = (props) => {
  const apiUrl = "/api/review";
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

  
}
