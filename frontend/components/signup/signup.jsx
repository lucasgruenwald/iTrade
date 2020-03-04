import React from 'react';

class Signup extends React.Component {
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
                <img className='signup-left' src="https://images.squarespace-cdn.com/content/53fe4a70e4b0a2293ab0e42a/1409174396100-ZOPXZKUNVM31K4NZHVK0/Robinhood_Glyph_green.png?content-type=image%2Fpng" />
                <br/>
                <div className='signup-right'>
                    <h2>Make Your Money Move</h2>
                    <h3>Robinhood lets you invest in companies you love, commission-free.</h3>
                    <form>
                        <div id="signup-names">
                        <label>First name:
                            <input type="last-name"
                                value={this.state.username}
                                onChange={this.handleInput('username')} />
                        </label>
                        <label>Last Name
                            <input type="last-name"
                                value={this.state.username}
                                onChange={this.handleInput('username')} />
                        </label>
                        </div>
                        <label>Email
                        <br />
                            <input type="text"
                                value={this.state.username}
                                onChange={this.handleInput('username')} />
                        </label>
                        <br />
                        <label>Password
                            <input type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')} />
                            <button className='sign-up' onClick={this.handleSubmit}>Continue</button>
                        </label>
                        <p id="signup-demo">Want to use a demo account? Click here</p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup;