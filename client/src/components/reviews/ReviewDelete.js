import React, { useContext, useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { ReviewContext } from "../../providers/ReviewProvider";
import { useHistory, useParams } from "react-router-dom";

const ReviewDelete = () => {
  const { id } = useParams();
  const [review, setReview] = useState({});
  const history = useHistory();
  const { deleteReview, getReviewById, doctorId } = useContext(ReviewContext)

  useEffect(() => {
    getReviewById(id)
    .then(setReview)
  }, [])

  const deleteThisReview = () => {
    deleteReview(id)
  }

  const cancel = () => {
    history.push(`/reviews/${id}`)
  }

  return (
    <div> 
      <h2>
       Are you sure you want to delete? 
      </h2>
      <p>Review: {review.title}</p>
      <Button onClick={deleteThisReview}>Yes, delete.</Button>
      <Button onClick={cancel}>No, never mind.</Button>
    </div>
  )
}

export default ReviewDelete;
