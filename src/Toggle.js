import React, { Component } from 'react';
import './Toggle.css';
class Toggle extends Component {
    constructor(){
        super()
    }
    render() { 
        return (
            <div className='covertoggle'>
                <div className='white' onClick={()=> this.props.changeTheme('danger')}>Dark</div>
                <div className='black' onClick={()=> this.props.changeTheme('dark')}>Light</div>
            </div>
        );
    }
}
 
export default Toggle;