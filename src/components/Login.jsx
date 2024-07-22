import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
     
        localStorage.setItem('loginData', JSON.stringify(data));
        navigate("/");
        
    };

    return (
        <div className="form-popup">
            <div className="form-box login">
                <div className="form-details">
                    <h2>Welcome Back</h2>
                </div>
                <div className="form-content">
                    <h2>LOGIN</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-field">
                            <input 
                                type="text" 
                                {...register('email', { 
                                    required: 'Email is required', 
                                    pattern: { 
                                        value: /^\S+@\S+$/i, 
                                        message: 'Invalid email format' 
                                    } 
                                })} 
                            />
                            <label>Email</label>
                            {errors.email && <p className="error-message">{errors.email.message}</p>}
                        </div>
                        <div className="input-field">
                            <input 
                                type="password" 
                                {...register('password', { required: 'Password is required' })} 
                            />
                            <label>Password</label>
                            {errors.password && <p className="error-message">{errors.password.message}</p>}
                        </div>
                        <a href="#" className="forgot-pass-link">Forgot password?</a>
                        <button type="submit">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
