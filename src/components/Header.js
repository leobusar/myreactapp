import { Component } from 'react'

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            owner: "Leonardo", 
            friends: ["Alvaro", "Antonio", "Juliana"]
        }
    }
    
    componentDidMount(){
        this.setState({owner: "Carlos"});
    }

    render() {

        return (
            <div className="container">
                This is a {this.state.owner}'s component
                <br />
                { this.props.message }

            </div>
        )
    }
}
