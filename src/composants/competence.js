import React from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';
class Competence extends React.Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={12}>
                        <div style={{marginLeft: '20%'}}>
                            <h6 style={{margin : '0'}}>{this.props.nomComptence}</h6>
                            <ProgressBar style={{margin : '0'}}  progress={this.props.niveauComptence}/>                        
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Competence;