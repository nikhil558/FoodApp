import React from "react"
import UserClass from "./UserClass"

class About extends React.Component{
    constructor(props){
        super(props)
        // console.log("parent constructor")
    }

    componentDidMount(){
        // console.log("parent component did mount")
    }

    componentDidUpdate(){
        // console.log("parent component will update")
    }
    
    render(){
        // console.log("parent Render")
        return (
            <div>
                <h1>Food Application</h1>
                <h2>This is food application designed for online food ordering</h2>
                <UserClass name="Nikhil" contact="119"/>
                <UserClass name="Akhil" contact="102"/>
            </div>
        )
    }
}

export default About