import React from "react"
import { CommonInfo } from "../../utils/CommonInfo"
import User from "./User"


class UserClass extends React.Component{
    constructor(props){
        super(props)
        // console.log("constructer "+ this.props.name)
    }

    componentDidMount(){
        // console.log("componentDidMount "+this.props.name)
    }

    componentDidUpdate(){
        // console.log("component will update "+ this.props.name)
    }

    render(){
        // console.log("render "+this.props.name)
        return (
            <div>
                <CommonInfo.Consumer>
                    {({profileName})=><h1>{profileName}</h1>}
                </CommonInfo.Consumer>
                
                <p>{this.props.contact}</p>
                <div>
                    <User/>
                </div>
            </div>
           
        )
    }
}

export default UserClass