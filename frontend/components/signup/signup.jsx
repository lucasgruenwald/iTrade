import React from 'react';


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
            .then(() => this.props.history.push('/portfolio'));
    }

    render() {

        return (
            <div className="session-form">
                <img className='signup-left' src="https://images.squarespace-cdn.com/content/53fe4a70e4b0a2293ab0e42a/1409174396100-ZOPXZKUNVM31K4NZHVK0/Robinhood_Glyph_green.png?content-type=image%2Fpng" />
                <br/>
                <div className='signup-right'>
                    <h2>Make Your Money Move</h2>
                    <h3>iTrade lets you invest in companies you love, commission-free.</h3>
                    <form>
                        <div id="signup-names">
                        <label>
                            <input 
                                type="text"
                                placeholder={" First Name"}
                                value={this.state.firstName}
                                onChange={this.update('firstName')} 
                                required 
                                />
                        </label>
                        <label>
                            <input 
                                type="text"
                                placeholder={" Last Name"}
                                value={this.state.lastName}
                                onChange={this.update('lastName')}
                                required
                                />
                        </label>
                        </div>
                        <label>
                            <br/>
                            <input 
                                type="text"
                                placeholder={" Email address"}
                                value={this.state.email}
                                onChange={this.update('email')} 
                                />
                        </label>
                        <br />
                        <label>
                            <br/>
                            <input 
                                type="text"
                                placeholder={" Password - Minimum 8 characters"}
                                value={this.state.password}
                                onChange={this.update('password')} 
                                />
                        </label>
                        <br/>
                        <button className='sign-up' onClick={this.handleSubmit}>Continue</button>
                        <p id="signup-demo">Want to use a demo account? Click here</p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup;