import React from 'react'
import { loginUser } from '../redux/actions/userActions'
import { connect } from 'react-redux'

class SignIn extends React.Component {

        state = {
            username: '',
            password: ''
        };

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.loginUser(this.state);
        this.setState({
            username: '',
            password: ''
        });      
    };

    render() {
        return (
            <div>
                <h1> Please Sign In: </h1>
                    <form onSubmit={this.handleSubmit}>
                        Username:{" "}
                        <input
                            id="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            name="username"
                            type="text" 
                        />
                        Password:{" "}
                        <input
                            id="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name="password"
                            type="password" 
                        />
                        <input type="submit" value="Sign In" />
                    </form>
            </div>
        );
    }
}

export default connect(null, { loginUser })(SignIn);