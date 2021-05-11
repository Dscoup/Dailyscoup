import React, { PureComponent } from 'react';
import './login.css';
import { withRouter } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        // This binding is necessary to make `this` work in the callback

        this.renderRegister = this.renderRegister.bind(this);
        this.renderAuth = this.renderAuth.bind(this);

    }


    renderAuth() {
        this.props.history.push('/home');
    }

    renderRegister() {
        this.props.history.push('/register');
    }
    render() {
        return (
            <div>

                <div id="iconGroup">
                    <Facebook />

                </div>
                <div id="loginform">

                    <FormInput placeholder="Email" type="email" />
                    <FormInput placeholder="Password" type="password" />
                    <div id="button" class="row">
                        <button onClick={this.renderAuth}>SIGN IN</button>
                    </div>
                    <div id="alternativeLogin">
                        <label onClick={this.renderRegister}>Need to register ? Sign Up</label>

                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Login)





const FormInput = props => (
    <div class="row">
        <label>{props.description}</label>
        <input type={props.type} placeholder={props.placeholder} />
    </div>
);



const Facebook = props => (
    <a href="#" id="facebookIcon"></a>
);

