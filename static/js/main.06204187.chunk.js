(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{32:function(e){e.exports=JSON.parse('[{"date":"May 2021","event":"Bachelor\'s in Computer Science At Arizona State University","description":"Computer Science Student Graduate focusing on Software engineering and Cybersecurity development"},{"date":"January 2021 to May 2021","event":"Undergraduate Teachers Assistant","description":"Focused on creating a helpful learning environment for 500+ students taking CSE365 at Arizona State University","list":"  Hosted Office hour sessions for students to come in for 1 on 1 help and assisted in the midterm and final Hackathon Events"},{"date":"September 2020 to May 2021","event":"Software Engineering Intern","description":"Developed applications for researcher-use regarding Covid Tracing","list":"Developed Front-end application in React.js and Node.js with our Back-End handled in Node.js, Python, and data stored in ArangoDB"},{"date":"January 2020 to May 2020","event":"Undergraduate Teachers Assistant","description":"Focused on creating a helpful learning environment for 300+ students taking CSE365 at Arizona State University","list":"  Helped students understand Ciphers including the Vigenere Cipher and assisted in the midterm and final Hackathon Events"},{"date":"May 2019","event":"Graduated from Mesa Community College"}]')},41:function(e,t,a){},48:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(14),r=a.n(i),o=(a(41),a(28)),c=a(29),s=a(36),m=a(35),u=a(15),d=a(5),h=a(13),p=a(17),b=a(34),E=a(18),g=a(16);var f=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(h.a,{fluid:!0},l.a.createElement(E.a,{className:"border-top justify-content-between p-3"},l.a.createElement(g.a,{className:"p-0",md:3,sm:12},"Ryley Lamb"),l.a.createElement(g.a,{className:"p-0 d-flex justify-content-end"},"2021"))))},y=a(31);var v=function(e){return l.a.createElement(y.a,{className:"p-3 mb-2 bg-secondary text-white jumbotron-fluid"},l.a.createElement(h.a,null,l.a.createElement(E.a,{className:"justify-content-center py-2"},l.a.createElement(g.a,null,e.title&&l.a.createElement("h3",{className:"display-4 font-weight-bold"},e.title),e.subTitle&&l.a.createElement("h4",null,e.subTitle),e.text&&l.a.createElement("p",null,e.text),e.subTitle2&&l.a.createElement("h4",null,e.subtitle2),e.text2&&l.a.createElement("p",null,e.text2),e.subTitle3&&l.a.createElement("h4",null,e.subTitle3),e.text3&&l.a.createElement("p",null,e.text3),e.email&&l.a.createElement("a",{id:e.email,href:"#"},"ryleylamb@gmail.com")))))};var T=function(e){return l.a.createElement("div",null,l.a.createElement(v,{title:e.title,subTitle:e.subTitle,text:e.text}))};var x=function(e){return l.a.createElement("div",null,l.a.createElement(v,{title:e.title,subTitle:e.subTitle,text:"I grew up in Washington State in a small town in Skagit County where I grew up with a father in Construction and mother in Web Administrations. I grew up with a passion in technology where since four years old, I always knew that I wanted to work with technology.",text2:"Fast forward to when I moved out to Arizona, I met a group of collegues that helped pursue my passion in Computers and led me to enroll at Mesa Community College as a Computer Science student and then to go onto Arizona State University to get my Bachelor's in Computer Science"}))};var w=function(e){return l.a.createElement(v,{title:e.title,subTitle:e.subTitle,text:e.text,email:"ryleylamb@gmail.com"})},C=a(23),k=(a(47),a(32));var N=function(e){return l.a.createElement("div",{style:{background:"#ccc"}},l.a.createElement(v,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(C.VerticalTimeline,null,k.map((function(e){return l.a.createElement(C.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.date,iconStyle:{background:"rgb(33, 150, 0)",color:"#111"}},l.a.createElement("h3",{className:"vertical-timeline-element-title",dangerouslySetInnerHTML:{__html:e.event}}),l.a.createElement("h6",{className:"vertical-timeline-element-text",dangerouslySetInnerHTML:{__html:e.description}}),l.a.createElement("h6",{className:"vertical-timeline-element-text",dangerouslySetInnerHTML:{__html:e.list}}))}))))},S=(a.p,a(48),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={title:"Ryley Lamb",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"},{title:"Timeline",path:"/timeline"}],home:{title:"Welcome to my Page",subTitle:"",text:"Check out my Github and contact page"},about:{title:"This is me"},contact:{title:"Contact Information"},timeline:{title:"Event Log"}},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(u.a,null,l.a.createElement(h.a,{className:"p-0",fluid:!0},l.a.createElement(p.a,{className:"border-bottom",bg:"transparent",expand:"lg"},l.a.createElement(p.a.Brand,null,"Ryley Lamb"),l.a.createElement(p.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(p.a.Collapse,{id:"navbar-toggle"},l.a.createElement(b.a,{className:"ml-auto"},l.a.createElement(u.b,{className:"nav-link",to:"/"}," Home "),l.a.createElement(u.b,{className:"nav-link",to:"/about"}," About "),l.a.createElement(u.b,{className:"nav-link",to:"/contact"}," Contact "),l.a.createElement(u.b,{className:"nav-link",to:"/timeline"}," Timeline ")))),l.a.createElement(d.a,{path:"/",exact:!0,render:function(){return l.a.createElement(T,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(d.a,{path:"/about",exact:!0,render:function(){return l.a.createElement(x,{title:e.state.about.title,subTitle:e.state.about.subTitle,text:e.state.about.text})}}),l.a.createElement(d.a,{path:"/contact",exact:!0,render:function(){return l.a.createElement(w,{title:e.state.contact.title,subTitle:e.state.contact.subTitle,text:e.state.contact.text})}}),l.a.createElement(d.a,{path:"/timeline",exact:!0,render:function(){return l.a.createElement(N,{title:e.state.timeline.title,subTitle:e.state.timeline.subTitle,text:e.state.timeline.text})}}),l.a.createElement(f,null)))}}]),a}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(55);r.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.06204187.chunk.js.map