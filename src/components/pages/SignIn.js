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

            this.setState(() => {
                return {
                    email: '',
                    password: '',
                }
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
                    <img src={vector} alt="vector" className="fixed w-2/5 m-16" />
                </div>
                <div className="w-2/4 pr-16">
                    <div className="text-right mt-8 mb-8">
                        <Logo />
                    </div>
                    <div>
                        <p className="text-2xl font-medium mt-16 mb-4">Welcome to <span className="font-bold">GolekFoods</span>, <br />Sign In to Continue </p>
                        <p className="text-sm font-medium">Tidak punya akun? <Link to={"/SignUp"}><span className="underline hover:font-semibold hover:text-GF-green">Buat akun baru</span></Link></p>
                        <div className="h-16" />
                        <form onSubmit={this.handleSubmit} >
                            <label className="text-sm font-medium mb-2">
                                Email
                                <input type="email" name="email" value={this.state.email} onChange={this.onEmailChangeEventHandler} className="border-2 border-black p-2 rounded-xl w-full" required={true} />
                            </label>
                            <div className="h-8" />
                            <label className="text-sm font-medium mb-2">
                                Password
                                <input type="password" name="password" value={this.state.password} onChange={this.onPasswordChangeEventHandler} className="border-2 border-black p-2 rounded-xl w-full" required={true} />
                            </label>
                            <div className="flex justify-end mt-8 mb-8">
                                <Link className="text-xs hover:font-medium hover:text-GF-green">Forgot Password?</Link>
                            </div>
                            <button type="submit" className="w-full h-14 mb-16 bg-GF-green text-white rounded-xl hover:bg-GF-green">
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