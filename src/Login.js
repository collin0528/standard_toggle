import React, { Component } from 'react';
class Login extends Component {
    constructor(){
        super()
    } 
    render() { 
        return (
            <div className='cover'>
          <h3>login your account</h3>
          <form className='form-group'>
              <input type='email' placeholder='Email'className='form-control'/>
              <input type='password' placeholder='password'className='form-control'/>

          </form>
          <h5 className="mt-2">Already registered? <strong onClick={() => this.props.loader('login')}>Log in</strong> now</h5>
        </div>
        );
    }
}
 
export default Login;