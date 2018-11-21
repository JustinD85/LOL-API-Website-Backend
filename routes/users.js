var express = require('express');
var router = express.Router();
const axios = require('axios');
const apiKey = `api_key=${process.env.LOL_DEV_KEY}`;
const riotUrl = `https://na1.api.riotgames.com/lol/`;

router.get('/', function (req, res, next) {
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

module.exports = router;
