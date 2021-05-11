import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "semantic-ui-react"

const Doctor = ({doctor}) => {
  const history = useHistory();

  const viewDetails = () => {
    history.push(`/doctors/${doctor.id}`)
  }

  return (
    <Card className="doctor">
    <Card.Content>
      <Card.Header>
      {doctor.name}
      </Card.Header>
      <Card.Meta>
        {doctor.location}
      </Card.Meta>
      <Card.Description>
        {doctor.practiceArea}
      </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Button onClick={viewDetails}>View Details</Button>
      </Card.Content>
    </Card>     
  )
}

export default Doctor
