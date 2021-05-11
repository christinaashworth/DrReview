import React, { useContext, useEffect, useState } from "react";
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { useHistory } from 'react-router-dom';
import { Image } from "semantic-ui-react";
import UserReviewList from "../reviews/UserReviewList";

const MyProfile = () => {
  const { getUserProfileById } = useContext(UserProfileContext)
  const [ user, setUser ] = useState({})
  const history = useHistory();

  const userProfile = sessionStorage.getItem("userProfile");
  const currentUser = JSON.parse(userProfile)

  useEffect(() => {
    getUserProfileById(currentUser.id)
    .then(setUser)
  }, []);

  return (
    <div>
    <Image src={user.ProfilePhoto} size='small' />
    <h3>{user.username}</h3>
    <p>{user.city}</p>
    <p>Member since: {user.dateCreated}</p>
    <div>{user.email}</div>
    <UserReviewList />
    </div>
  )
}

export default MyProfile;
