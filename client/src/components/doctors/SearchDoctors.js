import React, { useContext, useEffect, useState } from "react"
import { Button, Form, TextArea } from "semantic-ui-react";
import { useHistory, useParams } from 'react-router-dom';
import { DoctorContext } from "../../providers/DoctorProvider";

const SearchDoctors = () => {
  const { search } = useContext(DoctorContext);
  const history = useHistory();

  const [searchTerm, setSearchTerm] = useState("");

  const handleControlledInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchTerm !== "") {
    search(searchTerm);
    }
  }, [searchTerm]);

  return (
    <Form>
      <input type="text" onChange={handleControlledInputChange} placeholder="Search" value={searchTerm} />
    </Form>
  )
}

export default SearchDoctors;
