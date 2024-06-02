import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";



const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const navigate = useNavigate()

    const {createUser, updateUserProfile} = useContext(AuthContext)

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);

            updateUserProfile(data.name, data.photoUrl)
            .then(()=>{
                //create user entry in the database
                const userInfo = {
                    name: data.name,
                    email: data.email
                }
                axiosPublic.post('/users',userInfo)
                .then(res =>{
                    console.log('user added to the database');
                    if(res.data.insertedId){
                        reset();
                        Swal.fire({
                            title: "Profile Updated!",
                            text: "You clicked the button!",
                            icon: "success"
                          });
                          navigate('/')
                    }
                })  
            })
            .catch(error=> {
                console.log(error)
            })
        })
    }



    return (
        <>
         <Helmet>
                <title>Bistro Boss | SignUp</title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp now !</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: true })} name="name" type="text" placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoUrl</span>
                            </label>
                            <input {...register("photoUrl", { required: true })} type="text" placeholder="PhotoUrl" className="input input-bordered" />
                            {errors.photoUrl && <span className="text-red-600">photoUrl is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} name="email" type="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" {...register("password", { 
                                required: true, 
                                minLength: 6, 
                                maxLength: 20,
                                pattern: /(?=.*\d)(?=.*[!@#$%^&*_])(?=.*[a-z])(?=.*[A-Z])/,
                                 })} type="password" placeholder="password" className="input input-bordered" />

                            {errors.password?.type === "required" && (
                                <p className="text-red-600">Password required</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className="text-red-600">Password Must be Six</p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className="text-red-600">Password Must be Under Twenty</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className="text-red-600">Password Must one uppercase, one lowercase, one number, one special character</p>
                            )}

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                            
                        </div>
                    </form>
                    <p className="text-center py-4"><small>Already have an account Here? <Link to="/login">Login</Link> </small></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
        </>
    );
};

export default SignUp;