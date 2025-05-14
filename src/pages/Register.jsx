import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';


const Register = () => {

  const { createUser, setUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photoUrl.value;
    const pass = form.password.value;
    // console.log({ name, email, photo, pass });
    createUser(email, pass)
      .then(result => {
        const user = result.user;
        console.log(user)
        setUser()
      })
      .catch((error) => {
    
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
      });
  }




  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-base-200'>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div
            className="card bg-base-100 shadow-2xl w-[500px] h-[600px] p-6 items-center"
          >
            <form onSubmit={handleRegister} className="card-body">
              <fieldset className="fieldset">
                <h1 className="text-3xl font-bold text-center mb-6">Register Now</h1>
                {/* Name */}
                <label className="label">Name</label>
                <input name='name' type="text" className="input input-bordered w-[350px]" placeholder="Name" required />
                {/* Photo Url */}
                <label className="label">Upload a photo </label>
                <input name='photoUrl' type="text" className="input input-bordered w-[350px]" placeholder="Photo URL" required />
                {/* Email */}
                <label className="label">Email</label>
                <input name='email' type="email" className="input input-bordered w-[350px]" placeholder="Email" required />
                {/* Password */}
                <label className="label mt-4">Password</label>
                <input name='password' type="password" className="input input-bordered" placeholder="Password" required />

                <button type='submit' className="btn btn-neutral w-full mt-6">Register</button>

                <Link to='/auth/login' className='mt-3 items-center'>Already have an account  <span className='text-secondary font-bold underline'>Login</span></Link>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register; <h1>Register</h1>