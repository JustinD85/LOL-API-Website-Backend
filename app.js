var express = require('express');
const axios = require('axios');
const https = require('https');
const apiKey = `api_key=${process.env.LEAGUE_DEVELOPER_KEY}`;
const riotUrl = `https://na1.api.riotgames.com/lol/`;
app = express();
const cors = require('cors');

app.use(cors({
  origin: 'https://falsemotive.com',
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
      res.json(
        e.data
      );
    }).catch(e => console.log(e))
});

app.listen(80, ()=> console.log('We on: 80 😎'))
