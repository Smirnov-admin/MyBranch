import React from "react";
import './SuccessSection.css'

const SuccessSection = () => {

    return (
        <section className="success">
            <div className="wrapper_success">
                <div className="success_elements">
                    <button className="success_buttonBackHome">Back to home</button>
                    <h2 className="success_title">Success</h2>
                    <div className="success_authorization">
                        <p className="success_authorization_title">Login successful</p>
                        <p className="success_authorization_text">You can now log in your personal account</p>
                        <button className="success_authorazation_buttonGoHome">Go to home</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SuccessSection;