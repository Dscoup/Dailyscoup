import React, { PureComponent } from 'react';
import { withRouter } from "react-router-dom";



class Register extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    // This binding is necessary to make `this` work in the callback

    this.renderLogin = this.renderLogin.bind(this);
    this.renderAuth = this.renderAuth.bind(this);

  }

  renderLogin() {
    // window.location = '/';
    this.props.history.push("/");
    // this.props.history.push("/register");
    // history.push('/register');
    // this.context.router.history.push('/register');
  }
  renderAuth() {
    window.location = '/authentication';
  }
  render() {
    return (
      <div>
        <div id="iconGroup">
          <Facebook />

        </div>
        <div id="loginform">

          <div>

            <FormInput placeholder="First Name" type="text" />
            <FormInput placeholder="Last Name" type="text" />
            <FormInput placeholder="Email" type="email" />
            <FormInput placeholder="Password" type="password" />
            {/* <FormButton onClick={this.renderAuth} title="SIGN UP" /> */}
            <div id="button" class="row">
              <button onClick={this.renderAuth}>SIGN UP</button>
            </div>
          </div>
          <div id="alternativeLogin">
            <label onClick={this.renderLogin}>Already Have a account? Sign In</label>

          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Register)


const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder} />
  </div>
);
const Facebook = props => (
  <a href="#" id="facebookIcon" />
);



