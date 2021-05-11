import React, { useContext, useEffect, useState } from "react"
import { Button, Form, TextArea } from "semantic-ui-react";
import { useHistory, useParams } from 'react-router-dom';
import { ReviewContext } from "../../providers/ReviewProvider";

const ReviewForm = () => {
  const { addReview, doctorId } = useContext(ReviewContext)
  const history = useHistory();

  const userProfile = sessionStorage.getItem("userProfile");
  const currentUser = JSON.parse(userProfile)


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
      userProfileId: currentUser.id,
      doctorId: doctorId
    })
    .then(setReview)
    .then(history.push(`/doctors/${doctorId}`))
  }

  return (
    <div>
      <div>
        <div>
          <h2>Add Review</h2>
          <Form>
            <Form.Field>
              <label>Title</label>
              <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus placeholder = 'Title' value={review.title} />
            </Form.Field>
            <Form.Field>
              <label>Content</label>
              <TextArea type="text" id="content" onChange={handleControlledInputChange} required autoFocus placeholder = 'Content' value={review.content} rows="10" />
            </Form.Field>
            <Button onClick={saveReview}>Save Review</Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default ReviewForm
