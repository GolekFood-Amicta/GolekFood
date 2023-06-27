import React, { createRef } from "react";
import api from "../../api/api";
import Logo from "../Logo";
import vector from '../../assets/vector/vector-signup.svg';
import SignUpSuccessInfo from "../SignUpSuccessInfo";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            response: {},
            error: ''
        }

        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
        this.onPasswordChangeEventHandler = this.onPasswordChangeEventHandler.bind(this);
        this.onPasswordConfirmationChangeEventHandler = this.onPasswordConfirmationChangeEventHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    onPasswordConfirmationChangeEventHandler(event) {
        this.setState(() => {
            return {
                password_confirmation: event.target.value
            }
        })
    }

    async handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await api.post('register', {
                name: this.state.name,
                email: this.state.email,
                address: 'undefined',
                password: this.state.password,
                password_confirmation: this.state.password_confirmation,
                roles_id: 1
            });

            console.log('Berhasil daftar', response.data);

            this.setState(() => {
                return {
                    response: response.data,
                }
            })
        } catch (error) {
            this.setState({ error: 'Daftar gagal.' });
            console.log(error);
        }

        event.stopPropagation();
    }

    render() {
        return (
            <div className="flex">
                <SignUpSuccessInfo className={`z-[999] fixed ${this.state.response.message === 'User berhasil teregistrasi' ? '' : 'hidden'} shadow m-auto top-0 bottom-0 right-0 left-0 bg-white w-1/4 h-fit rounded-3xl p-8`} />
                {
                    this.state.response.message === 'User berhasil teregistrasi' ? <div className="z-50 w-screen h-screen backdrop-blur fixed" /> : null
                }
                <div className="w-1/2">
                    <img src={vector} alt="vector" className="fixed w-2/5 m-8" />
                </div>
                <div className="w-1/2 pr-8">
                    <div className="text-right mt-8 mb-8">
                        <Logo />
                    </div>
                    <div>
                        <p className="text-2xl font-medium mt-16 mb-4">Welcome to <span className="font-bold">GolekFoods</span>, <br />Sign Up to Continue </p>
                        <p className="text-sm font-medium">Mulai pengalaman sehatmu dengan <span className="font-bold">GolekFoods</span></p>
                        <div className="h-16" />

                        <form onSubmit={this.handleSubmit}>
                            <label className="text-sm font-medium">
                                Nama
                                <input type="text" name="nama" value={this.state.name} onChange={this.onNameChangeEventHandler} className="border-2 border-black p-2 rounded-xl w-full" />
                                {
                                    this.state.response.message === 'Nama Lengkap wajib diisi' ? <p className="text-xs text-red-500">{this.state.response.message}</p> : null
                                }
                            </label>
                            <div className="h-8" />
                            <label className="text-sm font-medium">
                                Email
                                <input type="email" name="email" value={this.state.email} onChange={this.onEmailChangeEventHandler} className="border-2 border-black p-2 rounded-xl w-full" />
                                {
                                    this.state.response.message === 'Email sudah terdaftar' ? <p className="text-xs text-red-500">{this.state.response.message}</p> : null
                                }
                            </label>
                            <div className="h-8" />
                            <label className="text-sm font-medium">
                                Password
                                <input type="password" name="password" value={this.state.password} onChange={this.onPasswordChangeEventHandler} className="border-2 border-black p-2 rounded-xl w-full" />
                                {
                                    this.state.response.message === 'Password wajib diisi' ? <p className="text-xs text-red-500">{this.state.response.message}</p> : null
                                }
                                {
                                    this.state.response.message === 'Password minimal 6 karakter' ? <p className="text-xs text-red-500">{this.state.response.message}</p> : null
                                }
                            </label>
                            <div className="h-8" />
                            <label className="text-sm font-medium">
                                Konfirmasi Password
                                <input type="password" name="konfirmasi password" value={this.state.password_confirmation} onChange={this.onPasswordConfirmationChangeEventHandler} className="border-2 border-black p-2 rounded-xl w-full" />
                                {
                                    this.state.response.message === 'Password tidak sama dengan konfirmasi password' ? <p className="text-xs text-red-500">{this.state.response.message}</p> : null
                                }
                            </label>
                            <div className="h-8" />
                            <button className="w-full mb-16 bg-GF-green text-white py-4 rounded-xl hover:bg-GF-green">Daftar</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;