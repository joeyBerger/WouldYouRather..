import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

class InaccessiblePage extends Component {
    constructor() {
        super()
        this.state = {
            countdownNumb : 3,
            countdownInitiated : false
        }
    }
    handleRedirectCounter = () => {
        if (this.state.countdownNumb > 0) {
            this.setState((cS) => ({
                countdownNumb : cS.countdownNumb-1,
                countdownInitiated : true
            })) 
            setTimeout(this.handleRedirectCounter, 1000)
        } 
    }
    render() {
        if (!this.state.countdownInitiated) {
            setTimeout(this.handleRedirectCounter, 1000)
        } else if (this.state.countdownNumb === 0) {
            return <Redirect to='/login' />
        }
        return(
            <div>
                Inaccessible Page - Redirecting....{this.state.countdownNumb}
            </div>
        )
    }
   
}

export default InaccessiblePage