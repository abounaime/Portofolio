import React from 'react';
import {Grid, Cell} from 'react-mdl';
class Formation extends React.Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        {this.props.dateDebut} - {this.props.dateFin}
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{margin:'0'}}>{this.props.nomFormation}</h4>
                        <p>{this.props.descFormation}</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Formation;