import './Login.css';

import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <body className='body1'>
      <Link to="/"><img src="./public/logitopardo-10.png" alt="" className='img-login' /></Link>
      <div className="wrapper">
        <h2>Login</h2>
        <form >
          <div className="input-box">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" value="Login" className="btn">Login</button>
            <p className='link'>Don’t have an account? <Link to='/register' className='link'>Register</Link></p>

        </form>
        <div className="back-to-top">
          <Link to='/' className='link'>Back to top</Link>
        </div>
      </div>
    </body>

  );
};

export default Login;
