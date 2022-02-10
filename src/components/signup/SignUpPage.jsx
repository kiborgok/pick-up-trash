import "./signup.css";
import {useState} from 'react'

function SignUpPage(){
    let initialstate = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
    }

    let [signUpData, setSignUpData] = useState(initialstate);

    let handleChange = (e) => {
        const {name, value} = e.target;
        setSignUpData({
            ...signUpData,
            [name]:value
        });
    }

    return (
      <section className="back">
          <form className="register-form">
            <h2>Signup Page</h2>
            <div className="form-inputs">
              <label htmlFor="firstName" className="form-label">
                First Name:
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                className="form-input"
                placeholder="First Name"
                value={signUpData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-inputs">
              <label htmlFor="lastName" className="form-label">
                Last Name:
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                className="form-input"
                placeholder="Last Name"
                value={signUpData.lastName}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-inputs">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <br />
              <input
                id="phoneNumber"
                type="number"
                name="phoneNumber"
                className="form-input"
                placeholder="0722 XXX XXX"
                value={signUpData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-inputs">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <br />
              <input
                id="password"
                type="password"
                name="password"
                className="form-input"
                placeholder="********"
                value={signUpData.password}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-inputs">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm password
              </label>
              <br />
              <input
                id="confirmPassword"
                type="confirmPassword"
                name="confirmPassword"
                className="form-input"
                placeholder="********"
                value={signUpData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-inputs">
              <button className="form-input-btn" type="submit" onClick={handleSubmit}>
                Sign Up
              </button>
            </div>
            <br />
            <span className="form-input-login">
              Already have an account?
              <button className="l-btn">
                <a href="/login">Login</a>
              </button>
            </span>
          </form>
      </section>
    );
}

export default SignUpPage;