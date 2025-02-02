import React from "react"
import User from "./User"

class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log("constructer "+ this.props.name)
    }

    componentDidMount(){
        console.log("componentDidMount "+this.props.name)
    }

    componentDidUpdate(){
        console.log("component will update "+ this.props.name)
    }

    render(){
        console.log("render "+this.props.name)
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.contact}</p>
                <div>
                    <User/>
                </div>
            </div>
           
        )
    }
}

export default UserClass