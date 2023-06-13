import React from "react";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
        this.onPasswordChangeEventHandler = this.onPasswordChangeEventHandler.bind(this);
        this.onConfirmPasswordChangeEventHandler = this.onConfirmPasswordChangeEventHandler.bind(this);
    }

    onNameChangeEventHandler(event) {
        this.setState(() => {
            return {
                name: event.target.value,
            }
        })
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

    onConfirmPasswordChangeEventHandler(event) {
        this.setState(() => {
            return {
                confirmPassword: event.target.value,
            }
        })
    }

    render() {
        return (
            <div className="flex">
                <div className="w-full">
                    <div className="fixed bg-black w-2/5 h-5/6 mt-16 ml-16 rounded-xl" />
                    <div className="fixed bg-GF-grey w-2/5 h-5/6 mt-8 ml-8 rounded-xl" />
                </div>
                <div className="w-full">
                    <div className="flex justify-end">
                        <img src={require('../../assets/logo.png')} alt="logo" className="w-32" />
                    </div>
                    <div className="w-11/12 text-GF-soft-green">
                        <p className="text-2xl font-medium mb-4">Welcome to <span className="font-bold">GolekFoods</span>, <br />Sign Up to Continue </p>
                        <p className="text-sm font-medium">Get started on your journey to better health with GolekFoods.</p>
                        <div className="h-16" />

                        <p className="text-sm font-medium mb-2">Name</p>
                        <input type="text" value={this.state.name} onChange={this.onNameChangeEventHandler} className="border-2 border-GF-soft-green p-2 rounded-xl w-full" />
                        <div className="h-8" />

                        <p className="text-sm font-medium mb-2">Email</p>
                        <input type="email" value={this.state.email} onChange={this.onEmailChangeEventHandler} className="border-2 border-GF-soft-green p-2 rounded-xl w-full" />
                        <div className="h-8" />

                        <p className="text-sm font-medium mb-2">Password</p>
                        <input type="password" value={this.state.password} onChange={this.onPasswordChangeEventHandler} className="border-2 border-GF-soft-green p-2 rounded-xl w-full" />
                        <div className="h-8" />

                        <p className="text-sm font-medium mb-2">Confirm Password</p>
                        <input type="password" value={this.state.confirmPassword} onChange={this.onConfirmPasswordChangeEventHandler} className="border-2 border-GF-soft-green p-2 rounded-xl w-full" />
                        <div className="h-8" />

                        <button className="w-full bg-GF-soft-green text-white py-4 rounded-xl hover:bg-GF-green">Sign Up</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;