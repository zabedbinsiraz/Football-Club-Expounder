import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import background from '../../images/background.jpeg';
import maleImg from '../../images/Photo/male.png';
import femaleImg from '../../images/Photo/female.png';
import './TeamDetail.css';
import found from '../../icons/found 1.png';
import flag from '../../icons/flag (1) 1.png';
import football from '../../icons/football (1) 1.png';
import gender from '../../icons/male-gender-sign 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'

const TeamDetail = () => {
    const {teamId} = useParams();

    const [teamDetail, setTeamDetail] = useState({});

    const {strTeamBadge,strTeam, strCountry, strGender, intFormedYear, strSport,strDescriptionDE,
           strDescriptionEN, strFacebook, strTwitter, strYoutube }= teamDetail;


    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setTeamDetail(data.teams[0]))
    },[teamId]);

    const isMale = true;

    const backgroundStyle = {
        backgroundImage:`url(${background})`,
        height:'350px',
        textAlign:'center',
        paddingTop:'120px'
  }
 
    return (
        <div>
               <div style={backgroundStyle}>
                    <img style={{height:'250px'}} src={strTeamBadge} alt=""/>
                </div>
                <div className="card-container">
                    <div  className="teamDetail-card">
                       <div className="detailCard-desc">
                            <h1>{strTeam}</h1>
                            <p> <i><img style={{height:'10px'}} src={found} alt=""/></i> Founded : {intFormedYear}</p>
                            <p><i><img style={{height:'10px'}} src={flag} alt=""/></i> Country : {strCountry}</p>
                            <p><i><img style={{height:'10px'}} src={football} alt=""/></i> Sport Type : {strSport}</p>
                            <p><i><img style={{height:'10px'}} src={gender} alt=""/></i> Gender : {strGender}</p>

                       </div>
                              {
                                 isMale? <img style={{height:'200px'}}  src={maleImg} alt=""/>
                                      :  <img style={{height:'200px'}} src={femaleImg} alt=""/>
                              }
                    </div>
                    <div>
                    <p className="card-desc p">{strDescriptionDE}</p>
                    <br/>
                    <p className="card-desc p">{strDescriptionEN}</p>
                    </div>
                    <div className="icon-container">
                        <a href={strFacebook}><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href={strTwitter}><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href={strYoutube}><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
        
               
                </div>
        </div>
    );
};

export default TeamDetail;