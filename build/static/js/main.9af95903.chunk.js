(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{351:function(e,t,n){},490:function(e,t,n){},508:function(e,t,n){},509:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(82),s=n.n(r),i=(n(351),n(28)),c=n.n(i),l=n(59),u=n(25),d=n(33),h=n(26),p=n(27),f=n(2),b=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={eventDetails:!1},a}return Object(d.a)(n,[{key:"toggleDetails",value:function(){!0===this.state.eventDetails?this.setState({eventDetails:!1}):this.setState({eventDetails:!0})}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"event",children:[Object(f.jsx)("h2",{className:"event-title",children:this.props.event&&this.props.event.summary}),Object(f.jsxs)("div",{className:"basic-info",children:[Object(f.jsxs)("p",{className:"event-start-date",children:["Starts at: ",this.props.event&&this.props.event.start.dateTime,", ",this.props.event&&this.props.event.start.timeZone]}),Object(f.jsxs)("p",{className:"event-end-date",children:["Ends: ",this.props.event&&this.props.event.end.dateTime,", ",this.props.event&&this.props.event.end.timeZone]}),Object(f.jsxs)("span",{children:["Location: ",this.props.event&&this.props.event.location]})]}),this.state.eventDetails&&Object(f.jsxs)("div",{className:"event-details",children:[Object(f.jsx)("h2",{children:"About event:"}),Object(f.jsx)("a",{className:"event-link",href:this.props.event&&this.props.event.htmlLink,children:"See Details on Google Calendar"}),Object(f.jsx)("p",{className:"event-description",children:this.props.event&&this.props.event.description})]}),Object(f.jsx)("button",{className:"toggle-details-btn",onClick:function(){return e.toggleDetails()},children:this.state.eventDetails?"hide details":"show details"})]})}}]),n}(o.a.Component),v=n(20),m=n(522),j=n(532),g=n(323),x=n(108),O=function(e){var t=e.events,n=Object(a.useState)([]),o=Object(v.a)(n,2),r=o[0],s=o[1],i=["React","JavaScript","Angular","Node","jQuery"],c=["#5e6b61","#64b8b4","#444f9e","#1d6267","#6db5fd"];return Object(a.useEffect)((function(){s((function(){return i.map((function(e){var n=t.filter((function(t){return t.summary.replace(/,/g,"").split(" ").includes(e)})).length;return{name:e,value:n}}))}))}),[t]),Object(f.jsx)(m.a,{height:400,children:Object(f.jsx)(j.a,{width:389,height:400,children:Object(f.jsx)(g.a,{data:r,cx:194,cy:200,innerRadius:60,outerRadius:80,fill:"#8884d8",paddingAngle:5,dataKey:"value",children:r.map((function(e,t){return Object(f.jsx)(x.a,{fill:c[t%c.length]},"cell-".concat(t))}))})})})},w=n(526),y=n(527),k=n(328),S=n(329),T=n(94),C=n(338),N=n.p+"static/media/logo_large.7f5a5430.png",E=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events,t=this.props.numberOfEvents,n=e.slice(0,t);return Object(f.jsxs)("ul",{className:"EventList",children:[Object(f.jsxs)("li",{className:"event info-box",children:[Object(f.jsx)("img",{className:"logo-large",src:N,alt:"meet logo"}),Object(f.jsx)("h2",{children:"Meet App"}),Object(f.jsx)("p",{children:Object(f.jsx)("b",{children:"Stay informed about global coding events"})}),Object(f.jsx)("p",{children:"Still wondering what coding events will be taking place next?"})]},"info"),Object(f.jsx)("br",{}),Object(f.jsx)("li",{className:"event info-box",children:Object(f.jsxs)("div",{className:"data-vis-wrapper",children:[Object(f.jsx)(O,{events:e}),Object(f.jsx)(m.a,{height:400,children:Object(f.jsxs)(w.a,{height:389,width:400,margin:{top:20,right:10,bottom:20,left:10},children:[Object(f.jsx)(y.a,{}),Object(f.jsx)(k.a,{type:"category",dataKey:"city",name:"city"}),Object(f.jsx)(S.a,{type:"number",dataKey:"number",name:"number of events"}),Object(f.jsx)(T.a,{cursor:{strokeDasharray:"3 3"}}),Object(f.jsx)(C.a,{data:this.props.data,fill:"#8884d8"})]})})]})}),Object(f.jsx)("br",{}),n.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(b,{event:e})},e.id)}))]})}}]),n}(a.Component),L=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e,a){var o;return Object(u.a)(this,n),(o=t.call(this,e)).getStyle=function(){return{color:o.color}},o.color=a,o}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Alert Alert-Background ".concat(this.props.className),children:Object(f.jsx)("p",{style:{color:this.color},children:Object(f.jsx)("strong",{children:this.props.text})})})}}]),n}(o.a.Component),W=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e,"lightblue")).color="lightblue",a}return n}(L),Z=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e,"yellow")}return n}(L),B=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e,"yellow")}return n}(L),D=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleInputChanged=function(e){var t=e.target.value,n=a.props.locations.filter((function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1}));0!==n.length?a.setState({query:t,suggestions:n},a.props.onCityFound()):a.setState({query:t},a.props.onNoCityFound())},a.handleItemClicked=function(e){a.setState({query:e,showSuggestions:!1,infoText:""}),a.props.onCityFound(),a.props.updateEvents(e)},a.state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"CitySearch",children:[Object(f.jsx)(W,{text:this.state.infoText}),Object(f.jsx)("input",{type:"text",className:"city",placeholder:"Enter a City",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(f.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(f.jsx)("b",{children:"See all cities"})},"all"),Object(f.jsx)("li",{style:{color:"red"},children:this.state.infoText})]})]})}}]),n}(a.Component),I=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={errorText:"",numberOfEvents:""},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"event-number",children:Object(f.jsx)("input",{className:"number",placeholder:"Number of Events",value:this.props.numberOfEvents,onChange:this.props.handleEventNumberChange.bind(this)})})}}]),n}(o.a.Component),F=n(528),A=n(335),q=n(529),M=n(530);function R(e){return Object(f.jsx)("div",{children:Object(f.jsx)(F.a,{className:"app-bar",style:{backgroundColor:A.a.grey[900]},children:Object(f.jsxs)(q.a,{children:[Object(f.jsx)("img",{className:"logo",src:N,alt:"meet logo"}),Object(f.jsx)(D,{locations:e.locations,updateEvents:e.updateEvents,locationChange:e.onLocationChange,onCityFound:e.onCityFound,onNoCityFound:e.onNoCityFound}),Object(f.jsx)(M.a,{children:"# of events"}),Object(f.jsx)(I,{numberOfEvents:e.numberOfEvents,errorText:e.errorText,handleEventNumberChange:function(t){e.handleEventNumberChange(t)}})]})})})}n(490);var J=function(e){return e.showWelcomeScreen?Object(f.jsxs)("div",{className:"WelcomeScreen",children:[Object(f.jsx)("h1",{children:"Welcome to the Meet app"}),Object(f.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(f.jsx)("div",{className:"button_cont",align:"center",children:Object(f.jsxs)("div",{class:"google-btn",children:[Object(f.jsx)("div",{class:"google-icon-wrapper",children:Object(f.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log\no.svg",alt:"Google sign-in"})}),Object(f.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(f.jsx)("b",{children:"Sign in with google"})})]})}),Object(f.jsx)("a",{href:"https://danielvonboros.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},U=n(337),_=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],P=n(46),z=n.n(P),G=n(140),H=n.n(G),V=function(){var e=Object(l.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,o,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return z.a.done(),e.abrupt("return",_);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),z.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,X();case 10:if(!(n=e.sent)){e.next=20;break}return Q(),a="https://3fyf773qw9.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=16,H.a.get(a);case 16:return(o=e.sent).data&&(r=K(o.data.events),localStorage.setItem("lastEvents",JSON.stringify(o.data)),localStorage.setItem("locations",JSON.stringify(r))),z.a.done(),e.abrupt("return",o.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(e){var t=e.map((function(e){return e.location}));return Object(U.a)(new Set(t))},X=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,o,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,V(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(o=e.sent){e.next=20;break}return e.next=17,H.a.get("https://3fyf773qw9.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return r=e.sent,s=r.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",o&&$(o));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else{var t=window.location.protocol+"//"+window.location.host;window.history.pushState("","",t)}},$=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://3fyf773qw9.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(o=a.access_token)&&localStorage.setItem("access_token",o),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=(n(508),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e.updateEvents=function(t,n){Y().then((function(a){var o="all"===t?a:a.filter((function(e){return e.location===t}));e.setState({events:o,numberOfEvents:n})}))},e.state={events:[],locations:[],showWelcomeScreen:void 0,numberOfEvents:32,errorText:"",infoText:"",warningText:"",isBoxVisible:!1},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,o,r=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,z.a.configure({parent:"#root"}),z.a.start(),t=localStorage.getItem("access_token"),e.next=6,V(t);case 6:if(!e.sent.error){e.next=10;break}e.t0=!1,e.next=11;break;case 10:e.t0=!0;case 11:n=e.t0,a=new URLSearchParams(window.location.search),o=a.get("code"),this.setState({showWelcomeScreen:!(o||n)}),(o||n)&&this.mounted&&Y().then((function(e){r.mounted&&(r.setState({events:e.slice(0,r.props.numberOfEvents),locations:K(e)}),navigator.onLine?r.setState({warningText:""}):r.setState({warningText:"Client is offline. Data could be outdated"}),z.a.done())}));case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onEventNumberChange",value:function(e){var t=e.target.value;if(t<0||t>32){var n=document.getElementById("infoBox");this.setState({errorText:"Please enter a value between 1 and 32",numberOfEvents:""}),n.classList.add("box")}else{var a=document.getElementById("infoBox");this.setState({numberOfEvents:t,errorText:""}),a.classList.remove("box")}}},{key:"handleCityFound",value:function(){var e=document.getElementById("infoBox");e.classList.add("box"),this.setState({infoText:"",isBoxVisible:!1}),console.log("city was found"),e.classList.remove("box")}},{key:"handleNoCityFound",value:function(){var e=document.getElementById("infoBox");this.setState({infoText:"The city you are searching for could not be found. Please modify your input.",isBoxVisible:!0},e.classList.add("box")),console.log("no city was found")}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this;return void 0===this.state.showWelcomeScreen?Object(f.jsx)("div",{className:"App"}):Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(R,{updateEvents:this.updateEvents,numberOfEvents:this.state.numberOfEvents,handleEventNumberChange:function(t){return e.onEventNumberChange(t)},handleLocationChange:function(t){return e.onLocationChange(t)},locations:this.state.locations,errorText:this.state.errorText,onCityFound:this.handleCityFound.bind(this),onNoCityFound:this.handleNoCityFound.bind(this)}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{id:"infoBox",children:[this.state.infoText,this.state.errorText,this.state.warningText,Object(f.jsx)(W,{}),Object(f.jsx)(Z,{text:this.props.errorText}),Object(f.jsx)(B,{})]}),Object(f.jsx)(E,{data:this.getData(),className:"EventList",events:this.state.events,numberOfEvents:this.state.numberOfEvents}),Object(f.jsx)(J,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){X()}})]})}}]),n}(o.a.Component)),te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,533)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),r(e),s(e)}))};s.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(ee,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");te?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ne(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ne(t,e)}))}}(),ae()}},[[509,1,2]]]);
//# sourceMappingURL=main.9af95903.chunk.js.map