import React , { Component} from "react";

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: "Welcome guests",
        }
    }
    
    change(){
        this.setState({
            message: 'Thank You '
        })
    }
    render(){
        return(
            <div>

                <h1>{this.state.message}</h1>
                <button onClick={() => this.change()}>sabaskarybe</button>
            </div>
            )
    }
}



export default Message