import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const {createUser} =useContext(AuthContext)
    console.log(createUser);
    const handleSingUp = e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);

        createUser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .then(error=>{
            console.log(error);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left w-1/2 mr-5">
               <img src={img} alt="" />
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSingUp} className="card-body">
                <h1 className="text-3xl font-bold text-center">Sing Up</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value=" Sing Up" />
                    </div>
                </form>
                <p className='text-center mb-5'>You have an account <Link className='text-blue-600 font-bold' to='/Login'>Sing In</Link></p>
            </div>
        </div>
    </div>
    );
};

export default Register;