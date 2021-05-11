import React, { useState, useContext, useEffect } from "react";
import { Button, Form, TextArea } from "semantic-ui-react";
import { ReviewContext } from "../../providers/ReviewProvider";
import { useHistory, useParams } from "react-router-dom";

const ReviewEdit = () => {
  const { updateReview, getReviewById, doctorId } = useContext(ReviewContext)
  const { id } = useParams();
  const [review, setReview] = useState({})
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const userProfile = sessionStorage.getItem("userProfile");

  useEffect(() => {
    getReviewById(id)
    .then(setReview)
  }, []);

  useEffect(() => {
    setTitle(review.title)
    setContent(review.content)
  }, [review])

  const saveReview = () => {
    updateReview({
      id: review.id,
      title: title,
      content: content
    })
    .then((review) => {
      history.push(`/doctors/${doctorId}`);
    })
  }

  const cancel = () => {
    history.push(`/doctors/${doctorId}`);
  };

  if (review === null) {
    return null
  }

  return (
    <div>
      <div>
        <div>
          <Form>
            <Form.Field>
              <label>Title</label>
              <input type="text" id="title" onChange={(event) => setTitle(event.target.value)} required autoFocus value={title} />
            </Form.Field>
            <Form.Field>
              <label>Content</label>
              <TextArea type="text" id="content" onChange={(event) => setContent(event.target.value)} required autoFocus value={content} rows="10" />
            </Form.Field>
            <Button onClick={saveReview}>Save</Button>
            <Button onClick={cancel}>Cancel</Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default ReviewEdit;
