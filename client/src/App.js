import React, { Component } from 'react';
import Summoner from './Summoner/Summoner'

class App extends Component {
  state = {}

  componentDidMount() {
    
  }  
  findNameHandler = () => {
    const name = document.querySelector('#input').value;
    fetch(`../../users?name=${name}`, { mode: 'no-cors' })
      .then(res => console.log(res), res.json())
      .then(e => this.setState({ data: e }))
      .catch(e => console.error(e));
  }

  render() {
    const lightWeightFont = { textAlign: 'center', fontWeight: 10 };
    const leftAlignStyle = { marginLeft: '5%', fontWeight: 10, textAlign: 'left' };
    return (
      <div >
        <h1 style={lightWeightFont}>Skin Game</h1>
        <h2 style={leftAlignStyle}>
          Enter Name of Summoner in Party</h2>
        <input id="input" style={leftAlignStyle}></input>
        <button onClick={this.findNameHandler}>PressMe</button>
        {this.state.data && this.state.data.participantIdentities.map((e, i) => {
          return (<Summoner
            name={e.player.summonerName}
            kills={this.state.data.participants[i].stats.kills}
            dmg2Champ={this.state.data.participants[i].stats.totalDamageDealtToChampions}
            dmgTaken={this.state.data.participants[i].stats.totalDamageTaken}
            deaths={this.state.data.participants[i].stats.deaths}
            assists={this.state.data.participants[i].stats.assists}
          />)
        })}
      </div>
    );
  }
}

export default App;
