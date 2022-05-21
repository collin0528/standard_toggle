import React, { Component } from 'react';
import './DarkMode.css';
class DarkMode extends Component {
   constructor(props){
       super(props)
       this.props=props
   }
    render() { 
        return (
            <div className='cover'>
              <h3>fill in the registration form</h3>
              <form className='form-group'>
                  <input type='text' placeholder='firstName' className='form-control'/>
                  <input type='text' placeholder='surName' className='form-control'/>
                  <input type='email' placeholder='Email'className='form-control'/>
                  <input type='password' placeholder='password'className='form-control'/>

              </form>
              <h5 className="mt-2">Not registered? <strong onClick={() => this.props.loader('register')}>Register</strong> now</h5>
            </div>
        );
    }
}
 
export default DarkMode;