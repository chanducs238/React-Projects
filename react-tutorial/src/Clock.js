import { Component } from "react";

class Clock extends Component{
state = {
    date: new Date(),
}

    render(){
        return (
            <div>
                <h1>Hello React Clock!</h1>
                <h2>it's {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock;