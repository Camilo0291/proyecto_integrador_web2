import './Login.css';

import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <body className='body1'>
      <Link to="/"><img src="./public/logitopardo-10.png" alt="" className='img-login' /></Link>
      <div className="wrapper">
        <h2>Login</h2>
        <form className="loginForm">
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="register-link">
            <p className='link'>Don’t have an account? <Link to='/register' className='link'>Register</Link></p>
          </div>
        </form>
        <div className="back-to-top">
          <Link to='/' className='link'>Back to top</Link>
        </div>
      </div>
    </body>

  );
};

export default Login;
