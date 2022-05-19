import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
    // firebase authentication
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, upError] = useUpdateProfile(auth);

    // react hook from
    const { register, formState: { errors }, handleSubmit } = useForm();



    const navigate = useNavigate();

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.jkonoText });
    };

    if (gUser || user) {
        navigate('/appointment')
    }
    let signError;
    if (gError || error || upError) {
        signError = <p className='text-red-700'>{gError?.message || error?.message || upError?.message}</p>
    }
    if (loading || gLoading || updating) {
        return <button className='btn loading'>Loading</button>
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl px-4 py-4">
                <div className="card-body">
                    <h2 className="card-title mx-auto">Sign Up</h2>
                    {signError}
                    {/* <p className='text-2xl text-red-500 font-bold'>{signError}</p> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* daisy ui form */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name please" className="input input-bordered w-full max-w-xs"
                                {...register("jkonoText", {
                                    maxLength: {
                                        value: 15,
                                        message: 'enter max 15 letters' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.jkonoText?.type === 'maxLength' && <span className="label-text-alt text-red-500 font-semibold">{errors.jkonoText.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "errror message"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 font-semibold">{errors.email.message}</span>}

                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 font-semibold">{errors.email.message}</span>}
                            </label>

                            {/* -------password */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="your password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'password is required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: '6 character password' // JS only: <p>error message</p> TS only support string
                                        }
                                    })}
                                />


                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 font-semibold">{errors.password.message}</span>}

                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500 font-semibold">{errors.password.message}</span>}

                                </label>
                            </div>
                            <input type="submit" className='btn w-full text-white max-w-xs' value='signup' />
                        </div>
                    </form>
                    <small>Already have an account <Link to='/login' className='text-secondary font-semibold '>Login</Link></small>
                </div>
                <div className="divider">OR</div>
                <button className="btn btn-outline" onClick={() => signInWithGoogle()}>Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;