import React, { Component } from 'react';
import "./App.css";
import DarkMode from './DarkMode';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import Footer from './Footer';
import Toggle from './Toggle';
class App extends Component {
 constructor(){
   super()
   
   this.state={
     default_page: localStorage.getItem("current-page"),
     backgroundColor: localStorage.getItem('themer')
   }
 }

 changeTheme = (theme) => {
  let background_color
  if(theme == "dark"){
    background_color = 'black';
    this.setState({
      backgroundColor:background_color
     

    })
  }

  if(theme == "danger"){
    background_color = 'white';
    this.setState({
      backgroundColor:background_color
     

    })
  }
  localStorage.setItem('themer',background_color)
}

loadPage = (pagename) =>{
  // this.setState({
  //   default_page: pagename
  // })
  if(pagename === "register"){
    this.setState({
      default_page: 'register'
    })
  }else{
    this.setState({
      default_page: 'login'
    })

  }
  localStorage.setItem("current-page", pagename);
}
 
  render() {

    let current_page = this.state.default_page

    let displayPage;
    if(current_page == "login"){
        displayPage = <DarkMode changeTheme={this.changeTheme} loader={this.loadPage} />
    }else{
      displayPage = <Login changeTheme={this.changeTheme} loader={this.loadPage} />
    }
   
    return (
      <div style={{backgroundColor: this.state.backgroundColor}}>
         <Toggle changeTheme={this.changeTheme} />
           {displayPage}
           <Footer />
      </div>
    );
  }
}
 
export default App;