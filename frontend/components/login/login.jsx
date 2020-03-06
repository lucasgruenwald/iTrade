import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return e => this.setState({ [type]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state).then(() => this.props.history.push("/dashboard"));
    }

    render() {
  
        return (
            <div className="session-form">
                <img className='login-left' src="https://cdn.robinhood.com/assets/generated_assets/94977d34f99015525dcd0fc9987fcbe6.png" />
                <div className='login-right'>
                <h2>Welcome to iTrade</h2>
                <form>
                    <label>Email
                        <br/>
                    <input type="text"
                        value={this.state.username}
                        onChange={this.handleInput('username')} />
                    </label>
                    <br/>
                    <label>Password
                        <br/>
                        <input type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')} 
                        />
                        <p>Forgot your password?</p>
                        <p>Demo User Login</p>
                        <br/>
                        <button className='sign-in' onClick={this.handleSubmit}>Sign In</button>
                    </label>
                </form> 
                </div>
            </div>
        )
    }
}

export default Login;