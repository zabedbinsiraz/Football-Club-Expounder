import React, {useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css';
import background from '../../images/background.jpeg';

const Home = () => {
    const [teams, setTeams] = useState([]);
    
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    },[]);

    const backgroundStyle = {
          backgroundImage:`url(${background})`,
          height:'400px'
        }
  
    return (
         <div >
               <div style={backgroundStyle}>
                <h1 className="heading-title">Football Club Expounder</h1>
                </div>
               
               <div  className="card-container">
               {
                    teams.map(tm => <Team team={tm} key={tm.idTeam}></Team>)
                }
               </div>
        </div>
        
    );
};

export default Home;