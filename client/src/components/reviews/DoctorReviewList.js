import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ReviewContext } from '../../providers/ReviewProvider';
import Review from "./Review";

const DoctorReviewList = () => {
  const { getReviewsByDoctor } = useContext(ReviewContext);
  const [ reviews, setReviews ] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getReviewsByDoctor(parseInt(id))
    .then(setReviews)
    .then(console.log(reviews))
  }, []);

  return (
    <div className="container">
      <div>
        {reviews.map((review) => (<Review key={review.id} review={review} />))}
      </div>
    </div>
  )

}

export default DoctorReviewList;
