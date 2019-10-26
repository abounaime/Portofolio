import React from 'react';
import {Grid, Cell} from 'react-mdl';
import Formation from './formation';
import Experience from './experiences';
import Competence from './competence';
class Cv extends React.Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign : 'center'}}>
                            <img 
                            src="https://www.shareicon.net/data/512x512/2016/01/12/702229_users_512x512.png"
                            alt="avatar"
                            style={{width : '250px'}}
                            />
                            <hr style={{borderTop : '3px solid grey'}}/>
                            <h3>Abdeljalil Bounaime</h3>
                            <h5>Développeur Fullstack</h5>
                            <hr style={{borderTop : '3px solid grey'}}/>
                            <p>Labore quis consequat qui nulla incididunt quis sint amet ullamco excepteur nulla dolor dolore. Enim consectetur tempor in commodo. Consequat tempor laborum mollit officia. Tempor adipisicing ipsum dolore sint esse culpa eiusmod amet irure. Quis amet dolore minim laboris ut. Aliquip laborum culpa laboris ad cupidatat et cupidatat est anim fugiat est. Ullamco nisi magna tempor incididunt ad dolor magna.</p>
                            <hr style={{borderTop : '3px solid grey'}}/>
                            <h6>Adresse : 13 route de Rabat, Casablanca</h6>  
                            <h6>Email : a.bounaime@gmail.com</h6>
                            <h6>Tel : 06 59 78 12 45</h6>
 
                        </div>
                    </Cell>
                    <Cell col={8}>
                        <div className="cv-style">
                            <h2>Formation</h2>
                            <hr style={{borderTop : '3px solid pink'}}/>
                            <Formation
                            dateDebut = "2014"
                            dateFin = "2019"
                            nomFormation = "ISGA"
                            descFormation = "Laboris sunt irure eiusmod duis enim adipisicing culpa dolore irure Lorem dolore officia incididunt. Laborum ipsum eu pariatur ea quis in deserunt. Commodo est tempor consectetur consequat fugiat reprehenderit adipisicing non do ex id."
                            />
                            <Formation
                            dateDebut = "2012"
                            dateFin = "2014"
                            nomFormation = "ISTA"
                            descFormation = "Laboris sunt irure eiusmod duis enim adipisicing culpa dolore irure Lorem dolore officia incididunt. Laborum ipsum eu pariatur ea quis in deserunt. Commodo est tempor consectetur consequat fugiat reprehenderit adipisicing non do ex id."
                            />
                            <Formation
                            dateDebut = "2011"
                            dateFin = "2012"
                            nomFormation = "Lycée Med 5"
                            descFormation = "Laboris sunt irure eiusmod duis enim adipisicing culpa dolore irure Lorem dolore officia incididunt. Laborum ipsum eu pariatur ea quis in deserunt. Commodo est tempor consectetur consequat fugiat reprehenderit adipisicing non do ex id."
                            />
                            <hr style={{borderTop : '3px solid pink'}}/>
                            <h2>Experiences</h2>
                            <hr style={{borderTop : '3px solid pink'}}/>
                            <Experience
                            dateDebut = "2018"
                            dateFin = "2019"
                            nomExperience = "Banque Centrale Populaire"
                            descExperience = "Laboris sunt irure eiusmod duis enim adipisicing culpa dolore irure Lorem dolore officia incididunt. Laborum ipsum eu pariatur ea quis in deserunt. Commodo est tempor consectetur consequat fugiat reprehenderit adipisicing non do ex id."
                            
                            />
                            <Experience
                            dateDebut = "2019"
                            dateFin = "Aujourd'hui"
                            nomExperience = "Atos"
                            descExperience = "Laboris sunt irure eiusmod duis enim adipisicing culpa dolore irure Lorem dolore officia incididunt. Laborum ipsum eu pariatur ea quis in deserunt. Commodo est tempor consectetur consequat fugiat reprehenderit adipisicing non do ex id."
                            
                            />
                            <hr style={{borderTop : '3px solid pink'}}/>
                            <h2>Competences</h2>
                            <hr style={{borderTop : '3px solid pink'}}/>
                            <Competence
                            nomComptence = "Java/JEE"
                            niveauComptence = "80"
                            />
                            <Competence
                            nomComptence = "ReactJS"
                            niveauComptence = "60"
                            />
                            <Competence
                            nomComptence = "Html/CSS"
                            niveauComptence = "40"
                            />
                            
                        </div>    
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Cv; 