import React, { useContext, useEffect, useState } from "react"
import { Button } from "semantic-ui-react";
import { useHistory, useParams } from 'react-router-dom';
import { ReviewContext } from "../../providers/ReviewProvider";

export const ReviewForm = () => {
  const { addReview, doctorId } = useContext(ReviewContext)
  const history = useHistory();

  const [ review, setReview ] = useState({
    title: "",
    content: ""
  })

  const handleControlledInputChange = (event) => {
    const newReview = { ...review }

    newReview[event.target.id] = event.target.value
    setReview(newReview)
  }

  const saveReview = () => {
    addReview({
      title: review.title,
      content: review.content,
      createDateTime: Date.now,
      userProfileId: 1
    })
  }
}
