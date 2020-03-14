import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

class InaccessiblePage extends Component {
    constructor(props) {
        super(props)
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
    componentDidMount = () => {
        console.log('componentDidMount')
    }
    render() {
        console.log(this.props)
        if (!this.state.countdownInitiated) {
            setTimeout(this.handleRedirectCounter, 1000)
        } else if (this.state.countdownNumb === 0) {
            let desiredURL
            if (this.props.location && this.props.location.state && this.props.location.state.desiredURL) {
                desiredURL = this.props.location.state.desiredURL
            }            
            return <Redirect to={{
                pathname: '/login',
                state: { desiredURL: desiredURL }
            }}
            />
        }
        return(
            <div>
                Inaccessible Page - Redirecting....{this.state.countdownNumb}
            </div>
        )
    }
   
}

export default InaccessiblePage