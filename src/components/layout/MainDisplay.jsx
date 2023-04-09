import { useContext } from "react"
import { userContext } from "../../context/UserContext"
import placeholder from './assets/placeholder.png';
import Octocat from './assets/octocat.png';
import { MdLocationOn as LocationPin } from 'react-icons/md';
import { BsTwitter as TwitterIcon } from 'react-icons/bs';
import { BiLinkAlt as LinkIcon } from 'react-icons/bi';
import { BsFillBuildingsFill as BuildingIcon } from 'react-icons/bs';



function MainDisplay() {

  // Context
    const {user} = useContext(userContext);
    
    // format date
    let formattedDate;
    if (user && user.created_at) {
      const date = new Date(user.created_at);
     formattedDate = new Intl.DateTimeFormat('en-US', {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(date)
    } else {
      formattedDate = 'Today';
    }
    
    
    
  return (
    <>
      <section className="main-display">
        {/* USER IMAGE */}
        <div className="display-img-container">
          <img className="display-img" src={user && user.avatar_url || Octocat} alt="" />
        </div>
        {/* USER INFORMATION */}
        <div className="information-container">
          {/* top info */}
          <div className="top-display-info">
            <h1 className="username-title"> {user && user.name || 'The Octocat'} <span className="date-joined">Joined: {formattedDate}</span> </h1>
            <br />
            <p className="display-username">{user && `@${user.login}` || '@Octocat'}</p>
            <p className="display-bio">{user && user.bio || 'Full Stack Developer'}</p>
            <br />
          </div>
          {/* stats */}
          <div className="stats-display">
            <div className="repos stat">
              <p>Public Repos</p>
              <h4>{user && user.public_repos || '0'}</h4>
            </div>
            <div className="followers stat">
              <p>Followers</p>
              <h4>{user && user.followers || '0'}</h4>
            </div>
            <div className="following stat">
              <p>Following</p>
              <h4>{user && user.following || '0'}</h4>
            </div>
          </div>
          {/* bottom info */}
          <div className="bottom-display-info">
            <div className="location">
              <LocationPin /> 
              <span> {user && user.location || 'The Ocean'}</span>
            </div>
            <div className="social">
              <TwitterIcon />
              <span> @{`${user && user.twitter_username}`} </span>
            </div>
            <div className="blog">
              <LinkIcon />
              <span> {user && user.blog || 'User has no blog'} </span>
            </div>
            <div className="home-page">
              <BuildingIcon />
              <span> {user && user.company || 'No Empoyer to show'} </span>
            </div>
          </div>
        </div>
      </section>    
    </>
  )
}

export default MainDisplay