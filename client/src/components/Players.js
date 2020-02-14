import React, { Component } from "react";
import axios from "axios";

class Players extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        axios
        .get(`http://localhost:5000/api/players`)
        .then(response => {
            // console.log(response.data);
            this.setState({players: response.data});
        })
        .catch(error => console.log(error));
    }
    render() {
        // console.log(this.state.players);
        if(!this.state.players) {
            return <h3>Loading...</h3>
        } else {
            return(
                <div>
                    <h1>FIFA Womens World Cup Players</h1>
                    {this.state.players.map(player => <h3 key={player.id}>{player.name} from {player.country}</h3>)}
                </div>
            )
        }
    }
}

export default Players;