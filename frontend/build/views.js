"use strict";function renderEmptyView(){React.render(React.createElement(EmptyView,{__source:{fileName:"../../../../../src/views-empty.jsx",lineNumber:11}}),document.getElementById("app"))}function renderLoginView(){React.render(React.createElement(LoginView,{__source:{fileName:"../../../../../src/views-login.jsx",lineNumber:85}}),document.getElementById("app"))}function renderUsersView(){React.render(React.createElement(UserDashboard,{__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:217}}),document.getElementById("app"))}var NavigationTop=React.createClass({displayName:"NavigationTop",handleLogout:function(e){e.preventDefault(),app.user.save({access_token:null}),app.navigate("/",{trigger:!0})},render:function(){for(var e=[{hash:"#users",text:"Users",className:""}],a=0;a<e.length;a++)$(location).attr("hash").indexOf(e[a].hash)>-1&&(e[a].className="active");return React.createElement("div",{className:"row",__source:{fileName:"../../../../../src/views-common.jsx",lineNumber:17}},React.createElement("ul",{className:"nav nav-tabs",__source:{fileName:"../../../../../src/views-common.jsx",lineNumber:18}},React.createElement("li",{role:"presentation",className:e[0].className,__source:{fileName:"../../../../../src/views-common.jsx",lineNumber:19}},React.createElement("a",{href:e[0].hash,__source:{fileName:"../../../../../src/views-common.jsx",lineNumber:19}},e[0].text)),React.createElement("li",{role:"presentation",__source:{fileName:"../../../../../src/views-common.jsx",lineNumber:20}},React.createElement("a",{href:"#",onClick:this.handleLogout,__source:{fileName:"../../../../../src/views-common.jsx",lineNumber:20}},"Logout"))),React.createElement("br",{__source:{fileName:"../../../../../src/views-common.jsx",lineNumber:22}}))}}),AlertView=React.createClass({displayName:"AlertView",render:function(){var e="alertView alert alert-dismissable";return e+=this.props.data.state?" alert-"+this.props.data.state:" hidden",React.createElement("div",{className:e,role:"alert",__source:{fileName:"../../../../../src/views-common.jsx",lineNumber:37}},React.createElement("button",{type:"button",className:"close","data-dismiss":"alert",__source:{fileName:"../../../../../src/views-common.jsx",lineNumber:38}},React.createElement("span",{"aria-hidden":"true",__source:{fileName:"../../../../../src/views-common.jsx",lineNumber:39}},"×"),React.createElement("span",{className:"sr-only",__source:{fileName:"../../../../../src/views-common.jsx",lineNumber:40}},"Close")),this.props.data.message)}}),ModalTrigger=React.createClass({displayName:"ModalTrigger",handleClick:function(e){e.preventDefault(),$(this.refs.payload.getDOMNode()).modal()},render:function(){return React.createElement("div",{onClick:this.handleClick,__source:{fileName:"../../../../../src/views-common.jsx",lineNumber:55}},this.props.trigger,React.createElement(Modal,{ref:"payload",content:this.props.content,htmlID:this.props.htmlID,__source:{fileName:"../../../../../src/views-common.jsx",lineNumber:57}}))}}),Modal=React.createClass({displayName:"Modal",componentDidMount:function(){$(this.getDOMNode()).modal({background:!0,keyboard:!0,show:!1})},componentWillUnmount:function(){$(this.getDOMNode()).off("hidden")},handleClick:function(e){e.stopPropagation()},render:function(){return React.createElement("div",{onClick:this.handleClick,className:"modal fade",role:"dialog","aria-hidden":"true",id:this.props.htmlID,__source:{fileName:"../../../../../src/views-common.jsx",lineNumber:82}},React.createElement("div",{className:"modal-dialog",__source:{fileName:"../../../../../src/views-common.jsx",lineNumber:83}},React.createElement("div",{className:"modal-content",__source:{fileName:"../../../../../src/views-common.jsx",lineNumber:84}},this.props.content)))}}),EmptyView=React.createClass({displayName:"EmptyView",render:function(){return React.createElement("div",{__source:{fileName:"../../../../../src/views-empty.jsx",lineNumber:4}})}}),LoginView=React.createClass({displayName:"LoginView",getInitialState:function(){return{alert:{state:null,message:null}}},onFormSubmit:function(e,a){this.setState({alert:{state:e,message:a}})},render:function(){return React.createElement("div",{className:"loginView",id:"form_signin",__source:{fileName:"../../../../../src/views-login.jsx",lineNumber:10}},React.createElement(LoginForm,{onFormSubmit:this.onFormSubmit,__source:{fileName:"../../../../../src/views-login.jsx",lineNumber:11}}),React.createElement(AlertView,{data:this.state.alert,__source:{fileName:"../../../../../src/views-login.jsx",lineNumber:12}}))}}),LoginForm=React.createClass({displayName:"LoginForm",getInitialState:function(){return{username:null,password:null,ajaxRunning:0}},inputChanged:function(e,a){var s={};s[e]=a.target.value,this.setState(s)},handleFormSubmit:function(e){e.preventDefault();var a=this;a.state.ajaxRunning||(a.setState({ajaxRunning:1}),$.ajax({type:"POST",url:app.Config.API_URI+"/o/token/",success:function(e){a.setState({ajaxRunning:0}),e=JSON.parse(e),"localStorage"in window&&null!==window.localStorage&&(localStorage["RDA_APP.user.at"]=e.access_token),app.user.save({access_token:e.access_token}),app.navigate("/users",{trigger:!0})},data:{grant_type:"password",client_id:app.Config.CLIENT_ID,client_secret:app.Config.CLIENT_SECRET,username:a.state.username,password:a.state.password},error:function(e){a.setState({ajaxRunning:0}),a.props.onFormSubmit("danger","Can't log in. Please check your password.")},dataType:"text"}))},render:function(){var e="",a="";return this.state.ajaxRunning&&(a="disabled",e='<span class="glyphicon glyphicon-refresh spinning"></span> '),React.createElement("form",{className:"loginForm form-signin row",onSubmit:this.handleFormSubmit,__source:{fileName:"../../../../../src/views-login.jsx",lineNumber:74}},React.createElement("input",{type:"text",className:"inputUsername form-control",id:"inputUsername",placeholder:"Username",onChange:this.inputChanged.bind(this,"username"),required:!0,autofocus:!0,__source:{fileName:"../../../../../src/views-login.jsx",lineNumber:75}}),React.createElement("input",{type:"password",className:"inputPassword form-control",id:"inputUsername",placeholder:"Password",onChange:this.inputChanged.bind(this,"password"),required:!0,autofocus:!0,__source:{fileName:"../../../../../src/views-login.jsx",lineNumber:76}}),React.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block",id:"loginButton",disabled:a,__source:{fileName:"../../../../../src/views-login.jsx",lineNumber:77}},React.createElement("span",{dangerouslySetInnerHTML:{__html:e},__source:{fileName:"../../../../../src/views-login.jsx",lineNumber:77}}),"Login"))}}),UserItem=React.createClass({displayName:"UserItem",deleteUser:function(e,a){if(a.preventDefault(),e==app.user.attributes.id)return void alert("You can't delete yourself");if(confirm("Are you sure? This cannot be undone.")){var s=this;s.setState({ajaxRunning:1}),$.ajax({type:"DELETE",url:app.Config.API_URI+"/api/R/users/"+e+"/",success:function(e){s.setState({ajaxRunning:0,data:e}),renderUsersView(),app.navigate("/refresh",{trigger:!0}),app.navigate("/users",{trigger:!0})},beforeSend:function(e,a){e.setRequestHeader("Authorization","Bearer "+app.user.attributes.access_token)},error:function(e){console.log(e),s.setState({ajaxRunning:0});var a="Error while deleting user.";e&&e.responseText&&(a=e.responseText),s.setState({alert:{state:"danger",message:a}})},dataType:"json"})}},render:function(){var e=this.props.data.username;return this.props.data.first_name&&this.props.data.last_name?e=this.props.data.first_name+" "+this.props.data.last_name:this.props.data.first_name&&(e=this.props.data.first_name),React.createElement("tr",{__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:51}},React.createElement("td",{__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:52}},React.createElement("span",{__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:53}},e)),React.createElement("td",{__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:55}},React.createElement("div",{className:"pull-right",__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:56}},React.createElement("a",{href:"#",onClick:this.deleteUser.bind(this,this.props.data.id),className:"btn btn-sm btn-danger",__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:57}},"Delete"))))}}),UserList=React.createClass({displayName:"UserList",render:function(){var e=this.props.data.map(function(e){return React.createElement(UserItem,{data:e,__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:69}})});return React.createElement("table",{className:"table table-striped",__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:73}},React.createElement("thead",{__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:74}},React.createElement("tr",{__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:75}},React.createElement("td",{__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:75}},"Users"))),React.createElement("tbody",{__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:77}},e))}}),UserDashboard=React.createClass({displayName:"UserDashboard",getInitialState:function(){return{data:[],alert:{state:null,message:null},ajaxRunning:0}},componentDidMount:function(){var e=this;e.setState({ajaxRunning:1}),$.ajax({type:"GET",url:app.Config.API_URI+"/api/R/users",success:function(a){e.setState({ajaxRunning:0,data:a})},data:{access_token:app.user.attributes.access_token},error:function(a){e.setState({ajaxRunning:0}),e.setState({alert:{state:"danger",message:"No access."}})},dataType:"json"})},render:function(){var e="";return this.state.ajaxRunning&&(e='<div class="well"><span class="glyphicon glyphicon-refresh spinning"></span></div>'),React.createElement("div",{__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:120}},React.createElement(AlertView,{data:this.state.alert,__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:121}}),React.createElement(NavigationTop,{__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:122}}),React.createElement(UserList,{data:this.state.data,__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:123}}),React.createElement(AddUserModal,{__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:124}}),React.createElement("span",{dangerouslySetInnerHTML:{__html:e},__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:125}}))}}),AddUserModal=React.createClass({displayName:"AddUserModal",getInitialState:function(){return{data:{},alert:{state:null,message:null},ajaxRunning:0}},inputChanged:function(e,a){var s=this.state.data;s[e]=a.target.value,this.setState(s)},handleFormSubmit:function(e){e.preventDefault();var a=this;a.setState({ajaxRunning:1}),$.ajax({type:"POST",url:app.Config.API_URI+"/api/R/users/",success:function(e){a.setState({ajaxRunning:0,data:e}),$("#addUserModal").modal("hide"),app.navigate("/refresh",{trigger:!0}),app.navigate("/users",{trigger:!0})},beforeSend:function(e,a){e.setRequestHeader("Authorization","Bearer "+app.user.attributes.access_token)},data:{username:a.state.data.username,email:a.state.data.email},error:function(e){console.log(e),a.setState({ajaxRunning:0});var s="Hiba a mentés során.";e&&e.responseText&&(s=e.responseText),a.setState({alert:{state:"danger",message:s}})},dataType:"json"})},render:function(){return React.createElement(ModalTrigger,{htmlID:"addUserModal",trigger:React.createElement("a",{className:"btn btn-danger",__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:185}},"New user"),content:React.createElement("form",{className:"form-horizontal",onSubmit:this.handleFormSubmit,__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:187}},React.createElement("div",{className:"modal-header",__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:188}},React.createElement("h3",{__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:188}},"New user")),React.createElement("div",{className:"modal-body col-sm-12",__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:189}},React.createElement(AlertView,{data:this.state.alert,__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:190}}),React.createElement("div",{className:"form-group",__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:191}},React.createElement("label",{"for":"username",className:"col-sm-2 control-label",__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:192}},"Username"),React.createElement("div",{className:"col-sm-10",__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:193}},React.createElement("input",{type:"text",className:"form-control",id:"name",placeholder:"Username",onChange:this.inputChanged.bind(this,"username"),__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:194}}))),React.createElement("div",{className:"form-group",__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:197}},React.createElement("label",{"for":"email",className:"col-sm-2 control-label",__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:198}},"E-mail"),React.createElement("div",{className:"col-sm-10",__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:199}},React.createElement("input",{type:"text",className:"form-control",id:"name",placeholder:"E-mail",onChange:this.inputChanged.bind(this,"email"),__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:200}})))),React.createElement("div",{className:"modal-footer",__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:204}},React.createElement("a",{className:"btn btn-default","data-dismiss":"modal",__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:205}},"Cancel"),React.createElement("button",{type:"submit",className:"btn btn-primary",__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:206}},"Add user"))),__source:{fileName:"../../../../../src/views-users.jsx",lineNumber:183}})}});
//# sourceMappingURL=views.js.map
