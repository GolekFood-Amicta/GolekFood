import React from "react";
import Logo from "../Logo";
import vector from '../../assets/vector/vector-signup.svg';

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
                <div className="w-1/2">
                    <img src={vector} alt="vector" className="fixed w-2/5 m-8" />
                </div>
                <div className="w-1/2 pr-8">
                    <div className="text-right mt-8 mb-8">
                        <Logo />
                    </div>
                    <div>
                        <p className="text-2xl font-medium mt-16 mb-4">Welcome to <span className="font-bold">GolekFoods</span>, <br />Sign Up to Continue </p>
                        <p className="text-sm font-medium">Get started on your journey to better health with GolekFoods.</p>
                        <div className="h-16" />

                        <p className="text-sm font-medium mb-2">Name</p>
                        <input type="text" value={this.state.name} onChange={this.onNameChangeEventHandler} className="border-2 border-black p-2 rounded-xl w-full" />
                        <div className="h-8" />

                        <p className="text-sm font-medium mb-2">Email</p>
                        <input type="email" value={this.state.email} onChange={this.onEmailChangeEventHandler} className="border-2 border-black p-2 rounded-xl w-full" />
                        <div className="h-8" />

                        <p className="text-sm font-medium mb-2">Password</p>
                        <input type="password" value={this.state.password} onChange={this.onPasswordChangeEventHandler} className="border-2 border-black p-2 rounded-xl w-full" />
                        <div className="h-8" />

                        <p className="text-sm font-medium mb-2">Confirm Password</p>
                        <input type="password" value={this.state.confirmPassword} onChange={this.onConfirmPasswordChangeEventHandler} className="border-2 border-black p-2 rounded-xl w-full" />
                        <div className="h-8" />

                        <button className="w-full mb-16 bg-GF-green text-white py-4 rounded-xl hover:bg-GF-green">Sign Up</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;