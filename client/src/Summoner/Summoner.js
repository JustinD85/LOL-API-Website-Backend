import React from 'react';
import Summoner from './Summoner.css';

const summoner = (props) => {
  let total = 0;
  return (
    <div style={{marginLeft:'5%'}}>
      <p className='Container'>
        <text>Profile Icon</text>
        <img/>
        <div style={{ fontWeight :'bold' }}>
          {props.name} <span style={{float:'right'}}>Points</span>
        </div>
        <div>Kills:  {props.kills}
          <span className='Points'>{props.kills}</span>
        </div>
        <div>
          <span>Dmg Dealt:  {props.dmg2Champ}</span>
          <span className='Points'>{parseInt(props.dmg2Champ * .0004)}</span>
        </div>
        <div>Dmg Taken:  {props.dmgTaken}
          <span className='Points'>{parseInt((props.dmgTaken/props.deaths)*0.002)}</span>
        </div>
        <div>Deaths:  {props.deaths}
          {/* <span className='Points'>/{props.deaths}</span> */}
        </div>
        <div>Assists:  {props.assists}
          {/* <span className='Points'>{5}</span> */}
        </div>
      </p>
    </div>
  )

}

export default summoner;

