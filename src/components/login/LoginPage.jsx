import './login.css';

function LoginPage({loginData, handleLogin, handleLoginSubmit}){
    return (
      <div className="form-container">
        <form className='login-form'>
            <h2>Login</h2>
          <div>
            <label>Phone Number</label><br/>
            <input 
              type="number" 
              name="phoneNumber" 
              onChange={handleLogin} 
              value={loginData.phoneNumber} 
              placeholder="0722 xxx xxx"
            />
          </div>
          <div>
            <label>Password</label><br/>
            <input 
              type="password" 
              onChange={handleLogin} 
              name='password' 
              value={loginData.password}
            />
          </div>
        <button type='submit' onClick={handleLoginSubmit} className='login-submit-btn'>Login</button>
        </form>
      </div>
    );
}

export default LoginPage;