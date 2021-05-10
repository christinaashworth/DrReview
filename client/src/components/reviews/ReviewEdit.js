import React, { useState, useContext, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { ReviewContext } from "../../providers/ReviewProvider";
import { useHistory, useParams } from "react-router-dom";

const ReviewEdit = () => {
  const { updateReview, getReviewById } = useContext(ReviewContext)
  const { id } = useParams();
  const [review, setReview] = useReview({})
  const history = useHistory();

  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");

  const userProfile = sessionStorage.getItem("userProfile");

  useEffect(() => {
    getReviewById(id)
    .then(setReview)
  }, []);

  useEffect(() => {
    setTopic(review.topic)
    setContent(review.content)
  }, [review])

  const saveReview = (event) => {
    const updatedReview = {
      ...review
    };
    updatedReview.topic = topic
    updatedReview.content = content

    updateReview(updatedReview)
    .then((review) => {
      history.push(`/reviews/${review.id}`);
    })
  }

  const cancel = () => {
    history.push(`/reviews/${review.id}`);
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
              <input type="text" id="title" onChange={(event) => event.target.value} required autoFocus value={title} />
            </Form.Field>
            <Form.Field>
              <label>Content</label>
              <TextArea type="text" id="content" onChange={(event) => event.target.value} required autoFocus value={content} rows="10" />
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
