import './login.css';

function LoginPage(){
    return (
      <div className="form-container">
        <form>
            <h2>Login</h2>
          <div>
            <label>Phone Number</label><br/>
            <input type="text" placeholder="0722 xxx xxx"/>
          </div>
          <div>
            <label>Password</label><br/>
            <input type="password" />
          </div>
        <button type='submit' className='login-submit-btn'>Login</button>
        </form>
      </div>
    );
}

export default LoginPage;