import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const [error, setError] = useState()

  const { signIn } = use(AuthContext);
  const location = useLocation()
  // console.log(location)
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password })
    signIn(email, password)
      .then(result => {
        const user = result.user;
        // console.log(user)
        navigate(`${location.state ? location.state : "/"}`)
        signIn()
      })
      .catch((error) => {

        const errorCode = error.code;
        setError(errorCode)
        // ..
      });
  }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-base-200'>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div
            className="card bg-base-100 shadow-2xl w-[500px] h-[500px] p-6 items-center"
          >
            <form onSubmit={handleLogin} className="card-body">
              <fieldset className="fieldset">
                <h1 className="text-3xl font-bold text-center mb-6">Login Now</h1>
                <label className="label">Email</label>
                <input name='email' type="email" className="input input-bordered w-[350px]" placeholder="Email" />
                <label className="label mt-4">Password</label>
                <input name='password' type="password" className="input input-bordered" placeholder="Password" />
                <div className="mt-2">
                  <a className="link link-hover text-sm">Forgot password?</a>
                </div>
                {
                  error && <p className='text-red-700'>{error}</p>
                }
                <button type='submit' className="btn btn-neutral w-full mt-6">Login</button>

                <Link to='/auth/register' className='mt-3 items-center'>Don't have an acoount <span className='text-secondary font-bold'>Register</span></Link>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
