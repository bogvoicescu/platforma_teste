import React, { Component } from 'react';

class ApiUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded: false,
        }
    }
    componentDidMount(){
        fetch('https://devinopolitist-grile.ro/wp-json/wp/v2/users')
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                isLoaded:true,
                items: json,
            })
        })
    }
    render() {

        var {isLoaded, items} = this.state;
        if(!isLoaded){
            return(
                <h1>Loading...</h1>
            )
        }else{

        }
        return (
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name} | {item.id}</li>
                ))}
            </ul>
        );
    }
}

export default ApiUser;