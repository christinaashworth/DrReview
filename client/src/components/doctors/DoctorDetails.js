import React, { useContext, useState, useEffect } from "react";
import { DoctorContext } from '../../providers/DoctorProvider';
import { UserProfileContext } from '../../providers/UserProfileProvider';
import { useHistory, useParams } from "react-router-dom";
import DoctorReviewList from "../reviews/DoctorReviewList";
import { Container, Header, Segment, Button } from 'semantic-ui-react'

const DoctorDetails = () => {
  const { getDoctorById } = useContext(DoctorContext)
  const 
  const [ doctor, setDoctor ] = useState({})
  const { id } = useParams();
  const doctorId = parseInt(id);
  const history = useHistory();

  useEffect(() => {
    getDoctorById(doctorId)
      .then(setDoctor)
  }, []);

  const reviewForm = () => {
    history.push('/addreview')
  }

  return (
    <Container>
      <Header as='h1'>{doctor.name}</Header>
      <Header as='h3'>{doctor.practiceArea}</Header>
        <Segment>
          <div>{doctor.Location}</div>
          <div>{doctor.Gender}</div>
          <div>{doctor.Phone}</div>
          <div>{doctor.Email}</div>
        </Segment>
        <Button onClick={reviewForm}>Add Review</Button>
      <DoctorReviewList />
    </Container>
  )
}

export default DoctorDetails;
