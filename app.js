var express = require('express');
const axios = require('axios');
const https = require('https');
const apiKey = `api_key=RGAPI-6c4f0334-3d97-482b-a5f6-dc71bf0b62a0`;
const riotUrl = `https://na1.api.riotgames.com/lol/`;
app = express();
const cors = require('cors');
app.use(cors({
  origin: 'https://172.31.0.40:80',
  credentials: true
}));
app.get('/', function (req, res, next) {
  let summonerName = `${riotUrl}summoner/v3/summoners/by-name/${req.query.name}?${apiKey}`;
  axios(summonerName)
  .then(info => {
    const matchOpt = `beginIndex=${0}&endIndex=${1}&`;
    const matchList = `${riotUrl}match/v3/matchlists/by-account/${info.data.accountId}?${matchOpt}${apiKey}`
    return axios(matchList)
    }).then(thatInfo => {
      const match = `match/v3/matches/${thatInfo.data.matches[0].gameId}?`;
      return axios(`${riotUrl}${match}${apiKey}`)
    }).then(e => {
      console.log(typeof e.data);
      res.json(
        e.data
      );
    }).catch(e => console.log(e))
});
app.listen(3131, ()=> console.log('We on: 3131 😎'))
