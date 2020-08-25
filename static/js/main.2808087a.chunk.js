(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{34:function(e,a,t){e.exports=t(50)},39:function(e,a,t){},40:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(14),s=t.n(r),i=(t(39),t(40),t(41),t(5)),c=t(6),o=t(8),m=t(7),u=t(54),p=t(55),d=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"header"},l.a.createElement(u.a,{bg:"dark",variant:"dark",expand:"lg",fixed:"top"},l.a.createElement(u.a.Brand,{href:"#profile"},l.a.createElement("img",{src:"./Manu Logo.png",width:"30",height:"30",className:"d-inline-block align-top",alt:"Manu logo"})),l.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(p.a,{className:"mr-auto"},l.a.createElement(p.a.Link,{href:"#experiences"},"Experiences"),l.a.createElement(p.a.Link,{href:"#skills"},"Skills"),l.a.createElement(p.a.Link,{href:"#projects"},"Projects")))))}}]),t}(n.Component),h=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"background-white"},l.a.createElement("div",{id:"profile",className:"comp-container"},l.a.createElement("div",{className:"intro"},l.a.createElement("h1",null,"Profile"),l.a.createElement("p",null,"Industrial Engineer & Full Stack Web Developer")),l.a.createElement("hr",null),l.a.createElement("div",{className:"profile-container row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("h3",{className:"color-darker-green"},"About Me"),l.a.createElement("p",null,"My goal is to help bridge the gap between Business and Tech, by being able to understand the goals and struggles in both parties and find the best possible solutions. On the one hand, I am a highly logical and analytical person and I find complex problems to be challenging. On the other one, I am a people's person: I love working in teams!")),l.a.createElement("div",{className:"col-md-4 text-center"},l.a.createElement("img",{src:"./Profile pic.jpeg",alt:"Manuel Toscano"})),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("h3",{className:"color-darker-green"},"Details"),l.a.createElement("h5",null,"Name:"),l.a.createElement("p",null,"Manuel Toscano"),l.a.createElement("h5",null,"Age:"),l.a.createElement("p",null,"29 years"),l.a.createElement("h5",null,"Location"),l.a.createElement("p",null,"Berlin, Germany"),l.a.createElement("div",{className:"logo-container"},l.a.createElement("a",{href:"https://github.com/mtoscano91"},l.a.createElement("img",{src:"./github_PNG83.png",alt:"Github Profile",className:"logo"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/manuel-toscano-tech/"},l.a.createElement("img",{src:"./linkedinLogo.png",alt:"LinkedIn Profile",className:"logo"})))))))}}]),t}(n.Component),g=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"col-md-6 col-sm-12 col-xs-12"},l.a.createElement("a",{href:this.props.project.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("figure",{className:"project-detail"},l.a.createElement("img",{src:this.props.project.imgUrl,alt:this.props.project.title,className:"img-fluid"}),l.a.createElement("figcaption",null,l.a.createElement("h5",null,this.props.project.title),l.a.createElement("hr",null),l.a.createElement("p",null,this.props.project.description),l.a.createElement("p",null,l.a.createElement("strong",null,"Tags:"),l.a.createElement("br",null),this.props.project.tags.map((function(a,t){return t===e.props.project.tags.length-1?a:a+", "})))))))}}]),t}(n.Component),E={education:[{place:"Ironhack",dateStart:"Mar 2020",dateEnd:"Jun 2020",title:"Full Stack Web Development Bootcamp",description:"9 weeks of a full-time intense Development Bootcamp. Mainly focused on Javascript and acquiring a MERN stack.",location:"Berlin, Germany"},{place:"Universidad Polit\xe9cnica de Madrid",dateStart:"Jan 2014",dateEnd:"Jun 2014",title:"Student Exchange Programme",description:"6 months where I learnt to live and study in a different culture. First experience living abroad, an eye-opener.",location:"Madrid, Spain"},{place:"Instituto Tecnol\xf3gico de Buenos Aires (ITBA)",dateStart:"Mar 2010",dateEnd:"Dec 2015",title:"Industrial Engineer",description:"5 years and lots of hours of study which shaped my mind into analyzing problems and finding solutions.",location:"Buenos Aires, Argentina"}],work:[{place:"Adaptogenics",dateStart:"Oct 2018",dateEnd:"Mar 2020",title:"Co-founder",description:"Objective: Educate people about a holistic approach to their health, while delivering products accordingly. Results: 3.5k followers @ Instagram (@adaptogenics_ar) & approximately 1.000 units sold.",location:"Buenos Aires, Argentina"},{place:"Instituto Tecnol\xf3gico de Buenos Aires (ITBA)",dateStart:"Feb 2019",dateEnd:"Mar 2020",title:'Teacher Assistant in "Sistemas y Modelos"',description:"University subject based in analysis, modeling and basic simulation of Complex Systems (e.g. Education, Social Plans, Climate Change)",location:"Buenos Aires, Argentina"},{place:"Hakan's Caf\xe9",dateStart:"Apr 2018",dateEnd:"Jul 2018",title:"Kitchen Assistant",description:"Worked as a Kitchen Assistant at Manly Beach during my Working Holidays in Australia",location:"Sydney, Australia"},{place:"OLX Group",dateStart:"May 2016",dateEnd:"Feb 2018",title:"Growth Business Analyst",description:"First as Local Analyst for Argentina (Diagnosis of main growth KPIs), then as Regional Analyst for Latin America (Strategy, KPI measurement standardisation, exposure to CEO).",location:"Buenos Aires, Argentina"},{place:"LATAM Airlines",dateStart:"Apr 2015",dateEnd:"May 2016",title:"Sales Analyst and Internship",description:"Diagnosis and analysis of LATAM flight sales in Argentina.",location:"Buenos Aires, Argentina"}]},k={software:[{skill:"Excel",stars:5},{skill:"Powerpoint",stars:5},{skill:"SQL",stars:4},{skill:"MicroStrategy",stars:4},{skill:"Javascript",stars:3},{skill:"React",stars:3},{skill:"NodeJS",stars:3},{skill:"ExpressJS",stars:3},{skill:"HTML",stars:3},{skill:"CSS",stars:3},{skill:"MongoDB",stars:3},{skill:"MixPanel",stars:3},{skill:"Google Analytics",stars:2},{skill:"Tableau",stars:2},{skill:"Angular",stars:2},{skill:"Typescript",stars:2}],languages:[{language:"Spanish",stars:5},{language:"English",stars:4},{language:"German",stars:1}]},f=[{title:"Kinder Class",description:"MVP Educational playground for kids",tags:["MongoDB","Express","React","Node"],imgUrl:"./projects/KinderClass.png",url:"http://kinder-class.herokuapp.com/"},{title:"Live Chat",description:"MVP Live chat",tags:["Reat","Node","Socket.io"],imgUrl:"./projects/LiveChat.png",url:"https://manu-live-chat.herokuapp.com/"},{title:"Ironcook",description:"MVP Social network cooking website",tags:["MongoDB","Express","Handlebars","Node"],imgUrl:"./projects/Ironcook2.png",url:"http://ironcook.herokuapp.com/"},{title:"Gravity Runner",description:"Infinite runner space game",tags:["P5","Javascript"],imgUrl:"./projects/GravityRunner.png",url:"https://mtoscano91.github.io/Gravity-runner/"}],v=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"comp-container",id:"projects"},l.a.createElement("div",{className:"intro"},l.a.createElement("h1",null,"Projects")),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},f.map((function(e,a){return l.a.createElement(g,{project:e,key:a})}))))}}]),t}(n.Component),b=t(52),y=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{md:4},l.a.createElement("h5",null,this.props.experience.place),l.a.createElement("p",null,this.props.experience.dateStart," - ",this.props.experience.dateEnd)),l.a.createElement(b.a,{md:8},l.a.createElement("h6",null,this.props.experience.title),l.a.createElement("span",{className:"hidden-md"},this.props.experience.description,l.a.createElement("br",null)),l.a.createElement("p",{className:"color-green"},l.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-geo-alt",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"})),this.props.experience.location)))}}]),t}(n.Component),w=t(53),j=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={experiences:E},e}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"comp-container",id:"experiences"},l.a.createElement("div",{className:"intro"},l.a.createElement("h1",null,"Experiences")),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h3",null,"Education"),this.state.experiences.education.map((function(e,a){return l.a.createElement(w.a,{key:a},l.a.createElement(y,{experience:e}))}))),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h3",null,"Work"),this.state.experiences.work.map((function(e,a){return l.a.createElement(w.a,{key:a},l.a.createElement(y,{experience:e}))}))))}}]),t}(n.Component),N=t(33),A=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,this.props.skill),l.a.createElement("span",null,Object(N.a)(Array(5)).map((function(a,t){return t<e.props.stars?l.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-star-fill color-green",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",key:t},l.a.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})):l.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-star color-green",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",key:t},l.a.createElement("path",{fillRule:"evenodd",d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"}))}))))}}]),t}(n.Component),O=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={skills:k},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this.state.skills.software.length,a=this.state.skills.languages.length;return l.a.createElement("div",{className:"background-white"},l.a.createElement("div",{className:"comp-container",id:"skills"},l.a.createElement("div",{className:"intro"},l.a.createElement("h1",null,"Skills")),l.a.createElement("hr",null),l.a.createElement("h3",null,"Technical Skills"),l.a.createElement(w.a,null,l.a.createElement(b.a,{md:6},l.a.createElement("ul",{className:"skill-list"},this.state.skills.software.slice(0,Math.round(e/2)).map((function(e,a){return l.a.createElement("li",{key:a},l.a.createElement(A,{skill:e.skill,stars:e.stars}))})))),l.a.createElement(b.a,{md:6},l.a.createElement("ul",{className:"skill-list"},this.state.skills.software.slice(Math.round(e/2)).map((function(e,a){return l.a.createElement("li",{key:a},l.a.createElement(A,{skill:e.skill,stars:e.stars}))}))))),l.a.createElement("hr",null),l.a.createElement("h3",null,"Languages"),l.a.createElement(w.a,null,l.a.createElement(b.a,{md:6},l.a.createElement("ul",{className:"skill-list"},this.state.skills.languages.slice(0,Math.round(a/2)).map((function(e,a){return l.a.createElement("li",{key:a},l.a.createElement(A,{skill:e.language,stars:e.stars}))})))),l.a.createElement(b.a,{md:6},l.a.createElement("ul",{className:"skill-list"},this.state.skills.languages.slice(Math.round(a/2)).map((function(e,a){return l.a.createElement("li",{key:a},l.a.createElement(A,{skill:e.language,stars:e.stars}))})))))))}}]),t}(n.Component),x=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"top",className:"landing",style:{height:"618px"}},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Manuel Toscano"),l.a.createElement("p",{className:"lead"},"Personal Website")),l.a.createElement("div",{className:"overlay"}),l.a.createElement("a",{href:"#profile",className:"scroll-down"},l.a.createElement("span",{className:"glyphicon glyphicon-chevron-down"})))}}]),t}(n.Component);var M=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(x,null),l.a.createElement(d,null),l.a.createElement(h,null),l.a.createElement(j,null),l.a.createElement(O,null),l.a.createElement(v,null))},S=t(32);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S.a,null,l.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.2808087a.chunk.js.map