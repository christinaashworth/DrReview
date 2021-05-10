import React, { useEffect, useContext, useState } from "react";
import { ReviewContext } from "../../providers/ReviewProvider";
import Review from "./Review";

const UserReviewList = () => {
  const [userReviews, setUserReviews] = useState();
  const { getReviewsByUser } = useContext(ReviewContext);
  
  const userProfile = sessionStorage.getItem("userProfile");
  const currentUser = JSON.parse(userProfile)

  useEffect(() => {
    getReviewsByUser(currentUser.id)
    .then(setUserReviews);
  }, []);

  return (
    <div>
      {userReviews ? userReviews.map(review => {
        return <Review key={review.id} review={review} />
      }) : "You haven't posted any reviews yet."}
    </div>
  )
}

export default UserReviewList
