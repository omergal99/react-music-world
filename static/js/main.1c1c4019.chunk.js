(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e){e.exports={rooms:[{_id:"kj23hkndsk01",owner:"omer",img:"put img src"},{_id:"kj23hkndsk02",owner:"messi",img:"put img src"},{_id:"kj23hkndsk03",owner:"shusan",img:"put img src"},{_id:"kj23hkndsk04",owner:"ron",img:"put img src"}]}},34:function(e,t,n){e.exports=n(61)},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){var o={"./Beautiful_Memories.mp3":46,"./Bruno Mars - Runaway Baby (Official Audio Video) [HD].mp3":47,"./Forest_Ventures.mp3":48,"./Happy_Dreams.mp3":49,"./Tears_of_Joy.mp3":50,"./Warm_Light.mp3":51,"./daughtry - home.mp3":52,"./deadmau5 - Strobe.mp3":53,"./\u05de\u05e9\u05d4 \u05e4\u05e8\u05e5 - \u05d0\u05dd \u05d6\u05d0\u05ea \u05de\u05dc\u05d7\u05de\u05d4 - moshe perez - em zot milhama.mp3":54};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=45},46:function(e,t,n){e.exports=n.p+"static/media/Beautiful_Memories.2106f2b5.mp3"},47:function(e,t,n){e.exports=n.p+"static/media/Bruno Mars - Runaway Baby (Official Audio Video) [HD].5b814813.mp3"},48:function(e,t,n){e.exports=n.p+"static/media/Forest_Ventures.05d8d65c.mp3"},49:function(e,t,n){e.exports=n.p+"static/media/Happy_Dreams.6bfd74b4.mp3"},50:function(e,t,n){e.exports=n.p+"static/media/Tears_of_Joy.fc0ec620.mp3"},51:function(e,t,n){e.exports=n.p+"static/media/Warm_Light.c3edb863.mp3"},52:function(e,t,n){e.exports=n.p+"static/media/daughtry - home.80cd94b2.mp3"},53:function(e,t,n){e.exports=n.p+"static/media/deadmau5 - Strobe.9dc36e9d.mp3"},54:function(e,t,n){e.exports=n.p+"static/media/\u05de\u05e9\u05d4 \u05e4\u05e8\u05e5 - \u05d0\u05dd \u05d6\u05d0\u05ea \u05de\u05dc\u05d7\u05de\u05d4 - moshe perez - em zot milhama.18a84fbd.mp3"},61:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(21),s=n.n(a),i=n(16),c=n(14),u=n(32),l=n(23),m=n(18),p=Object(c.c)({roomsStore:function(e,t){var n={};switch(e?(e.rooms?n.rooms=Object(m.a)(e.rooms):n.rooms=t.payload.rooms?t.payload.rooms:null,e.currRoom?n.currRoom=Object(l.a)({},e.currRoom):n.currRoom=t.payload.currRoom?t.payload.currRoom:null):t.payload&&(n.rooms=t.payload.rooms?t.payload.rooms:[],n.currRoom=t.payload.currRoom?t.payload.currRoom:null),console.log("reducer: ROOMS state-copy: ",n,", action.type: ",t),t.type){case"getOneRoom":return n.currRoom=t.payload.currRoom,n;default:return n}},userStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{currUser:"user2"},t=arguments.length>1?arguments[1]:void 0,n=t.payload?{currUser:t.payload.user}:{currUser:"user3"};switch(t.type){case"setUser":return n;default:return e}}}),h=Object(c.d)(p,Object(c.a)(u.a)),g=(n(43),n(44),n(2)),d=n(3),f=n(6),v=n(4),y=n(5),b=n(13),k=n(15),S=function(e){function t(){var e,n;Object(g.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"playerClicked",value:function(e){e.preventDefault(),this.props.history.push("/musicPlayer")}},{key:"roomsClicked",value:function(e){e.preventDefault(),this.props.history.push("/musicRooms")}},{key:"render",value:function(){return r.a.createElement("section",{className:"home"},r.a.createElement("div",{className:"head-container"}),r.a.createElement("div",{className:"main-container flex wrap space-even"},r.a.createElement("div",{className:"wrap-img",onClick:this.playerClicked.bind(this)},r.a.createElement("img",{src:"assets/img/icons-svg/music-player.svg",alt:"Music Player"}),r.a.createElement("div",{className:"text"},"Music Player")),r.a.createElement("div",{className:"wrap-img",onClick:this.roomsClicked.bind(this)},r.a.createElement("img",{src:"assets/img/icons-svg/cinema.svg",alt:"Music Rooms"}),r.a.createElement("div",{className:"text"},"Youtube Rooms"))))}}]),t}(o.Component),O=function(e){function t(){var e,n;Object(g.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("h1",null,"Login"))}}]),t}(o.Component),j=n(11),E=function(e){function t(e,n){var o;return Object(g.a)(this,t),(o=Object(f.a)(this,Object(v.a)(t).call(this,e,n))).songClicked=o.songClicked.bind(Object(j.a)(o)),o}return Object(y.a)(t,e),Object(d.a)(t,[{key:"songClicked",value:function(){this.props.emitSong(this.props.song)}},{key:"render",value:function(){return r.a.createElement("li",{onClick:this.songClicked},this.props.song.name)}}]),t}(o.Component),w=function(e){function t(e,n){var o;return Object(g.a)(this,t),(o=Object(f.a)(this,Object(v.a)(t).call(this,e,n))).sendingSong=o.sendingSong.bind(Object(j.a)(o)),o}return Object(y.a)(t,e),Object(d.a)(t,[{key:"sendingSong",value:function(e){this.props.SongClicked(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"song-list"},this.props.songs.map(function(t,n){return r.a.createElement(E,{song:t,emitSong:e.sendingSong,key:n})}))}}]),t}(o.Component),C=function(e){function t(){var e,n;Object(g.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={isPlaying:!1,songLength:300},n.goTo=function(e){n.state.isPlaying||n.togglePlay(),n.props.currSong.currentTime=e.target.value},n.togglePlay=function(){n.setState({isPlaying:!n.state.isPlaying},function(){n.state.isPlaying?(n.props.currSong.play(),n._startProgressInterval()):(n.props.currSong.pause(),clearInterval(n.progressBarInterval))})},n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this._setProgressLength(),document.addEventListener("keydown",this.keyConteols.bind(this))}},{key:"componentWillReceiveProps",value:function(){this._stopSong(),this._activeCurrSong()}},{key:"componentWillUnmount",value:function(){this._stopSong(),document.removeEventListener("keydown",this.keyConteols.bind(this))}},{key:"keyConteols",value:function(e){38===e.keyCode&&this.props.currSong.volume<=.95&&(this.props.currSong.volume=(this.props.currSong.volume+.05).toFixed(2)),40===e.keyCode&&this.props.currSong.volume>=.05&&(this.props.currSong.volume=(this.props.currSong.volume+-.05).toFixed(2)),32===e.keyCode&&(e.preventDefault(),this.togglePlay()),37===e.keyCode&&Number(this.props.currSong.currentTime)-5>0&&(this.props.currSong.currentTime=this.props.currSong.currentTime-5),39===e.keyCode&&Number(this.props.currSong.currentTime)<this.state.songLength&&(this.props.currSong.currentTime=this.props.currSong.currentTime+5)}},{key:"_setProgressLength",value:function(){var e=this;setTimeout(function(){e.setState({songLength:e.props.currSong.duration})},200)}},{key:"_stopSong",value:function(){this.props.currSong.pause(),this.props.currSong.currentTime=0,clearInterval(this.progressBarInterval)}},{key:"_activeCurrSong",value:function(){var e=this;setTimeout(function(){e.state.isPlaying&&(e.props.currSong.play(),e._startProgressInterval())},0),this._setProgressLength()}},{key:"_startProgressInterval",value:function(){var e=this;this.progressBarInterval=setInterval(function(){e.props.currSong.currentTime<e.state.songLength?e.setState({isPlaying:!0}):(e.props.nextSong(),clearInterval(e.progressBarInterval))},10)}},{key:"_timeFilter",value:function(e){var t=Number(e).toFixed(),n=t%60;n<10&&(n="0"+n);var o=Math.floor(t/60);return o<10&&(o="0"+o),"".concat(o,":").concat(n)}},{key:"render",value:function(){var e=this.state.songLength?this.state.songLength:200,t=this._timeFilter(this.props.currSong.currentTime),n=this._timeFilter(e),o=e/50*.01;return r.a.createElement("div",{className:"player flex flex-col space-center"},r.a.createElement("div",{className:"controls flex space-center"},r.a.createElement("button",{onClick:this.props.prevSong},"|<"),r.a.createElement("button",{className:"play",onClick:this.togglePlay},this.state.isPlaying?"Pause":"Play"),r.a.createElement("button",{onClick:this.props.nextSong},">|")),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"time flex space-between"},r.a.createElement("label",null,t),r.a.createElement("label",null,n)),r.a.createElement("input",{type:"range",name:"points",min:"0",step:o,style:{background:"linear-gradient(to right, #ffcf4b 0%,\n              #ffcf4b ".concat(this.props.currSong.currentTime/e*100,"%,\n              gray ").concat(this.props.currSong.currentTime/e*100,"%, gray 100%)")},max:e||200,value:this.props.currSong.currentTime,onChange:this.goTo.bind(this)})))}}]),t}(o.Component),R=function(e){function t(){var e,n;Object(g.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={songs:[],currSongName:"Bruno Mars - Runaway Baby (Official Audio Video) [HD].mp3",currSong:new Audio("assets/mp3/Bruno Mars - Runaway Baby (Official Audio Video) [HD].mp3")},n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.setSongs()}},{key:"setSongs",value:function(){var e=n(45).keys().map(function(e){return{name:e.substring(2),audio:new Audio("assets/mp3/".concat(e.substring(2)))}});this.setState({songs:e})}},{key:"audioUpload",value:function(e){var t=Object.values(e.target.files);if(t&&t.length){var n=t.map(function(e){return{name:e.name,audio:new Audio(URL.createObjectURL(e))}}),o=[].concat(Object(m.a)(n),Object(m.a)(this.state.songs));this.setState({songs:o,currSongName:t[0].name,currSong:new Audio(URL.createObjectURL(t[0]))})}}},{key:"switchSong",value:function(e){this.setState({currSongName:e.name,currSong:e.audio})}},{key:"prevSong",value:function(){var e=this,t=this.state.songs.findIndex(function(t){return t.name===e.state.currSongName});t?this.switchSong(this.state.songs[t-1]):this.switchSong(this.state.songs[this.state.songs.length-1])}},{key:"nextSong",value:function(){var e=this,t=this.state.songs.findIndex(function(t){return t.name===e.state.currSongName});this.state.songs.length-1===t?this.switchSong(this.state.songs[0]):this.switchSong(this.state.songs[t+1])}},{key:"render",value:function(){return r.a.createElement("section",{className:"music-player"},r.a.createElement("div",{className:"deatails flex flex-col space-center align-center"},r.a.createElement("img",{src:"assets/img/icons/Music-App.png",alt:"Song"}),this.state.currSongName,this.state.songs&&r.a.createElement(w,{songs:this.state.songs,SongClicked:this.switchSong.bind(this)}),r.a.createElement("div",{className:"upload-file flex wrap space-center"},r.a.createElement("label",{title:"Upload files",htmlFor:"upload-files"},"Upload Files \u2601 "),r.a.createElement("input",{id:"upload-files",onChange:this.audioUpload.bind(this),multiple:!0,type:"file"}),r.a.createElement("label",{title:"Upload Directories",htmlFor:"upload-files"},"Upload Directories \u2601 "),r.a.createElement("input",{id:"upload-files",webkitdirectory:"true",mozdirectory:"true",onChange:this.audioUpload.bind(this),multiple:!0,type:"file"}))),r.a.createElement(C,{currSong:this.state.currSong,prevSong:this.prevSong.bind(this),nextSong:this.nextSong.bind(this)}))}}]),t}(o.Component),x=function(e){var t=e.onFilter;return r.a.createElement("input",{type:"text",placeholder:"Search",className:"filter",onChange:function(e){return t(e.target.value)}})},N=function(e){function t(e,n){var o;return Object(g.a)(this,t),(o=Object(f.a)(this,Object(v.a)(t).call(this,e,n))).roomCliked=o.roomCliked.bind(Object(j.a)(o)),o}return Object(y.a)(t,e),Object(d.a)(t,[{key:"roomCliked",value:function(){this.props.history.push("/musicRooms/".concat(this.props.room._id))}},{key:"render",value:function(){return r.a.createElement("li",{onClick:this.roomCliked},"id: ",this.props.room._id,r.a.createElement("br",null),"owner: ",this.props.room.owner)}}]),t}(o.Component),_=Object(k.e)(N),P=function(e){var t=e.musicRooms;return r.a.createElement("ul",{className:"room-list"},t.map(function(e,t){return r.a.createElement(_,{room:e,key:t})}))},L=n(20),T=n.n(L),M=n(27),U=n(28);var B={getRooms:function(){return Promise.resolve(U.rooms)},getRoomById:function(e){var t=U.rooms.find(function(t){return t._id===e});return Promise.resolve(t)}};var D={getRooms:function(){return function(){var e=Object(M.a)(T.a.mark(function e(t){var n;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.getRooms();case 2:(n=e.sent)&&n.length?t({type:"",payload:{rooms:n}}):t({type:""});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},getRoomById:function(e){return function(){var t=Object(M.a)(T.a.mark(function t(n){var o;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.getRoomById(e);case 2:o=t.sent,n({type:"getOneRoom",payload:{currRoom:o}});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,t="";t+="ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(Math.random()*"ABCDEFGHIJKLMNOPQRSTUVWXYZ".length));for(var n="aaabcdeeeefghiiiijklmnoooopqrstuuuuvwxyz",o=0;o<e-1;o++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}();var A={getUser:function(){return Promise.resolve(I)}};var F={loadUser:function(){return function(e){A.getUser().then(function(t){e(t?{type:"setUser",payload:{user:t}}:{type:""})})}}},H=Object(l.a)({},D,F),V=function(e){function t(e,n){var o;return Object(g.a)(this,t),(o=Object(f.a)(this,Object(v.a)(t).call(this,e,n))).state={roomsToShow:null,Filter:""},o.filterRooms=o.filterRooms.bind(Object(j.a)(o)),o}return Object(y.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.getRooms()}},{key:"filterRooms",value:function(e){if(console.log("filter text:",e),e){var t=this.props.rooms.filter(function(t){return t.owner.toLowerCase().includes(e.toLowerCase())});this.setState({roomsToShow:t,Filter:e})}else this.setState({roomsToShow:this.props.rooms})}},{key:"render",value:function(){return r.a.createElement("section",{className:"music-rooms"},r.a.createElement(x,{onFilter:this.filterRooms}),(this.state.roomsToShow||this.props.rooms)&&r.a.createElement(P,{musicRooms:this.state.roomsToShow||this.props.rooms}))}}]),t}(o.Component);var W=Object(i.b)(function(e){return console.log(e),{rooms:e.roomsStore.rooms}},H)(V),z=function(e){function t(){return Object(g.a)(this,t),Object(f.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getRoomById(e)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"im details"),this.props.currRoom&&r.a.createElement("div",null,this.props.currRoom._id,"----",this.props.currRoom.owner))}}]),t}(o.Component);var J=Object(i.b)(function(e){return console.log(e),{currRoom:e.roomsStore.currRoom}},H)(z),Y=function(){return r.a.createElement("nav",{className:"nav-bar flex wrap space-between"},r.a.createElement("div",{className:"logo flex align-center"},r.a.createElement(b.b,{exact:!0,to:"/",title:"Logo"},"Logo")),r.a.createElement("div",{className:"links flex wrap"},r.a.createElement(b.b,{to:"/musicPlayer",title:"Player"},"Player"),r.a.createElement(b.b,{to:"/musicRooms",title:"Channels"},"Channels"),r.a.createElement(b.b,{to:"/login",title:"Login"},"Login")))},G=function(e){function t(){var e,n;Object(g.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement(b.a,null,r.a.createElement(Y,null),r.a.createElement(k.c,null,r.a.createElement(k.a,{exact:!0,path:"/",component:S}),r.a.createElement(k.a,{exact:!0,path:"/login",component:O}),r.a.createElement(k.a,{exact:!0,path:"/musicPlayer",component:R}),r.a.createElement(k.a,{exact:!0,path:"/musicRooms",component:W}),r.a.createElement(k.a,{exact:!0,path:"/musicRooms/:id",component:J}))))}}]),t}(o.Component);var K=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(i.a,{store:h},r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.1c1c4019.chunk.js.map