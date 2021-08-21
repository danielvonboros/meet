(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{179:function(e,t,n){},204:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),r=n(164),s=n.n(r),i=(n(179),n(4)),c=n(8),l=n(6),u=n(5),d=n(0),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={eventDetails:!1},a}return Object(c.a)(n,[{key:"toggleDetails",value:function(){!0===this.state.eventDetails?this.setState({eventDetails:!1}):this.setState({eventDetails:!0})}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"event",children:[Object(d.jsx)("h2",{className:"event-title",children:this.props.event&&this.props.event.summary}),Object(d.jsxs)("div",{className:"basic-info",children:[Object(d.jsxs)("p",{className:"event-start-date",children:["Starts at: ",this.props.event&&this.props.event.start.dateTime,", ",this.props.event&&this.props.event.start.timeZone]}),Object(d.jsxs)("p",{className:"event-end-date",children:["Ends: ",this.props.event&&this.props.event.end.dateTime,", ",this.props.event&&this.props.event.end.timeZone]}),Object(d.jsxs)("span",{children:["Location: ",this.props.event&&this.props.event.location]})]}),this.state.eventDetails&&Object(d.jsxs)("div",{className:"event-details",children:[Object(d.jsx)("h2",{children:"About event:"}),Object(d.jsx)("a",{className:"event-link",href:this.props.event&&this.props.event.htmlLink,children:"See Details on Google Calendar"}),Object(d.jsx)("p",{className:"event-description",children:this.props.event&&this.props.event.description})]}),Object(d.jsx)("button",{className:"toggle-details-btn",onClick:function(){return e.toggleDetails()},children:this.state.eventDetails?"hide details":"show details"})]})}}]),n}(o.a.Component),f=n.p+"static/media/logo_large.7f5a5430.png",v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.events,t=this.props.numberOfEvents,n=e.slice(0,t);return Object(d.jsxs)("ul",{className:"EventList",children:[Object(d.jsxs)("li",{className:"event info-box",children:[Object(d.jsx)("img",{className:"logo-large",src:f,alt:"meet logo"}),Object(d.jsx)("h2",{children:"Meet App"}),Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"Stay informed about global coding events"})}),Object(d.jsx)("p",{children:"Still wondering what coding events will be taking place next?"})]},"info"),Object(d.jsx)("br",{}),n.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(h,{event:e})},e.id)}))]})}}]),n}(a.Component),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e,a){var o;return Object(i.a)(this,n),(o=t.call(this,e)).getStyle=function(){return{color:o.color}},o.color=a,o}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"Alert Alert-Background ".concat(this.props.className),children:Object(d.jsx)("p",{style:{color:this.color},children:Object(d.jsx)("strong",{children:this.props.text})})})}}]),n}(o.a.Component),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e,"lightblue")).color="lightblue",a}return n}(p),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e,"yellow")}return n}(p),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e,"yellow")}return n}(p),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleInputChanged=function(e){var t=e.target.value,n=a.props.locations.filter((function(e){return e.toUpperCase().indexOf(t.toUpperCase())>-1}));0!==n.length?a.setState({query:t,suggestions:n},a.props.onCityFound()):a.setState({query:t},a.props.onNoCityFound())},a.handleItemClicked=function(e){a.setState({query:e,showSuggestions:!1,infoText:""}),a.props.onCityFound(),a.props.updateEvents(e)},a.state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"CitySearch",children:[Object(d.jsx)(b,{text:this.state.infoText}),Object(d.jsx)("input",{type:"text",className:"city",placeholder:"Enter a City",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(d.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(d.jsx)("b",{children:"See all cities"})},"all"),Object(d.jsx)("li",{style:{color:"red"},children:this.state.infoText})]})]})}}]),n}(a.Component),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={errorText:"",numberOfEvents:""},a}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"event-number",children:Object(d.jsx)("input",{className:"number",placeholder:"Number of Events",value:this.props.numberOfEvents,onChange:this.props.handleEventNumberChange.bind(this)})})}}]),n}(o.a.Component),O=n(218),w=n(170),y=n(219),k=n(220);function T(e){return Object(d.jsx)("div",{children:Object(d.jsx)(O.a,{className:"app-bar",style:{backgroundColor:w.a.grey[900]},children:Object(d.jsxs)(y.a,{children:[Object(d.jsx)("img",{className:"logo",src:f,alt:"meet logo"}),Object(d.jsx)(j,{locations:e.locations,updateEvents:e.updateEvents,locationChange:e.onLocationChange,onCityFound:e.onCityFound,onNoCityFound:e.onNoCityFound}),Object(d.jsx)(k.a,{children:"# of events"}),Object(d.jsx)(x,{numberOfEvents:e.numberOfEvents,errorText:e.errorText,handleEventNumberChange:function(t){e.handleEventNumberChange(t)}})]})})})}var C=n(171),S=n(11),E=n.n(S),N=n(26),L=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],Z=n(10),B=n.n(Z),W=n(32),F=n.n(W),I=function(){var e=Object(N.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(N.a)(E.a.mark((function e(){var t,n,a,o,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(B.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return B.a.done(),e.abrupt("return",L);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),B.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,q();case 10:if(!(n=e.sent)){e.next=20;break}return A(),a="https://3fyf773qw9.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=16,F.a.get(a);case 16:return(o=e.sent).data&&(r=M(o.data.events),localStorage.setItem("lastEvents",JSON.stringify(o.data)),localStorage.setItem("locations",JSON.stringify(r))),B.a.done(),e.abrupt("return",o.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(e){var t=e.map((function(e){return e.location}));return Object(C.a)(new Set(t))},q=function(){var e=Object(N.a)(E.a.mark((function e(){var t,n,a,o,r,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,I(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(o=e.sent){e.next=20;break}return e.next=17,F.a.get("https://3fyf773qw9.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return r=e.sent,s=r.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",o&&J(o));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else{var t=window.location.protocol+"//"+window.location.host;window.history.pushState("","",t)}},J=function(){var e=Object(N.a)(E.a.mark((function e(t){var n,a,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://3fyf773qw9.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(o=a.access_token)&&localStorage.setItem("access_token",o),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=(n(204),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).updateEvents=function(t,n){D().then((function(a){var o="all"===t?a:a.filter((function(e){return e.location===t}));e.setState({events:o,numberOfEvents:n})}))},e.state={events:[],locations:[],numberOfEvents:32,errorText:"",infoText:"",warningText:"",isBoxVisible:!1},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,B.a.configure({parent:"#root"}),B.a.start(),D().then((function(t){e.mounted&&(e.setState({events:t.slice(0,e.props.numberOfEvents),locations:M(t)}),B.a.done())}))}},{key:"componentDidUpdate",value:function(){navigator.onLine?this.showOfflineWarningMessage():this.removeOfflineWarningMessage()}},{key:"showOfflineWarningMessage",value:function(){navigator.onLine||this.setState({warningText:"Client is offline. Data could be outdated"})}},{key:"removeOfflineWarningMessage",value:function(){navigator.onLine&&this.setState({warningText:""})}},{key:"onEventNumberChange",value:function(e){var t=e.target.value;if(t<0||t>32){var n=document.getElementById("infoBox");this.setState({errorText:"Please enter a value between 1 and 32",numberOfEvents:""}),n.classList.add("box")}else{var a=document.getElementById("infoBox");this.setState({numberOfEvents:t,errorText:""}),a.classList.remove("box")}}},{key:"handleCityFound",value:function(){var e=document.getElementById("infoBox");e.classList.add("box"),this.setState({infoText:"",isBoxVisible:!1}),console.log("city was found"),e.classList.remove("box")}},{key:"handleNoCityFound",value:function(){var e=document.getElementById("infoBox");this.setState({infoText:"The city you are searching for could not be found. Please modify your input.",isBoxVisible:!0},e.classList.add("box")),console.log("no city was found")}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(T,{updateEvents:this.updateEvents,numberOfEvents:this.state.numberOfEvents,handleEventNumberChange:function(t){return e.onEventNumberChange(t)},handleLocationChange:function(t){return e.onLocationChange(t)},locations:this.state.locations,errorText:this.state.errorText,onCityFound:this.handleCityFound.bind(this),onNoCityFound:this.handleNoCityFound.bind(this)}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{id:"infoBox",children:[this.state.infoText,this.state.errorText,this.state.warningText,Object(d.jsx)(b,{}),Object(d.jsx)(m,{text:this.props.errorText}),Object(d.jsx)(g,{})]}),Object(d.jsx)(v,{className:"EventList",events:this.state.events,numberOfEvents:this.state.numberOfEvents})]})}}]),n}(o.a.Component)),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,221)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(U,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");R?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):z(t,e)}))}}(),_()}},[[205,1,2]]]);
//# sourceMappingURL=main.b6520a86.chunk.js.map