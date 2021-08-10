(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{181:function(e,t,n){},205:function(e,t,n){},207:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),s=n(166),o=n.n(s),i=(n(181),n(4)),c=n(7),l=n(6),u=n(5),h=n(0),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={eventDetails:!1},r}return Object(c.a)(n,[{key:"toggleDetails",value:function(){!0===this.state.eventDetails?this.setState({eventDetails:!1}):this.setState({eventDetails:!0})}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"event",children:[Object(h.jsx)("h2",{className:"event-title",children:this.props.event&&this.props.event.summary}),Object(h.jsxs)("div",{className:"basic-info",children:[Object(h.jsxs)("p",{className:"event-start-date",children:["Starts at: ",this.props.event&&this.props.event.start.dateTime,", ",this.props.event&&this.props.event.start.timeZone]}),Object(h.jsxs)("p",{className:"event-end-date",children:["Ends: ",this.props.event&&this.props.event.end.dateTime,", ",this.props.event&&this.props.event.end.timeZone]}),Object(h.jsxs)("span",{children:["Location: ",this.props.event&&this.props.event.location]})]}),this.state.eventDetails&&Object(h.jsxs)("div",{className:"event-details",children:[Object(h.jsx)("h2",{children:"About event:"}),Object(h.jsx)("a",{className:"event-link",href:this.props.event&&this.props.event.htmlLink,children:"See Details on Google Calendar"}),Object(h.jsx)("p",{className:"event-description",children:this.props.event&&this.props.event.description})]}),Object(h.jsx)("button",{className:"toggle-details-btn",onClick:function(){return e.toggleDetails()},children:this.state.eventDetails?"hide details":"show details"})]})}}]),n}(a.a.Component),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.events,t=this.props.numberOfEvents,n=e.slice(0,t);return Object(h.jsxs)("ul",{className:"EventList",children:[Object(h.jsxs)("li",{className:"event info-box",children:[Object(h.jsx)("img",{src:"./mat/logo_large.png",alt:"meet logo"}),Object(h.jsx)("h2",{children:"Meet App"}),Object(h.jsx)("p",{children:Object(h.jsx)("b",{children:"Stay informed about global coding events"})}),Object(h.jsx)("p",{children:"Still wondering what coding events will be taking place next?"})]},"info"),Object(h.jsx)("br",{}),n.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(d,{event:e})},e.id)}))]})}}]),n}(r.Component),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).getStyle=function(){return{color:r.color}},r.color=null,r}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"Alert Alert-Background",children:Object(h.jsx)("p",{style:this.getStyle(),children:Object(h.jsx)("strong",{children:this.props.text})})})}}]),n}(a.a.Component),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).color="lightblue",r}return n}(v),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).color="yellow",r}return n}(v),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value,r=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==r.length)return e.setState({query:n,suggestions:r,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"CitySearch",children:[Object(h.jsx)(f,{text:this.state.infoText}),Object(h.jsx)("input",{type:"text",className:"city",placeholder:"Enter a City",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(h.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(h.jsx)("b",{children:"See all cities"})},"all"),Object(h.jsx)("li",{style:{color:"red"},children:this.state.infoText})]})]})}}]),n}(r.Component),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={errorText:"",numberOfEvents:""},r}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"event-number",children:[Object(h.jsx)(b,{text:this.props.errorText}),Object(h.jsx)("input",{className:"number",placeholder:"Number of Events",value:this.props.numberOfEvents,onChange:this.props.handleEventNumberChange.bind(this)})]})}}]),n}(a.a.Component),g=n(220),O=n(172),x=n(221),w=n(222),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{children:Object(h.jsx)(g.a,{style:{backgroundColor:O.a.grey[900]},children:Object(h.jsxs)(x.a,{children:[Object(h.jsx)("img",{className:"logo",src:"./mat/logo_large.png",alt:"meet logo"}),Object(h.jsx)(w.a,{style:{flexGrow:7},children:" "}),Object(h.jsx)(m,{locations:this.props.locations,updateEvents:this.props.updateEvents}),Object(h.jsx)(w.a,{children:"# of events"}),Object(h.jsx)(j,{numberOfEvents:this.props.numberOfEvents,errorText:this.props.errorText,handleEventNumberChange:function(t){e.props.handleEventNumberChange(t)}})]})})})}}]),n}(a.a.Component),k=n(173),T=n(10),S=n.n(T),E=n(26),C=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],N=n(25),Z=n.n(N),D=n(32),q=n.n(D),I=function(){var e=Object(E.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(E.a)(S.a.mark((function e(){var t,n,r,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",C);case 2:return e.next=4,A();case 4:if(!(t=e.sent)){e.next=13;break}return B(),n="https://3fyf773qw9.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(t),e.next=10,q.a.get(n);case 10:return(r=e.sent).data&&(a=W(r.data.events),localStorage.setItem("last Events",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(a))),e.abrupt("return",r.data.events);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(e){var t=e.map((function(e){return e.location}));return Object(k.a)(new Set(t))},A=function(){var e=Object(E.a)(S.a.mark((function e(){var t,n,r,a,s,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,I(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return r=new URLSearchParams(window.location.search),e.next=13,r.get("code");case 13:if(a=e.sent){e.next=20;break}return e.next=17,q.a.get("https://3fyf773qw9.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return s=e.sent,o=s.data.authUrl,e.abrupt("return",window.location.href=o);case 20:return e.abrupt("return",a&&J(a));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else{var t=window.location.protocol+"//"+window.location.host;window.history.pushState("","",t)}},J=function(){var e=Object(E.a)(S.a.mark((function e(t){var n,r,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://3fyf773qw9.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return r=e.sent,(a=r.access_token)&&localStorage.setItem("access_token",a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=(n(205),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).updateEvents=function(t,n){M().then((function(r){var a="all"===t?r:r.filter((function(e){return e.location===t}));e.setState({events:a,numberOfEvents:n})}))},e.state={events:[],locations:[],numberOfEvents:32,errorText:""},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,Z.a.configure({parent:"#root"}),Z.a.start(),M().then((function(t){e.mounted&&(e.setState({events:t.slice(0,e.props.numberOfEvents),locations:W(t)}),Z.a.done())}))}},{key:"componentDidUpdate",value:function(){}},{key:"onEventNumberChange",value:function(e){var t=e.target.value;t<0||t>32?this.setState({errorText:"Please enter a value between 1 and 32",numberOfEvents:""}):this.setState({numberOfEvents:t,errorText:""})}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(y,{updateEvents:this.updateEvents,numberOfEvents:this.state.numberOfEvents,handleEventNumberChange:function(t){return e.onEventNumberChange(t)},locations:this.state.locations,errorText:this.state.errorText}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(p,{events:this.state.events,numberOfEvents:this.state.numberOfEvents})]})}}]),n}(a.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,223)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),s(e),o(e)}))},U=n(33);U.config("b0d26029450c4161a40a7c8ddba645ec").install(),o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),R(),U.config("b0d26029450c4161a40a7c8ddba645ec").install()}},[[207,1,2]]]);
//# sourceMappingURL=main.12ce76ce.chunk.js.map