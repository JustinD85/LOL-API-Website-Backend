(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,a){},15:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(2),l=a.n(i),r=(a(13),a(3)),o=a(4),c=a(6),m=a(5),u=a(7),d=(a(15),function(t){return s.a.createElement("div",{style:{marginLeft:"5%"}},s.a.createElement("p",{className:"Container"},s.a.createElement("text",null,"Profile Icon"),s.a.createElement("img",null),s.a.createElement("div",{style:{fontWeight:"bold"}},t.name," ",s.a.createElement("span",{style:{float:"right"}},"Points")),s.a.createElement("div",null,"Kills:  ",t.kills,s.a.createElement("span",{className:"Points"},t.kills)),s.a.createElement("div",null,s.a.createElement("span",null,"Dmg Dealt:  ",t.dmg2Champ),s.a.createElement("span",{className:"Points"},parseInt(4e-4*t.dmg2Champ))),s.a.createElement("div",null,"Dmg Taken:  ",t.dmgTaken,s.a.createElement("span",{className:"Points"},parseInt(t.dmgTaken/t.deaths*.002))),s.a.createElement("div",null,"Deaths:  ",t.deaths),s.a.createElement("div",null,"Assists:  ",t.assists)))}),p=function(t){function e(){var t,a;Object(r.a)(this,e);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(c.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(s)))).state={},a.findNameHandler=function(){var t=document.querySelector("#input").value;fetch("http://localhost:3131/users?name=".concat(t),{mode:"no-cors"}).then(function(t){return t.json()}).then(function(t){return a.setState({data:t})})},a}return Object(u.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this,e={marginLeft:"5%",fontWeight:10,textAlign:"left"};return s.a.createElement("div",null,s.a.createElement("h1",{style:{textAlign:"center",fontWeight:10}},"Skin Game"),s.a.createElement("h2",{style:e},"Enter Name of Summoner in Party"),s.a.createElement("input",{id:"input",style:e}),s.a.createElement("button",{onClick:this.findNameHandler},"PressMe"),this.state.data&&this.state.data.participantIdentities.map(function(e,a){return s.a.createElement(d,{name:e.player.summonerName,kills:t.state.data.participants[a].stats.kills,dmg2Champ:t.state.data.participants[a].stats.totalDamageDealtToChampions,dmgTaken:t.state.data.participants[a].stats.totalDamageTaken,deaths:t.state.data.participants[a].stats.deaths,assists:t.state.data.participants[a].stats.assists})}))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,a){t.exports=a(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.46eb8191.chunk.js.map