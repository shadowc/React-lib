!function(e){var t={};function n(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t){e.exports=React},function(e,t){e.exports=jQuery},function(e,t){e.exports=ReactDOM},function(e,t){e.exports=PropTypes},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=l(n(0)),r=l(n(1)),i=l(n(3)),o=l(n(5)),u=l(n(6));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),a=n.props.columns.map(function(e){return new u.default(e)}),s=n.props.initialData.map(function(e){return new o.default(e)});return n.state={rawData:n.props.initialData,columns:a,rows:s,prevSelectedRow:-1,orderBy:n.props.orderBy,orderReverse:n.props.orderReverse,loading:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),a(t,[{key:"sortRows",value:function(){var e=this.props.sortings[this.state.orderBy];"function"==typeof e&&this.state.rows.sort(e),this.state.orderReverse&&this.state.rows.reverse()}},{key:"render",value:function(){return this.sortRows(),s.default.createElement("div",{className:"table-wrapper",id:this.props.id},s.default.createElement("table",{className:"table-header"},s.default.createElement("thead",null,s.default.createElement("tr",null,this.state.columns.map(this.renderColumn.bind(this))))),s.default.createElement("table",{className:"table-body"},s.default.createElement("tbody",null,this.state.loading?s.default.createElement("tr",null,s.default.createElement("td",{colSpan:this.state.columns.length},s.default.createElement("span",{className:"icon loading"}," "))):this.state.rows.map(this.renderRow.bind(this)))))}},{key:"renderColumn",value:function(e){var t={width:e.width};return s.default.createElement("th",{key:e.name,className:e.className,style:t,onClick:this.generateHeaderClick.bind(this,e)},e.displayName)}},{key:"renderRow",value:function(e){var t=e.className+" "+(e.selected?"selected":""),n={display:e.show?"table-row":"none"};return s.default.createElement("tr",{key:e.id,id:e.id,className:t,style:n},this.state.columns.map(this.renderCell.bind(this,e)))}},{key:"renderCell",value:function(e,t){var n={width:t.width};return s.default.createElement("td",{key:e.id+" "+t.name,style:n,onClick:this.generateCellClick.bind(this,e,t.name)},"function"==typeof t.format?t.format.call(this,e.data[t.name],e):e.data[t.name])}},{key:"generateHeaderClick",value:function(e,t){t.preventDefault(),t.stopPropagation();var n=new CustomEvent("HeaderClick",{detail:e}),a=document.getElementById(this.props.id);return a&&a.dispatchEvent(n),this.props.onColumnHeaderClick&&this.props.onColumnHeaderClick(e),!1}},{key:"getRowNdx",value:function(e){for(var t=0;t<this.state.rows.length;t++)if(this.state.rows[t].id===e.id)return t;return-1}},{key:"generateCellClick",value:function(e,t,n){var a=this;n.preventDefault(),n.stopPropagation();var s,r,i=this.getRowNdx(e),o=!1,u=function(e){if(a.state.prevSelectedRow>-1)for(var t=Math.min(i,a.state.prevSelectedRow),n=Math.max(i,a.state.prevSelectedRow),s=t;s<=n;s++)e.selected=!0};if(-1!==i){this.props.selectable&&(n.shiftKey||n.ctrlKey?n.shiftKey?function(e){a.state.rows.forEach(function(e){e.selected=!1}),u(e)}(e):n.ctrlKey?(e.selected=!e.selected,o=!0):n.shiftKey&&n.ctrlKey&&u(e):(r=!(s=e).selected,a.state.rows.forEach(function(e){e.selected=!1}),s.selected=r,o=!0)),this.setState({prevSelectedRow:o?i:this.state.prevSelectedRow,rows:this.state.rows});var l=new CustomEvent("CellClick",{detail:{row:e,cell:t}}),c=document.getElementById(this.props.id);c&&c.dispatchEvent(l),this.props.onCellClick&&this.props.onCellClick(e,t)}return!1}},{key:"addRows",value:function(e,t){e.length||(e=[e]),t||(t=this.state.rows.length);var n=e.map(function(e){return new o.default(e)}),a=e.map(function(e){return r.default.extend(!0,{},e)}),s=[].concat(c(this.state.rows.slice(0,t)),c(n),c(this.state.rows.slice(t))),i=[].concat(c(this.state.rawData.slice(0,t)),c(a),c(this.state.rawData.slice(t)));this.setState({rows:s,rawData:i})}},{key:"setRows",value:function(e){e.length||(e=[e]);var t=e.map(function(e){return new o.default(e)}),n=e.map(function(e){return r.default.extend(!0,{},e)});this.setState({rows:t,rawData:n})}},{key:"deleteRows",value:function(e,t){t||(t=1);var n=[].concat(c(this.state.rows.slice(0,e)),c(this.state.rows.slice(e+t))),a=[].concat(c(this.state.rawData.slice(0,e)),c(this.state.rawData.slice(e+t)));this.setState({rows:n,rawData:a})}},{key:"sortBy",value:function(e){this.setState(e)}},{key:"getSort",value:function(){return{orderBy:this.state.orderBy,orderReverse:this.state.orderReverse}}},{key:"getRow",value:function(e){return e<0||e>=this.state.rows.length?null:new o.default(this.state.rows[e])}},{key:"getSelectedRows",value:function(){for(var e=[],t=0;t<this.state.rows.length;t++)this.state.rows[t].selected&&e.push(new o.default(this.state.rows[t]));return e}},{key:"getSelectedRowIds",value:function(){for(var e=[],t=0;t<this.state.rows.length;t++)this.state.rows[t].selected&&e.push(this.state.rows[t].id.toString());return e}},{key:"getColumns",value:function(){return this.state.columns}},{key:"setColumns",value:function(e){this.setState({columns:e.map(function(e){return new u.default(e)})})}},{key:"getById",value:function(e){for(var t=0;t<this.state.rows.length;t++){var n=this.state.rows[t];if(n.id===e)return new o.default(n)}return null}},{key:"deleteById",value:function(e){for(var t=0;t<this.state.rows.length;t++)if(this.state.rows[t].id===e)return void this.deleteRows(t)}},{key:"updateRow",value:function(e,t){for(var n=0;n<this.state.rows.length;n++){var a=this.state.rows[n];if(a.id===e)return a=new o.default(r.default.extend(!0,{},a.data,t)),r.default.extend(!0,a.data,t),void this.setState({rows:this.state.rows,rawData:this.state.rawData})}}},{key:"updateCell",value:function(e,t,n){for(var a=0;a<this.state.rows.length;a++){var s=this.state.rows[a],r=this.state.rawData[a];if(s.id===e)return s.data[t]=n,r[t]=n,void this.setState({rows:this.state.rows,rawData:this.state.rawData})}}},{key:"clear",value:function(){this.setState({rows:[],rawData:[]})}},{key:"setLoading",value:function(e){this.setState({loading:e})}}]),t}();t.default=d,d.propTypes={id:i.default.string,columns:i.default.arrayOf(i.default.shape({name:i.default.string.isRequired,displayName:i.default.string,width:i.default.oneOfType([i.default.string,i.default.number]),className:i.default.string,format:i.default.func,sortable:i.default.bool})),initialData:i.default.arrayOf(i.default.shape({id:i.default.string,data:i.default.object.isRequired,className:i.default.string})),selectable:i.default.bool,orderBy:i.default.string,orderReverse:i.default.bool,sortings:i.default.objectOf(i.default.func),onColumnHeaderClick:i.default.func,onCellClick:i.default.func},d.defaultProps={id:"grid",columns:[],orderBy:"",selectable:!0,orderReverse:!1,sortings:{},initialData:[],onColumnHeaderClick:null,onCellClick:null}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,s=n(1),r=(a=s)&&a.__esModule?a:{default:a};var i=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t instanceof e&&(t=t.data),this.id=t.id?t.id:e.getNextRowId(),this.data=r.default.extend(!0,{},t),this.className=t.className?t.className:"",this.selected=!1,this.show=!0};t.default=i,i.getNextRowId=function(){return"'row_"+i.nextRowId++},i.nextRowId=0},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n;this.name=t.name,this.displayName=t.displayName?t.displayName:this.name,this.width="number"==typeof(n=t.width)?n+"px":/^(\d)+[px|%]$/.test(n.toString())?n.toString():"",this.className=t.className?t.className:"",this.format=t.format,this.sortable=t.sortable}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=(a=r)&&a.__esModule?a:{default:a};var o=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={title:"Alert",message:"Alert message",visible:!1,closable:!1,buttons:[{key:"close",label:"Close",success:!0,className:"button action"}],onSuccess:function(){},onReject:function(){}},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),s(t,[{key:"render",value:function(){var e="modal "+(this.state.visible?"visible":"");return i.default.createElement("div",{className:e},i.default.createElement("h2",null,this.state.title,this.state.closable?i.default.createElement("span",{className:"close",onClick:this.onModalClose.bind(this)}," x "):null),i.default.createElement("p",null,this.state.message),i.default.createElement("div",{className:"buttons"},this.state.buttons.map(this.renderButton.bind(this))))}},{key:"renderButton",value:function(e){return i.default.createElement("button",{key:e.key,className:e.className,onClick:this.onModalButtonPressed.bind(this,e)},e.label)}},{key:"onModalClose",value:function(e){e.preventDefault(),e.stopPropagation(),this.state.onReject("close-button",!1),this.setState({visible:!1})}},{key:"onModalButtonPressed",value:function(e,t){t.preventDefault(),t.stopPropagation(),e.success?this.state.onSuccess(e.key,!0):this.state.onReject(e.key,!1),this.setState({visible:!1})}}]),t}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=o(n(1)),r=o(n(0)),i=o(n(3));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={tags:[],suggestions:[]},n.input=null,n.body=document.getElementsByTagName("body")[0],n.hiddenTags=n.props.hiddenFieldsContainer.children,n.newTagIndex=n.hiddenTags.length/2,n.suggestionTimeout=null,n.prevInputValue="",(0,s.default)(document).on("click",n.clearSuggestions.bind(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),a(t,[{key:"render",value:function(){var e=this;return r.default.createElement("div",{className:"tag-list",onClick:this.handleFocus.bind(this)},this.state.tags.map(this.renderTag.bind(this)),r.default.createElement("input",{ref:function(t){e.input=t},type:"text",className:"transparent",id:this.props.tagsTextLabel?this.props.tagsTextLabel:"tags",name:this.props.tagsTextLabel?this.props.tagsTextLabel:"tags",onKeyPress:this.onKeyPress.bind(this),onKeyUp:this.onKeyUp.bind(this)}),this.state.suggestions.length?r.default.createElement("div",{className:"tag_suggestions"},this.state.suggestions.map(this.renderSuggestion.bind(this))):"")}},{key:"renderTag",value:function(e){return r.default.createElement("span",{key:e.text},e.text," ",r.default.createElement("a",{href:"#",onClick:this.removeTag.bind(this,e)},"x"))}},{key:"renderSuggestion",value:function(e){var t=new RegExp("^(.*)("+this.input.value+")(.*)$","i"),n=e.text.match(t),a=e.text;if(null!==n&&4===n.length){var s=n[1],i=n[2],o=n[3];a=r.default.createElement("span",null,s,r.default.createElement("strong",null,i),o)}else a=r.default.createElement("span",null,e.text);return r.default.createElement("a",{href:"#",key:e.text,onClick:this.onSuggestionClick.bind(this,e)},a)}},{key:"addTag",value:function(e){if((e=e.trim()).endsWith(",")&&(e=e.substr(0,e.length-1)),""!==e){for(var t=0;t<this.state.tags.length;t++)if(this.state.tags[t].text===e)return void this.setState({suggestions:[]});for(var n=0,a=0;a<this.state.suggestions.length;a++){var r=this.state.suggestions[a];if(r.text.toLowerCase()===e.toLowerCase()){n=r.id,e=r.text;break}}var i=this.props.hiddenFieldsContainer.getAttribute("data-prototype").replace(/__name__/g,this.newTagIndex.toString(10));this.newTagIndex+=1,(0,s.default)(this.props.hiddenFieldsContainer).append(i),this.hiddenTags[this.hiddenTags.length-2].value=n,this.hiddenTags[this.hiddenTags.length-1].value=e;var o=this.hiddenTags[this.hiddenTags.length-2].id+"|"+this.hiddenTags[this.hiddenTags.length-1].id;this.state.tags.push({id:null,tagId:o,text:e}),this.setState({tags:this.state.tags,suggestions:[]}),this.input.focus()}else this.setState({suggestions:[]})}},{key:"removeTag",value:function(e,t){t&&t.preventDefault(),e.tagId.split("|").forEach(function(e){var t=document.getElementById(e);t.parentNode.removeChild(t)});for(var n=0;n<this.state.tags.length;n++){if(this.state.tags[n].text===e.text){this.state.tags.splice(n,1);break}}this.setState({tags:this.state.tags})}},{key:"resetSuggestionsTimeout",value:function(){null!==this.suggestionTimeout&&(clearTimeout(this.suggestionTimeout),this.suggestionTimeout=null)}},{key:"updateSuggestions",value:function(){var e=this;""!==this.input.value?(this.resetSuggestionsTimeout(),this.suggestionTimeout=setTimeout(function(){var t=e.props.xhrRoute+"/"+e.input.value;s.default.ajax(t,{method:"GET"}).then(function(t){var n=JSON.parse(t);"function"==typeof n.map&&e.setState({suggestions:n})})},200)):(this.resetSuggestionsTimeout(),this.setState({suggestions:[]}))}},{key:"onKeyUp",value:function(e){"Backspace"===e.key&&""===this.prevInputValue&&this.state.tags.length&&(this.state.tags.splice(this.state.tags.length-1,1),this.setState({tags:this.state.tags}));var t=document.createElement("span");t.style.fontSize="16px",t.innerHTML=this.input.value.replace(/\s/g,"&nbsp;"),this.body.appendChild(t),this.input.style.width=t.offsetWidth+"px",this.body.removeChild(t),this.prevInputValue=this.input.value,this.updateSuggestions()}},{key:"onKeyPress",value:function(e){switch(e.key){case",":case"Enter":this.addTag(this.input.value),this.input.value="",this.prevInputValue="",this.input.style.width="5px",e.preventDefault()}}},{key:"handleFocus",value:function(e){e.preventDefault(),this.input.focus(),this.updateSuggestions()}},{key:"onSuggestionClick",value:function(e,t){t.preventDefault(),t.stopPropagation(),this.addTag(e.text),this.input.value="",this.prevInputValue=""}},{key:"clearSuggestions",value:function(e){for(var t=e.target;null!==t;){if("tag_suggestions"===t.className)return;t=t.parentNode}this.setState({suggestions:[]})}}]),t}();t.default=u,u.propTypes={hiddenFieldsContainer:i.default.instanceOf(HTMLElement).isRequired,tagsTextLabel:i.default.string,xhrRoute:i.default.string.isRequired},u.defaultProps={tagsTextLabel:"text"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=u(n(0)),i=u(n(2)),o=u(n(4));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.grid=null,this.id=t.id,this.gridProps=t}return s(e,[{key:"render",value:function(e){this.grid=i.default.render(r.default.createElement(o.default,a({},this.gridProps)),e)}},{key:"addRows",value:function(e,t){this.grid.addRows(e,t)}},{key:"setRows",value:function(e){this.grid.setRows(e)}},{key:"deleteRows",value:function(e,t){this.grid.deleteRows(e,t)}},{key:"sortBy",value:function(e){this.grid.sortBy(e)}},{key:"getSort",value:function(){return this.grid.getSort()}},{key:"getRow",value:function(e){return this.grid.getRow(e)}},{key:"getSelectedRows",value:function(){return this.grid.getSelectedRows()}},{key:"getSelectedRowIds",value:function(){return this.grid.getSelectedRowIds()}},{key:"getColumns",value:function(){return this.grid.getColumns()}},{key:"setColumns",value:function(e){return this.grid.setColumns(e)}},{key:"getById",value:function(e){return this.grid.getById(e)}},{key:"deleteById",value:function(e){this.grid.deleteById(e)}},{key:"updateRow",value:function(e,t){this.grid.updateRow(e,t)}},{key:"updateCell",value:function(e,t,n){this.grid.updateCell(e,t,n)}},{key:"clear",value:function(){this.grid.clear()}},{key:"setLoading",value:function(e){this.grid.setLoading(e)}}]),e}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=u(n(0)),i=u(n(2)),o=u(n(7));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.modal=null,this.container=null}return s(e,[{key:"render",value:function(e){this.container=e,this.modal=i.default.render(r.default.createElement(o.default,a({},this.props)),e)}},{key:"show",value:function(e){var t=this;return new Promise(function(n,a){e.visible=!0,e.onSuccess=n,e.onReject=a,t.modal.setState(e),t.container.style.left=(window.innerWidth-t.container.offsetWidth)/2+"px",t.container.style.top=(window.innerHeight-t.container.offsetHeight)/2+"px"})}}]),e}();t.default=l,l.getOkButton=function(){return{key:"ok",label:"Ok",success:!0,className:"button button-action"}},l.getYesButton=function(){return{key:"yes",label:"Yes",success:!0,className:"button button-action"}},l.getNoButton=function(){return{key:"no",label:"No",success:!1,className:"button button-cancel"}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,s=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){s=!0,r=e}finally{try{!a&&o.return&&o.return()}finally{if(s)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=u(n(1)),r=u(n(0)),i=u(n(2)),o=u(n(8));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function e(t,n,u,l,c){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var d=[],f=s.default.find("input[type=hidden]"),h=0,p={};(0,s.default)(f).each(function(e,t){var n=new RegExp("^"+u+"\\_(\\d+)\\_(id|text)$"),s=t.id.match(n),r=a(s,3),i=r[0],o=r[1],l=r[2];Number(o)!==h&&(d.push(p),h=Number(o),p={}),p.tagId=p.tagId?p.tagId+"|"+i:i,p[l]=t.value}),p.id&&p.text&&d.push(p),this.tagsDisplay=i.default.render(r.default.createElement(o.default,{hiddenFieldsContainer:t,tagsTextLabel:l,xhrRoute:c}),n),this.tagsDisplay.setState({tags:d})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=d(n(4)),s=d(n(6)),r=d(n(5)),i=d(n(9)),o=d(n(10)),u=d(n(7)),l=d(n(11)),c=d(n(8));function d(e){return e&&e.__esModule?e:{default:e}}var f={Grid:i.default,ReactGrid:a.default,GridRow:r.default,GridColumn:s.default,Modal:o.default,ReactModal:u.default,TagsManager:l.default,ReactTagsDisplay:c.default};t.default=f}]);