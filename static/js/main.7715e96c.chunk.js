(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{181:function(e,t,n){},188:function(e,t,n){},206:function(e,t,n){},208:function(e,t,n){"use strict";n.r(t);var o=n(2),a=n.n(o),s=n(166),r=n.n(s),i=(n(181),n(9)),c=n.n(i),l=n(17),u=n(4),d=n(8),h=n(6),p=n(5),v=n(0),f=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).state={eventDetails:!1},o}return Object(d.a)(n,[{key:"toggleDetails",value:function(){!0===this.state.eventDetails?this.setState({eventDetails:!1}):this.setState({eventDetails:!0})}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{className:"event",children:[Object(v.jsx)("h2",{className:"event-title",children:this.props.event&&this.props.event.summary}),Object(v.jsxs)("div",{className:"basic-info",children:[Object(v.jsxs)("p",{className:"event-start-date",children:["Starts at: ",this.props.event&&this.props.event.start.dateTime,", ",this.props.event&&this.props.event.start.timeZone]}),Object(v.jsxs)("p",{className:"event-end-date",children:["Ends: ",this.props.event&&this.props.event.end.dateTime,", ",this.props.event&&this.props.event.end.timeZone]}),Object(v.jsxs)("span",{children:["Location: ",this.props.event&&this.props.event.location]})]}),this.state.eventDetails&&Object(v.jsxs)("div",{className:"event-details",children:[Object(v.jsx)("h2",{children:"About event:"}),Object(v.jsx)("a",{className:"event-link",href:this.props.event&&this.props.event.htmlLink,children:"See Details on Google Calendar"}),Object(v.jsx)("p",{className:"event-description",children:this.props.event&&this.props.event.description})]}),Object(v.jsx)("button",{className:"toggle-details-btn",onClick:function(){return e.toggleDetails()},children:this.state.eventDetails?"hide details":"show details"})]})}}]),n}(a.a.Component),b=n.p+"static/media/logo_large.7f5a5430.png",m=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(v.jsxs)("ul",{className:"EventList",children:[Object(v.jsxs)("li",{className:"event info-box",children:[Object(v.jsx)("img",{className:"logo-large",src:b,alt:"meet logo"}),Object(v.jsx)("h2",{children:"Meet App"}),Object(v.jsx)("p",{children:Object(v.jsx)("b",{children:"Stay informed about global coding events"})}),Object(v.jsx)("p",{children:"Still wondering what coding events will be taking place next?"})]},"info"),Object(v.jsx)("br",{}),"console.log(event)",e.map((function(e){return Object(v.jsx)("li",{children:Object(v.jsx)(f,{event:e})},e.id)}))]})}}]),n}(o.Component),g=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e,o){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=o,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"Alert Alert-Background ".concat(this.props.className),children:Object(v.jsx)("p",{style:{color:this.color},children:Object(v.jsx)("strong",{children:this.props.text})})})}}]),n}(a.a.Component),j=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e,"lightblue")).color="lightblue",o}return n}(g),x=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e,"yellow")}return n}(g),w=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).handleInputChanged=function(e){var t=e.target.value,n=o.props.locations.filter((function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1}));0!==n.length?o.setState({query:t,suggestions:n},o.props.onCityFound()):o.setState({query:t},o.props.onNoCityFound())},o.handleItemClicked=function(e){o.setState({query:e,showSuggestions:!1,infoText:""}),o.props.onCityFound(),o.props.updateEvents(e)},o.state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},o}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{className:"CitySearch",children:[Object(v.jsx)(j,{text:this.state.infoText}),Object(v.jsx)("input",{type:"text",className:"city",placeholder:"Enter a City",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(v.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(v.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(v.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(v.jsx)("b",{children:"See all cities"})},"all"),Object(v.jsx)("li",{style:{color:"red"},children:this.state.infoText})]})]})}}]),n}(o.Component),O=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).state={errorText:"",numberOfEvents:""},o}return Object(d.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"event-number",children:Object(v.jsx)("input",{className:"number",placeholder:"Number of Events",value:this.props.numberOfEvents,onChange:this.props.handleEventNumberChange.bind(this)})})}}]),n}(a.a.Component),y=n(221),k=n(172),S=n(222),C=n(223);function T(e){return Object(v.jsx)("div",{children:Object(v.jsx)(y.a,{className:"app-bar",style:{backgroundColor:k.a.grey[900]},children:Object(v.jsxs)(S.a,{children:[Object(v.jsx)("img",{className:"logo",src:b,alt:"meet logo"}),Object(v.jsx)(w,{locations:e.locations,updateEvents:e.updateEvents,locationChange:e.onLocationChange,onCityFound:e.onCityFound,onNoCityFound:e.onNoCityFound}),Object(v.jsx)(C.a,{children:"# of events"}),Object(v.jsx)(O,{numberOfEvents:e.numberOfEvents,errorText:e.errorText,handleEventNumberChange:function(t){e.handleEventNumberChange(t)}})]})})})}n(188);var N=function(e){return e.showWelcomeScreen?Object(v.jsxs)("div",{className:"WelcomeScreen",children:[Object(v.jsx)("h1",{children:"Welcome to the Meet app"}),Object(v.jsx)("h4",{children:"Your information source on global coding events"}),Object(v.jsx)("h4",{children:"Login to see upcoming events around the world for full-stack developers"}),Object(v.jsx)("div",{className:"button_cont",align:"center",children:Object(v.jsxs)("div",{className:"google-btn",children:[Object(v.jsx)("div",{className:"google-icon-wrapper",children:Object(v.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(v.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(v.jsx)("b",{children:"Sign in with Google"})})]})}),Object(v.jsx)("a",{href:"https://danielvonboros.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},E=n(173),L=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],W=n(11),Z=n.n(W),B=n(32),I=n.n(B),F=function(){var e=Object(l.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else{var t=window.location.protocol+"//"+window.location.host;window.history.pushState("","",t)}},A=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,o,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://3fyf773qw9.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return o=e.sent,(a=o.access_token)&&localStorage.setItem("access_token",a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,o,a,s,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,F(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return o=new URLSearchParams(window.location.search),e.next=13,o.get("code");case 13:if(a=e.sent){e.next=20;break}return e.next=17,I.a.get("https://3fyf773qw9.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return s=e.sent,r=s.data.authUrl,e.abrupt("return",window.location.href=r);case 20:return e.abrupt("return",a&&A(a));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,o,a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return Z.a.done(),e.abrupt("return",L);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),Z.a.done(),e.abrupt("return",{events:JSON.parse(t).events,locations:J(JSON.parse(t).locations)});case 8:return e.next=10,q();case 10:if(!(n=e.sent)){e.next=20;break}return D(),o="https://3fyf773qw9.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=16,I.a.get(o);case 16:return(a=e.sent).data&&(s=J(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(s))),Z.a.done(),e.abrupt("return",{events:a.data.events,locations:s});case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(e){console.log("from extractLocation",e);var t=e.map((function(e){return e.location}));return Object(E.a)(new Set(t))},U=(n(206),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).updateEvents=function(t,n){M().then((function(o){var a="all"===t?o:o.filter((function(e){return e.location===t}));e.setState({events:a,numberOfEvents:n})}))},e.state={events:[],locations:[],numberOfEvents:32,errorText:"",infoText:"",isBoxVisible:!1,showWelcomeScreen:void 0},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,o,a,s=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(),this.mounted=!0,Z.a.configure({parent:"#root"}),Z.a.start(),t=localStorage.getItem("access_token"),e.next=7,F(t);case 7:if(!e.sent.error){e.next=11;break}e.t0=!1,e.next=12;break;case 11:e.t0=!0;case 12:n=e.t0,o=new URLSearchParams(window.location.search),a=o.get("code"),this.setState({showWelcomeScreen:!(a||n)}),(a||n)&&this.mounted&&M().then((function(e){console.log(e),s.setState({events:e.slice(0,s.state.numberOfEvents),locations:J(e)},Z.a.done()),console.log(s.state.events)}));case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){}},{key:"onEventNumberChange",value:function(e){var t=e.target.value;if(t<0||t>32){var n=document.getElementById("infoBox");this.setState({errorText:"Please enter a value between 1 and 32",numberOfEvents:""}),n.classList.add("box")}else{var o=document.getElementById("infoBox");this.setState({numberOfEvents:t,errorText:""}),o.classList.remove("box")}}},{key:"handleCityFound",value:function(){var e=document.getElementById("infoBox");e.classList.add("box"),this.setState({infoText:"",isBoxVisible:!1}),console.log("city was found"),e.classList.remove("box")}},{key:"handleNoCityFound",value:function(){var e=document.getElementById("infoBox");this.setState({infoText:"The city you are searching for could not be found. Please modify your input.",isBoxVisible:!0},e.classList.add("box")),console.log("no city was found")}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this;return void 0===this.state.showWelcomeScreen?Object(v.jsx)("div",{className:"App"}):Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(T,{updateEvents:this.updateEvents,numberOfEvents:this.state.numberOfEvents,handleEventNumberChange:function(t){return e.onEventNumberChange(t)},handleLocationChange:function(t){return e.onLocationChange(t)},locations:this.state.locations,errorText:this.state.errorText,onCityFound:this.handleCityFound.bind(this),onNoCityFound:this.handleNoCityFound.bind(this)}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{id:"infoBox",children:[this.state.infoText,this.state.errorText,Object(v.jsx)(j,{}),Object(v.jsx)(x,{text:this.props.errorText})]}),Object(v.jsx)(m,{className:"EventList",events:this.state.events,numberOfEvents:this.state.numberOfEvents}),Object(v.jsx)(N,{showWelcomeScreen:this.state.welcomeScreen,getAccessToken:function(){q()}})]})}}]),n}(a.a.Component)),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,224)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),o(e),a(e),s(e),r(e)}))},P=n(33);P.config("b0d26029450c4161a40a7c8ddba645ec").install(),r.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(U,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");R?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):_(t,e)}))}}(),G(),P.config("b0d26029450c4161a40a7c8ddba645ec").install()}},[[208,1,2]]]);
//# sourceMappingURL=main.7715e96c.chunk.js.map