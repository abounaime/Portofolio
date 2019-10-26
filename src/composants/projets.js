import React from 'react';
import {Tabs, Tab, CardTitle, CardText, Card, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projets extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeTab : 0
        }
    }
    afficherProjet(){
        if(this.state.activeTab === 0){
            return(
                    <div style={{display : 'flex', justifyContent: 'space-between', padding: "2em"}}>
                        <Card>
                            <CardTitle style={{background : 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png)',
                                            backgroundPosition : 'center',
                                            backgroundSize: 'cover',
                                            height: '200px',
                                            color : '#fff' }}>
                                ReactJS
                            </CardTitle>
                            <CardText>
                                <p>la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
                            </CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>Gitlab</Button>
                                <Button colored>CodePen</Button>
                            </CardActions>
                            <CardMenu>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        <Card>
                            <CardTitle style={{background : 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png)',
                                            backgroundPosition : 'center',
                                            backgroundSize: 'cover',
                                            height: '200px',
                                            color : '#fff' }}>
                                Projet ReactJS La Poste
                            </CardTitle>
                            <CardText>
                                <p>la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
                            </CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>Gitlab</Button>
                                <Button colored>CodePen</Button>
                            </CardActions>
                            <CardMenu>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        <Card>
                        <CardTitle style={{background : 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png)',
                                        backgroundPosition : 'center',
                                        backgroundSize: 'cover',
                                        height: '200px',
                                        color : '#fff' }}>
                            Projet ReactJS Banque Populaire 
                        </CardTitle>
                        <CardText>
                            <p>la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Gitlab</Button>
                            <Button colored>CodePen</Button>
                        </CardActions>
                        <CardMenu>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>    
            )
        } else if (this.state.activeTab === 1){
            return(
                <h1> C'est Du Java </h1>
            )
        } else if (this.state.activeTab === 2){
            return(
                <h1> C'est Du Html </h1>
            )
            
        } else {
            return(
                <h1> C'est Du PHP </h1>
            )

        }
    }
    render(){
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState ({activeTab : tabId})}>
                    <Tab>ReactJS</Tab>
                    <Tab>Java/JEE</Tab>
                    <Tab>Html/CSS</Tab>
                    <Tab>PHP</Tab>
                </Tabs>
                <section>
                    {this.afficherProjet()}
                </section>
            </div>    
        )
    }
}
export default Projets; 