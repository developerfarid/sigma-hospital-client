import React from 'react';
import { useForm } from 'react-hook-form';
import "../AdminLoginForm/AdminLoginForm.css";

const AdminSignUp = () => {
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2"></div>
                    <div className="col-lg-6 col-md-8 login-box">
                        <div className="col-lg-12 login-key">
                            <i className="fa fa-key" aria-hidden="true"></i>
                        </div>
                        <div className="col-lg-12 login-title">
                            ADMIN PANEL MEMBERS REGISTER
                        </div>
      
                            <div className="col-lg-12 login-for">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label className="form-control-label">Email Address</label>
                                        <input type="email" className="form-control" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">PASSWORD</label>
                                        <input type="password" className="form-control"  {...register("Password", {required: true})} />
                                    </div>

                                    <div className="col-lg-12 loginbttm">
                                        <div className="col-lg-6 login-btm login-text">
                                        </div>
                                        <div className="col-lg-6">
                                        <button type='submit' class="pure-button fuller-button blue">ACCEPT</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2"></div>
                    </div>
                </div>

   
            </div>
            );
};

export default AdminSignUp;