import React from "react";
import { Link, Navigate } from "react-router-dom";
import Logo from "../Logo";
import api from "../../api/api";
import vector from '../../assets/vector/vector-signin.svg';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: ''
        }

        this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
        this.onPasswordChangeEventHandler = this.onPasswordChangeEventHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    async handleSubmit(event) {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            const response = await api.post('login', {
                email,
                password
            });

            localStorage.setItem('token', response.data.data.access_token);
            localStorage.setItem('user_id', response.data.data.user.id);
            console.log('Berhasil login', response.data);

            this.setState({
                email: '',
                password: '',
                error: ''
            })
        } catch (error) {
            this.setState({ error: 'Login gagal.' });
            console.log(error);
        }

        event.stopPropagation();
    }

    render() {
        return (
            <div className="flex" >
                <div className="w-1/2">
                    <img src={vector} alt="vector" className="fixed w-2/5 m-8" />
                </div>
                <div className="w-1/2 pr-8">
                    <div className="text-right mt-8 mb-8">
                        <Logo />
                    </div>
                    <div>
                        <p className="text-2xl font-medium mt-16 mb-4">Welcome to <span className="font-bold">GolekFoods</span>, <br />Sign In to Continue </p>
                        <p className="text-sm font-medium">Don’t have an account? <Link to={"/SignUp"}><span className="underline hover:font-semibold hover:text-GF-green">Create an Account</span></Link> <br /> It takes less than a minute.</p>
                        <div className="h-16" />
                        <form onSubmit={this.handleSubmit}>
                            <label className="text-sm font-medium mb-2">
                                Email
                                <input type="email" value={this.state.email} onChange={this.onEmailChangeEventHandler} className="border-2 border-black p-2 rounded-xl w-full" />
                            </label>
                            <div className="h-8" />
                            <label className="text-sm font-medium mb-2">
                                Password
                                <input type="password" value={this.state.password} onChange={this.onPasswordChangeEventHandler} className="border-2 border-black p-2 rounded-xl w-full" />
                            </label>
                            <div className="flex justify-between mt-8 mb-8">
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" className="accent-GF-green w-5 h-5 border-2 border-GF-green rounded-xl focus:outline-none hover:border-GF-green hover:ring-2 hover:ring-GF-green" />
                                    <span className="text-xs font-normal">Remember me</span>
                                </div>
                                <Link className="text-xs hover:font-medium hover:text-GF-green">Forgot Password?</Link>
                            </div>
                            <button className="w-full h-14 mb-16 bg-GF-green text-white rounded-xl hover:bg-GF-green">
                                Sign In
                            </button>
                            {
                                localStorage.getItem('token') && (
                                    <Navigate to={'/Discover'} replace={true} />
                                )
                            }
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;