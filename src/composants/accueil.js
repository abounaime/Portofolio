import React from 'react';
import {Cell, Grid} from "react-mdl";

class Accueil extends React.Component{
    render(){
        return(
            <div>
                <Grid className="grid-style">
                    <Cell col={12}>
                        <img 
                        src="https://www.shareicon.net/data/512x512/2016/01/12/702229_users_512x512.png"
                        alt="avatar"
                        className="img-style"
                        />
                        <div className="banner-style">
                            <h1>Développeur Web Full Stack</h1>
                            <hr />
                            <p> Java/JEE | Html/Css | ReactJS | Oracle</p>
                            <div className="reseaux-sociaux">
                                <a href="http://youtube.com">
                                <i class="fab fa-youtube-square fa-5x" target="_blank"></i>
                                </a>
                                <a href="http://linkedin.com">
                                    <i class="fab fa-linkedin fa-5x "target="_blank"></i>
                                </a>
                                <a href="http://gitlab.com">
                                    <i class="fab fa-gitlab fa-5x" target="_blank"></i>
                                </a>

                            </div>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
            )
    }
}
export default Accueil; 