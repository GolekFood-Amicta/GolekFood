import React from "react";
import { Link } from "react-router-dom";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
        this.onPasswordChangeEventHandler = this.onPasswordChangeEventHandler.bind(this);
    }

    onEmailChangeEventHandler(event) {
        this.setState(() => {
            return {
                email: event.target.value,
            }
        })
    }

    onPasswordChangeEventHandler(event) {
        this.setState(() => {
            return {
                password: event.target.value,
            }
        })
    }

    render() {
        return (
            <div className="flex" >
                <div className="w-full">
                    <div className="fixed bg-black w-2/5 h-5/6 mt-16 ml-16 rounded-xl" />
                    <div className="fixed bg-GF-grey w-2/5 h-5/6 mt-8 ml-8 rounded-xl" />
                </div>
                <div className="w-full">
                    <div className="flex justify-end">
                        <img src={require('../../assets/logo.png')} alt="logo" className="w-32" />
                    </div>
                    <div className="w-11/12 text-GF-soft-green">
                        <p className="text-2xl font-medium mb-4">Welcome to <span className="font-bold">GolekFoods</span>, <br />Sign In to Continue </p>
                        <p className="text-sm font-medium">Don’t have an account? <Link to={"/SignUp"}><span className="underline hover:font-semibold hover:text-GF-green">Create an Account</span></Link> <br /> It takes less than a minute.</p>
                        <div className="h-16" />
                        <p className="text-sm font-medium mb-2">Email</p>
                        <input type="email" value={this.state.email} onChange={this.onEmailChangeEventHandler} className="border-2 border-GF-soft-green p-2 rounded-xl w-full" />
                        <div className="h-8" />
                        <p className="text-sm font-medium mb-2">Password</p>
                        <input type="password" value={this.state.password} onChange={this.onPasswordChangeEventHandler} className="border-2 border-GF-soft-green p-2 rounded-xl w-full" />
                        <div className="h-8" />
                        <div className="flex justify-between">
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" className="accent-GF-soft-green w-5 h-5 border-2 border-GF-soft-green rounded-xl focus:outline-none hover:border-GF-soft-green hover:ring-2 hover:ring-GF-soft-green" />
                                <span className="text-xs font-normal">Remember me</span>
                            </div>
                            <a href="#" className="text-xs hover:font-medium hover:text-GF-green">Forgot Password?</a>
                        </div>
                        <div className="h-8" />
                        <button className="w-full bg-GF-soft-green text-white py-4 rounded-xl hover:bg-GF-green">Sign In</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;