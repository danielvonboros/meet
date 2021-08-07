(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{180:function(e,t,n){},205:function(e,t,n){},207:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),s=n(165),o=n.n(s),i=(n(180),n(4)),c=n(7),u=n(6),l=n(5),h=n(1),d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={eventDetails:!1},a}return Object(c.a)(n,[{key:"toggleDetails",value:function(){!0===this.state.eventDetails?this.setState({eventDetails:!1}):this.setState({eventDetails:!0})}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"event",children:[Object(h.jsx)("h2",{className:"event-title",children:this.props.event&&this.props.event.summary}),Object(h.jsxs)("div",{className:"basic-info",children:[Object(h.jsxs)("p",{className:"event-start-date",children:[this.props.event&&this.props.event.start.dateTime,", ",this.props.event&&this.props.event.start.timeZone]}),Object(h.jsxs)("p",{className:"event-end-date",children:[this.props.event&&this.props.event.end.dateTime,", ",this.props.event&&this.props.event.end.timeZone]}),Object(h.jsx)("span",{children:this.props.event&&this.props.event.location})]}),this.state.eventDetails&&Object(h.jsxs)("div",{className:"event-details",children:[Object(h.jsx)("h2",{children:"About event:"}),Object(h.jsx)("a",{className:"event-link",href:this.props.event&&this.props.event.htmlLink,children:"See Details on Google Calendar"}),Object(h.jsx)("p",{className:"event-description",children:this.props.event&&this.props.event.description})]}),Object(h.jsx)("button",{className:"toggle-details-btn",onClick:function(){return e.toggleDetails()},children:this.state.eventDetails?"hide-details":"show details"})]})}}]),n}(r.a.Component),p=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.events,t=this.props.numberOfEvents,n=e.slice(0,t);return Object(h.jsx)("ul",{className:"EventList",children:n.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(d,{event:e})},e.id)}))})}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"Alert",children:Object(h.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(r.a.Component)),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"CitySearch",children:[Object(h.jsx)("input",{type:"text",className:"city",placeholder:"Enter a City",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(h.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(h.jsx)("b",{children:"See all cities"})},"all"),Object(h.jsx)("li",{children:Object(h.jsx)(f,{text:this.state.infoText})})]})]})}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"handleInputChange",value:function(e){var t=e.target.value;this.props.handleEventNumberChange(t)}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"event-number",children:Object(h.jsx)("input",{className:"number",placeholder:"Number of Events",value:this.props.numberOfEvents,onChange:this.handleInputChange.bind(this)})})}}]),n}(r.a.Component),j=n(220),g=n(171),O=n(221),w=n(222),y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{children:Object(h.jsx)(j.a,{style:{backgroundColor:g.a.grey[900]},children:Object(h.jsxs)(O.a,{children:[Object(h.jsx)("img",{src:"../public/logo_large.png",alt:"meet logo"}),Object(h.jsx)(w.a,{style:{flexGrow:7},children:" "}),Object(h.jsx)(m,{locations:this.props.locations,updateEvents:this.props.updateEvents}),Object(h.jsx)(w.a,{children:"# of events"}),Object(h.jsx)(b,{numberOfEvents:this.props.numberOfEvents,handleEventNumberChange:function(t){e.props.handleEventNumberChange(t)}})]})})})}}]),n}(r.a.Component),x=n(172),k=n(10),S=n.n(k),C=n(25),E=(n(187),n(31)),T=n.n(E),N=function(){var e=Object(C.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(C.a)(S.a.mark((function e(){var t,n,a,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",p);case 2:return e.next=4,I();case 4:if(!(t=e.sent)){e.next=13;break}return q(),n="https://3fyf773qw9.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(t),e.next=10,T.a.get(n);case 10:return(a=e.sent).data&&(r=D(a.data.events),localStorage.setItem("last Events",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),e.abrupt("return",a.data.events);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(e){var t=e.map((function(e){return e.location}));return Object(x.a)(new Set(t))},I=function(){var e=Object(C.a)(S.a.mark((function e(){var t,n,a,r,s,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,N(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,T.a.get("https://3fyf773qw9.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return s=e.sent,o=s.data.authUrl,e.abrupt("return",window.location.href=o);case 20:return e.abrupt("return",r&&M(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else{var t=window.location.protocol+"//"+window.location.host;window.history.pushState("","",t)}},M=function(){var e=Object(C.a)(S.a.mark((function e(t){var n,a,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://3fyf773qw9.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=(n(205),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).updateEvents=function(t,n){Z().then((function(a){var r="all"===t?a:a.filter((function(e){return e.location===t}));e.setState({events:r,numberOfEvents:n})}))},e.state={events:[],locations:[],numberOfEvents:32},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,Z().then((function(t){e.mounted&&e.setState({events:t.slice(0,e.props.numberOfEvents),locations:D(t)})}))}},{key:"componentDidUpdate",value:function(){}},{key:"onEventNumberChange",value:function(e){this.setState({numberOfEvents:e})}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(y,{updateEvents:this.updateEvents,numberOfEvents:this.state.numberOfEvents,handleEventNumberChange:function(t){return e.onEventNumberChange(t)},locations:this.state.locations}),Object(h.jsx)(v,{events:this.state.events,numberOfEvents:this.state.numberOfEvents})]})}}]),n}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,223)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))},J=n(32);J.config("b0d26029450c4161a40a7c8ddba645ec").install(),o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(W,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),B(),J.config("b0d26029450c4161a40a7c8ddba645ec").install()}},[[207,1,2]]]);
//# sourceMappingURL=main.6c6d72b5.chunk.js.map