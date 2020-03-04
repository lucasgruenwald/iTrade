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
 

    }

    handleSubmit(e) {


    }

    render() {
  
        return (
            <div className="session-form">
                <img className='login-left' src="https://cdn.robinhood.com/assets/generated_assets/94977d34f99015525dcd0fc9987fcbe6.png" />
                <div className='login-right'>
                <h2>Welcome to Robinhood</h2>
                <form>
                    <label>Username:
                    <input type="text"
                        value={this.state.username}
                        onChange={this.handleInput('username')} />
                    </label>
                    <br/>
                    <label>Password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')} />
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