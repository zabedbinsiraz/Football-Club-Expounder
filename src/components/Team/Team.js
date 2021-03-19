import React from 'react';
import { useHistory } from 'react-router';
import './Team.css';

const Team = (props) => {
    console.log(props.team)
   const {strTeam, idTeam, strSport, strTeamBadge} = props.team;
   const history = useHistory();

   const handleExploreBtn = (id) =>{
       const url = `/team/${id}`;
       history.push(url);
  }
    return (
        <div className="team-card">
            <img className="image-style" src={strTeamBadge} alt=""/>

            <div className="card-desc">
                <h1>{strTeam}</h1>
                <p>Sports Type : {strSport}</p>
                <button onClick={() => handleExploreBtn(idTeam)} className="main-btn">Explore</button>
            
            </div>
        </div>
    );
};

export default Team;