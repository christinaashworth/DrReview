import React, { useContext, useState, useEffect } from "react";
import { DoctorContext } from '../../providers/DoctorProvider';
import { UserProfileContext } from '../../providers/UserProfileProvider';
import { useHistory, useParams } from "react-router-dom";
import { Container, Header, Segment } from 'semantic-ui-react'

const DoctorDetails = () => {
  const { getDoctorById } = useContext(DoctorContext)
  const { doctor, setDoctor } = useState({})
  const { id } = useParams();
  const history = useHistory();
  
  useEffect(() => {
    getDoctorById(id)
      .then((response) => {
        setDoctor(response)
      })
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
    </Container>
  )
}

export default DoctorDetails;
