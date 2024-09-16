import './Register.css';
import { Link } from 'react-router-dom'



const Register = () => {
  return (
    <body className='body1'>
      <Link to="/"><img src="./public/logitopardo-10.png" alt="" className='img-login1' /></Link>
      <div className="wrapper1">
        <h2>Register</h2>
        <form >
          <div className='input-box1'>
            <input placeholder="User" type="text" required/>
          </div>
          <div className='input-box1'>
            <input placeholder="Email" type="text" required/>
          </div>
          <div className='input-box1'>
            <input placeholder="Password" type="text" required/>
          </div>
          <button type="submit" value="Login" className="btn1">Register</button> <br />
          <Link to='/login' className='link1'>¿Ya tiene una cuenta?</Link>

        </form>
      </div>
    </body>

  )
}

export default Register