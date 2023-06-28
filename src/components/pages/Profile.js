import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import userData from "../../data/UserData";
import handWaving from "../../assets/hand-waving.svg";
import FavoriteFoodItem from "../FavoriteFoodItem";
import api from "../../api/api";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            address: '',
            password: '',
            profileResponse: null,
            favoriteResponse: null,
            error: '',
            editMode: false
        }

        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
        this.onAddressChangeEventHandler = this.onAddressChangeEventHandler.bind(this);
        this.onPasswordChangeEventHandler = this.onPasswordChangeEventHandler.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
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

    onAddressChangeEventHandler(event) {
        this.setState(() => {
            return {
                address: event.target.value
            }
        })
    }

    onPasswordChangeEventHandler(event) {
        this.setState(() => {
            return {
                password: event.target.value
            }
        })
    }

    toggleEditMode(event) {
        event.preventDefault();
        this.setState(() => {
            return {
                editMode: !this.state.editMode,
            }
        })
        event.stopPropagation();
    }

    async componentDidMount() {
        const profileResponse = await api.get(`user/${localStorage.getItem('user_id')}`);
        const favoriteResponse = await api.get(`favourite-user/${localStorage.getItem('user_id')}`);

        this.setState({ profileResponse: profileResponse.data });
        this.setState({ favoriteResponse: favoriteResponse.data });
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="flex mb-8">
                    <div className="w-1/3 px-16">
                        {
                            this.state.profileResponse && (
                                <>
                                    <div className="flex space-x-2">
                                        <p><span className="font-semibold">Hi</span>, {this.state.profileResponse.data.name}</p>
                                        <img src={handWaving} alt="hand-waving" className="w-6 h-6" />
                                    </div>
                                    <img src={userData.map((data) => data.photo)} alt="profile" className="w-full my-12 rounded-lg" />
                                    <form className="space-y-4">
                                        <label className="font-medium flex flex-col">
                                            Name
                                            <input type="text" value={this.state.profileResponse.data.name} onChange={this.onNameChangeEventHandler} disabled={!this.state.editMode} className="font-light border-b-2 border-black bg-transparent " />
                                        </label>
                                        <label className="font-medium flex flex-col">
                                            Email
                                            <input type="email" value={this.state.profileResponse.data.email} onChange={this.onEmailChangeEventHandler} disabled={!this.state.editMode} className="font-light border-b-2 border-black bg-transparent" />
                                        </label>
                                        <label className="font-medium flex flex-col">
                                            Address
                                            <input type="text" value={this.state.profileResponse.data.address} onChange={this.onAddressChangeEventHandler} disabled={!this.state.editMode} className="font-light border-b-2 border-black bg-transparent" />
                                        </label>
                                        <label className="font-medium flex flex-col">
                                            Password
                                            <input type="password" onChange={this.onPasswordChangeEventHandler} disabled={!this.state.editMode} className="font-light border-b-2 border-black bg-transparent" />
                                        </label>
                                        {
                                            this.state.editMode ? <div className="flex space-x-2">
                                                <button onClick={this.toggleEditMode} className="bg-GF-green w-full py-4 rounded-xl font-medium text-white">Simpan profil</button>
                                                <button onClick={this.toggleEditMode} className="bg-red-500 px-5 rounded-xl font-medium text-white text-lg">&times;</button>
                                            </div> : <button onClick={this.toggleEditMode} className="bg-GF-green w-full py-4 rounded-xl font-medium text-white">Edit profil</button>
                                        }
                                    </form>
                                </>
                            )
                        }
                    </div>
                    <div className="w-2/3 px-16">
                        <p className="text-GF-grey font-semibold mb-12">Makanan Favorit</p>
                        <div className="grid grid-cols-3 gap-10">
                            <FavoriteFoodItem
                                name={"Roti Putih"}
                                image={"https://img.my-best.id/content_section/beforehand_tips/4e0654064c1f4f6c6f82ca43010f122e.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=690&fit=max&s=a3da0b23fcedeb9e0f0e9f86034c1225"}
                            />
                            <FavoriteFoodItem
                                name={"Roti Putih"}
                                image={"https://img.my-best.id/content_section/beforehand_tips/4e0654064c1f4f6c6f82ca43010f122e.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=690&fit=max&s=a3da0b23fcedeb9e0f0e9f86034c1225"}
                            />
                            <FavoriteFoodItem
                                name={"Roti Putih"}
                                image={"https://img.my-best.id/content_section/beforehand_tips/4e0654064c1f4f6c6f82ca43010f122e.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=690&fit=max&s=a3da0b23fcedeb9e0f0e9f86034c1225"}
                            />
                            {
                                this.state.favoriteResponse && (
                                    <>
                                        {
                                            this.state.favoriteResponse.data.length !== 0 ? this.state.favoriteResponse.data.map((item) => (
                                                <FavoriteFoodItem
                                                    key={item.food_id}
                                                    name={item.foodname}
                                                    image={item.image}
                                                />
                                            )) : <div className="col-span-3 h-96 flex justify-center items-center">
                                                <p className="text-xl font-bold">Belum ada makanan favoritmu nih</p>
                                            </div>
                                        }
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;