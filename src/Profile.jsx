import React from "react";
function Profile({ user,setMessage }) {
  const {
   message, avatar_url,followers,following,html_url,login,public_repos
} = user;
if(message) return <div className="notfound">OOps...User Not found!</div>

  return <div className="wrapper">
  <div className="user_name_profile_image flex">
  <div className="userImage">
  <img src={avatar_url}></img>
  </div>
  <h2 className="user-name">{login}</h2>
  </div>
  <div className="details-wrapper flex">
  <div className="details flex">
    <div className="followers">Followers: <span>{followers}</span> </div>
    <div className="following">Following: <span>{following}</span></div>
    <div className="repos">Repos: <span>{public_repos}</span></div>
    </div>
    <a className="visit-btn flex" href={html_url} target="_blank">Visit</a>
  </div>
  


  </div>;
}

export default Profile;
