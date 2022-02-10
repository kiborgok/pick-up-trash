import "./signup.css";

function SignUpPage(){
    return (
      <section className="back">
          <form className="register-form">
            <h2>Signup Page</h2>
            <div className="form-inputs">
              <label htmlFor="username" className="form-label">
                First Name:
              </label>
              <input
                id="username"
                type="text"
                name="username"
                className="form-input"
                placeholder="First Name"
              />
            </div>
            <div className="form-inputs">
              <label htmlFor="username" className="form-label">
                Last Name:
              </label>
              <input
                id="username"
                type="text"
                name="username"
                className="form-input"
                placeholder="Second Name"
              />
            </div>
            <br />
            <div className="form-inputs">
              <label htmlFor="number" className="form-label">
                Phone Number
              </label>
              <br />
              <input
                id="number"
                type="number"
                name="number"
                className="form-input"
                placeholder="0722 XXX XXX"
              />
            </div>
            <br />
            <div className="form-inputs">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <br />
              <input
                id="password"
                type="password"
                name="password"
                className="form-input"
                placeholder="********"
              />
            </div>
            <br />
            <div className="form-inputs">
              <label htmlFor="password2" className="form-label">
                Confirm password
              </label>
              <br />
              <input
                id="password2"
                type="password"
                name="password2"
                className="form-input"
                placeholder="********"
              />
            </div>
            <br />
            <div className="form-inputs">
              <button className="form-input-btn" type="submit">
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