import React, {Component} from "react";
import moment             from "moment";

class ChildComponent extends Component{
    constructor(props) {
        super(props);
        this.state={
          time:moment({'minute': 0,'second': 0,'hour': 0}),
            isRun:false
        };

        console.log('Child component costructor');
    }
    componentWillUnmount() {
        console.log("Child component Unmount");

    }
    componentDidMount() {
        console.log("Child component Mount");
        clearInterval(this.timerID);
    }
    startTimer=()=>{
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Child component Did Update");
    }
    tick=()=>{
      this.setState({
          time:moment(this.state.time).add(1,"s")})
    };
    onStopClick=()=>{
        this.setState({
            time:moment().set({'minute': 0,'second': 0,'hour': 0})
        })
    };

    render() {
        console.log('Child component render');
        return(<div>
                <h1>HH:MM:SS</h1>
            <h1>{this.state.time.format("HH:mm:ss")}</h1>
                <button onClick={this.startTimer}>start</button>
                <button onClick={()=>{
                    clearInterval(this.timerID);
                    this.timerID=null;
                }}>pause</button>
                <button onClick={this.onStopClick}>Reset</button>
            </div>
        )
    }

}
export default ChildComponent