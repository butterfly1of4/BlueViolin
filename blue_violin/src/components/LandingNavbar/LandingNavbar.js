import React, { Component } from 'react'
import "./LandingNavbar.css"

// React Class Component
class LandingNavbar extends Component {
    constructor(){
        super()

         this.state ={classlist:'LandingNavbar'}
    }


    render() {
        return (
            <div className={this.state.classList}>
        
            </div>
        )
    }
}

export default LandingNavbar

