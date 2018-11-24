(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,a){e.exports={flickerAPI:"b1af19929c990bc1a1b2b9b00bbb65d0"}},102:function(e,a,n){e.exports=n(232)},229:function(e,a,n){},232:function(e,a,n){"use strict";n.r(a);var o=n(0),t=n.n(o),c=n(40),r=n.n(c),i=n(21),d=n.n(i),m=n(54),s=n(24),u=n(16),l=n(29),p=n(25),h=n(30),g=function(e){return t.a.createElement("div",{className:"header"},t.a.createElement("h1",null,"Where should I go?"))},y=function(e){return t.a.createElement("div",{className:"action_container"},t.a.createElement("button",{className:"button",onClick:function(){e.getCountryName(),e.changeButtonText()}},e.stopButtonIsPressed?t.a.createElement("p",null,"Try Again? :D"):t.a.createElement("p",null,"Stop!")),t.a.createElement("h2",null," ",e.countryRoulette," "),e.stopButtonIsPressed?t.a.createElement("p",null):t.a.createElement("img",{src:"img/chikyuugi.png"}))},S=n(97),M=n.n(S),E=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return t.a.createElement("div",{className:"pictures"},t.a.createElement(M.a,{options:{transitionDuration:200}},this.props.imgURL&&this.props.imgURL.map(function(e){return t.a.createElement("img",{src:e,className:"item"})})))}}]),a}(o.Component),f=n(235),I=n(236),b=n(234),C=n(237),N=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=[this.props.lat,this.props.lon];console.log(e);return t.a.createElement("div",null,t.a.createElement("p",null),this.props.showMap&&t.a.createElement(f.a,{center:e,zoom:"3"},t.a.createElement(I.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.a.createElement(b.a,{position:e},t.a.createElement(C.a,null,"A pretty CSS3 popup. ",t.a.createElement("br",null)," Easily customizable."))))}}]),a}(o.Component),B=function(e){var a=e.countryCode,n="https://www.countryflags.io/".concat(a,"/flat/64.png");return a||(n=""),t.a.createElement("div",{className:"flag"},e.countryCode?t.a.createElement("img",{src:n}):t.a.createElement("p",null))},T=function(e){return t.a.createElement("div",{className:"wikiText"},e.wikiError?t.a.createElement("p",null,"no wikipedia info. please try again. "):t.a.createElement("p",null,e.wikipediaText))},w=function(e){return t.a.createElement("div",{className:"countryName_container"},""!==e.countryName&&t.a.createElement("h1",null,e.countryName))},A=n(71),G=n(101),k=n.n(G),R=function(e){function a(e){var n;return Object(s.a)(this,a),(n=Object(l.a)(this,Object(p.a)(a).call(this,e))).countryRoulette=function(){var e=[];!function a(){setTimeout(function(){e=[],!1!==n.state.rouletteIsRunning&&(e+=A[Math.floor(234*Math.random())].name,n.setState({countryRoulette:e}),a())},80)}()},n.getCountryName=function(){if(!1===n.state.rouletteIsRunning)return n.setState({rouletteIsRunning:!0,countryName:"",wikipediaText:"",countryCode:"",wikiError:!1,imgURL:[],showMap:!1,lat:"",lon:""}),void n.countryRoulette();n.setState(function(){return{rouletteIsRunning:!1,countryRoulette:"",stopButtonIsPressed:!1}});var e=A.find(function(e){return e.name===n.state.countryRoulette}),a=e.name,o=e.code;n.setState({countryName:a,countryCode:o},function(){n.getCountryInfo(),n.getGeocode(),n.getPictures()})},n.getCountryInfo=Object(m.a)(d.a.mark(function e(){var a,o,t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.state.countryName,e.next=3,fetch('https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&format=json&search="'.concat(a,'"&limit=2'));case 3:return o=e.sent,e.next=6,o.json();case 6:""===(t=e.sent)[2][0]&&n.setState({wikiError:!0,wikipediaText:""}),n.setState({wikipediaText:t[2]});case 9:case"end":return e.stop()}},e,this)})),n.getPictures=Object(m.a)(d.a.mark(function e(){var a,o,t,c,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.state.countryName,e.next=3,fetch("https://api.flickr.com/services/rest?api_key=".concat(k.a.flickerAPI,"&method=flickr.photos.search&format=json&text=").concat(a,"&extras=url_h&per_page=20&nojsoncallback=1&content_type=1&sort=interestingness-desc"));case 3:return o=e.sent,e.next=6,o.json();case 6:t=e.sent,c=t.photos.photo.filter(function(e){return e.url_h}),r=[],c.forEach(function(e){return r.push(e.url_h)}),n.setState({imgURL:r});case 11:case"end":return e.stop()}},e,this)})),n.getGeocode=Object(m.a)(d.a.mark(function e(){var a,o,t,c,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.state.countryName,console.log(a),e.next=4,fetch("https://nominatim.openstreetmap.org/search/".concat(a,"?format=json"));case 4:return o=e.sent,e.next=7,o.json();case 7:t=e.sent,console.log(t),c=t[0].lat,r=t[0].lon,console.log(c),n.setState({showMap:!0,lat:c,lon:r});case 13:case"end":return e.stop()}},e,this)})),n.changeButtonText=function(){n.setState(function(e){return{stopButtonIsPressed:!e.stopButtonIsPressed}})},n.state={rouletteIsRunning:!0,countryRoulette:"",countryName:"",countryCode:"",wikipediaText:"",stopButtonIsPressed:!1,wikiError:!1,imgURL:"",showMap:!1,lat:"",lon:""},n}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.countryRoulette()}},{key:"render",value:function(){return t.a.createElement("div",null,t.a.createElement("div",{className:"wrapper"},t.a.createElement(g,null),t.a.createElement(y,{countryRoulette:this.state.countryRoulette,getCountryName:this.getCountryName,stopButtonIsPressed:this.state.stopButtonIsPressed,changeButtonText:this.changeButtonText}),t.a.createElement(w,{countryName:this.state.countryName}),this.state.stopButtonIsPressed&&t.a.createElement("div",{className:"box_container"},t.a.createElement("div",{className:"box_left"},t.a.createElement(B,{countryCode:this.state.countryCode}),t.a.createElement(T,{wikipediaText:this.state.wikipediaText,wikiError:this.state.wikiError})),t.a.createElement("div",{className:"box_right"},t.a.createElement(N,{showMap:this.state.showMap,lat:this.state.lat,lon:this.state.lon}))),t.a.createElement(E,{imgURL:this.state.imgURL})))}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(229);r.a.render(t.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},71:function(e){e.exports=[{name:"Afghanistan",code:"AF"},{name:"\xc5land Islands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"AndorrA",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Brunei",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cape Verde",code:"CV"},{name:"Cayman Islands",code:"KY"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo",code:"CG"},{name:"Congo",code:"CD"},{name:"Cook Islands",code:"CK"},{name:"Costa Rica",code:"CR"},{name:"Ivory Coast",code:"CI"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cyprus",code:"CY"},{name:"Czech Republic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (Malvinas)",code:"FK"},{name:"Faroe Islands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern and Antarctic Lands",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and Mcdonald Islands",code:"HM"},{name:"Holy See (Vatican City State)",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:"Korea",code:"KP"},{name:"Korea",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:"Laos",code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Macedonia",code:"MK"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia",code:"FM"},{name:"Moldova",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"Netherlands Antilles",code:"AN"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"Northern Mariana Islands",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Palestinian Territory",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Pitcairn Islands",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Puerto Rico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Reunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Russian Federation",code:"RU"},{name:"RWANDA",code:"RW"},{name:"Saint Helena",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia and Montenegro",code:"RS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Swaziland",code:"SZ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syria",code:"SY"},{name:"Taiwan",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates",code:"AE"},{name:"United Kingdom",code:"GB"},{name:"United States",code:"US"},{name:"United States Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela",code:"VE"},{name:"Viet Nam",code:"VN"},{name:"Virgin Islands, British",code:"VG"},{name:"Virgin Islands, U.S.",code:"VI"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}]}},[[102,2,1]]]);
//# sourceMappingURL=main.f3dd9234.chunk.js.map