import React from 'react'
import './TeamCard.css'
import { Link} from 'react-router-dom'

function TeamCard(props){
    return(<>
    <div className="container">
    <img src={props.img} alt="" />
    <h5>{props.name}</h5>
    <p>{props.Title}</p>
    <h4>{props.position}</h4>

    <div className='Team-icons'>
            <Link to="" className="fa-icon">
              <i className="fab fa-facebook-f"></i>
            </Link>
            
            <Link to="#" className="ins-icon">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="#" className="lin-icon">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link to="#" className="git-icon">
              <i className="fab fa-github"></i>
            </Link>
          </div>
    </div>
    </>)
}
export default TeamCard;