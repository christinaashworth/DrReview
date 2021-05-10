import React, { useContext, useState, useEffect } from "react";
import { DoctorContext } from '../../providers/DoctorProvider';
import { ReviewContext } from '../../providers/ReviewProvider';
import { useHistory, useParams } from "react-router-dom";
import DoctorReviewList from "../reviews/DoctorReviewList";
import { Container, Header, Segment, Button } from 'semantic-ui-react'

const DoctorDetails = () => {
  const { getDoctorById } = useContext(DoctorContext)
  const [ doctor, setDoctor ] = useState({})
  const { doctorId, setDoctorId } = useContext(ReviewContext);
  const { id } = useParams();
  const parsedId = parseInt(id);
  const history = useHistory();

  useEffect(() => {
    getDoctorById(parsedId)
      .then(setDoctor)
      .then(setDoctorId(parsedId))
  }, []);

  const reviewForm = () => {
    history.push('/addreview')
  }

  return (
    <Container>
      <Header as='h1'>{doctor.name}</Header>
      <Header as='h3'>{doctor.practiceArea}</Header>
        <Container>
          <p>{doctor.location}</p>
          <p>{doctor.gender}</p>
          <p>{doctor.phone}</p>
          <p>{doctor.email}</p>
        </Container>
      <Button onClick={reviewForm}>Add Review</Button>
      <DoctorReviewList />
    </Container>
  )
}

export default DoctorDetails;
