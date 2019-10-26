import React from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
class Contact extends React.Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Abdeljalil Bounaime</h2>
                        <img 
                        src="https://materiell.com/wp-content/uploads/2015/03/john-full.png"
                        alt="avatar"
                        className="img-style"
                        />
                        <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'2em'}}>
                                        <i class="fas fa-mobile fa-2x"></i>
                                        00212689745623
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'2em'}}>
                                        <i class="fas fa-envelope fa-2x"></i>
                                        exemple@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'2em'}}>
                                        <i class="fab fa-skype fa-2x"></i>
                                        monIdentifantSkype
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
            )
    }
}
export default Contact; 