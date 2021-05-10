import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Review = ({ review }) => {
  const history = useHistory();
  const userProfile = sessionStorage.getItem("userProfile");
  const currentUser = JSON.parse(userProfile);

  const editReview = () => {
    history.push(`/review/edit/${review.id}`);
  };

  const deleteReview = () => {
    history.push(`/review/delete/${review.id}`);
  };

  if (currentUser.id === review.userProfileId) {
    return (
      <div>
        <div>
          <p>{review.title}</p>
          <p>{review.content}</p>
          <p>{review.userProfile.username}</p>
          <p>{new Date(review.createDateTime).toLocaleDateString("en-US").split(', ')[0]}</p>
        </div>
        <Button onClick={editReview}>Edit</Button>
        <Button onClick={deleteReview}>Delete</Button>
      </div>
    )
  } else {
    return (
      <div>
        <div>
          <p>{review.title}</p>
          <p>{review.content}</p>
          <p>{review.userProfile.username}</p>
          <p>{new Date(review.createDateTime).toLocaleDateString("en-US").split(', ')[0]}</p>
        </div>
      </div>
    )
  }
}

export default Review;
