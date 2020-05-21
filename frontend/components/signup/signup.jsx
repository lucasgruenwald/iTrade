import React from 'react';


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  // componentDidMount() {
  //   this.props.clearSessionErrors();
  // }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = { email: "iTradeDemoUser@gmail.com", password: "password" }
    this.props.login(demoUser)
  }

  handleSubmit(e) {
    e.preventDefault();
    const newUser = Object.assign({}, this.state);
    this.props.signup(newUser)
      .then(() => this.props.history.push("/first-signup"));
  }


  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }


  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, idx) => (
  //         <li className="session-error" key={`error-${idx}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }


  render() {

    return (
      <div className="session-form">
        <img
          className="signup-left"
          src="https://images.squarespace-cdn.com/content/53fe4a70e4b0a2293ab0e42a/1409174396100-ZOPXZKUNVM31K4NZHVK0/Robinhood_Glyph_green.png?content-type=image%2Fpng"
        />
        <br />
        <div className="signup-right">
          <h2>Make Your Money Move</h2>
          <h3>
             You'll start with a few free stocks and $100,000 in pseudo cash!
          </h3>
          <div className="flex">
            <button onClick={this.handleDemo} className="signup-demo">Demo User Login</button>

            <div id="signup-demo">
              <p>Have an existing account? &nbsp; </p>
              <a href="/#/login" id="click-here">Click Here</a>
            </div>
          </div>

          <form>
            <div id="signup-names">
              <label>
                <input
                  type="text"
                  placeholder={" First Name"}
                  value={this.state.first_name}
                  onChange={this.update("first_name")}
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  placeholder={" Last Name"}
                  value={this.state.last_name}
                  onChange={this.update("last_name")}
                  required
                />
              </label>
            </div>
            <label>
              <br />
              <input
                type="text"
                placeholder={" Email address"}
                value={this.state.email}
                onChange={this.update("email")}
                required
              />
            </label>
            <br />
            <label>
              <br />
              <input
                type="password"
                placeholder={" Password - Minimum 8 characters"}
                value={this.state.password}
                onChange={this.update("password")}
              />
            </label>
            <br />
            <button className="sign-up" onClick={this.handleSubmit}>
              Continue
            </button>
            {/* {this.renderErrors()} */}
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;