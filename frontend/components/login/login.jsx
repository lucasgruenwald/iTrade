import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    componentDidMount() {
        this.props.clearSessionErrors();
    }

    // componentWillUnmount() {
    //     this.props.clearSessionErrors();
    // }
    
    handleDemo(e) {
        e.preventDefault();
        const demoUser = { email: "iTradeDemoUser@gmail.com", password: "password"}
        this.props.login(demoUser)
    }

    handleInput(type) {
        return e => this.setState({ [type]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state).then(() => this.props.history.push("/dashboard"));
    }

    
    renderErrors() {
        if (Object.values(this.props.errors).length > 0) {
            return <div className="login-errors">{this.props.errors[0]}</div>
        } else {
            return null;
        }
    };

    render() {

  
        return (
            <div className="session-form">
                <img className='login-left' 
                    src="https://cdn.robinhood.com/assets/mobius_generated_assets/798d9c619b33d8eeee5f06c1b809cc06.jpg"
                    style={{width: "40%"}}
                />
                <div className='login-right'>
                <h2>Welcome to iTrade</h2>

                    <button onClick={this.handleDemo}>Demo User Login</button>

                    <form>
                      {/* {this.renderErrors()} */}
                    <label >Email

                    <input type="text"
                        value={this.state.email}
                        onChange={this.handleInput('email')} />
                    </label>

                    <label>Password

                        <input type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')} 
                        />
                    </label>

                    {this.renderErrors()}

                    <button className='sign-in' onClick={this.handleSubmit}>Sign In</button>
                    

                    </form> 
                    
                </div>
            </div>
        )
    }
}

export default Login;