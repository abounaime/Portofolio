import React from 'react';
import {Grid, Cell} from 'react-mdl';
class Experience extends React.Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        {this.props.dateDebut} - {this.props.dateFin}
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{margin:'0'}}>{this.props.nomExperience}</h4>
                        <p>{this.props.descExperience}</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Experience;