import React from "react";
import './SignInSection.css'

const SignInSection = () => {

    return (
      <section className="signIn">
        <div className="wrapper_signIn">
          <div className="signIn_elements">
          <button className="signIn_buttonBackHome">Back to home</button>
            <h2 className="signIn_title">Sign In</h2>
            <div className="signIn_authorization_form">
                <label className="signIn_authorization_label_title">Email<span>*</span></label>
                <input type="email" className="signIn_authorization_input_text" placeholder="Enter your email"/>
                <label className="signIn_authorization_label_title">Password<span>*</span></label>
                <input type="password" className="signIn_authorization_input_text" placeholder="Enter your password"/>
                <button className="signIn_buttonForgot">Forgot password?</button>
                <button className="signIn_authorazation_buttonSignIn">Sign In</button>
                <div className="signIn_authorization_newAccount">
                    <p className="signIn_authorization_newAccount_text">Don't have an account?</p>
                    <button className="signIn_authorazation_buttonSignUp">Sign Up</button>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default SignInSection;