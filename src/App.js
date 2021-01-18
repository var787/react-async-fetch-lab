import React from 'react'

export default class App extends React.Component{
    constructor(){
        super()
        this.state = {
            people: []
        }
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(peopleData =>(
                this.setState({
                    people: peopleData
                })
            ))
            
        }
    
    
    render(){
        return (
        <div>
            <li>Hello</li>
        </div>
        )
    }
}