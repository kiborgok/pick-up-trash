import "./signup.css";
import {useNavigate } from 'react-router-dom';

function SignUpPage({handleChange, handleSubmit, signUpData}){
    let navigate = useNavigate()
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
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <br />
              <input
                id="location"
                type="text"
                name="location"
                className="form-input"
                placeholder="Location"
                value={signUpData.location}
                onChange={handleChange}
              />
            </div>
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
                type="password"
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
              <button className="l-btn" onClick={() => navigate("/login")}>
                Login
              </button>
            </span>
          </form>
      </section>
    );
}

export default SignUpPage;