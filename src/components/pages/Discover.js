import React from "react";
import NavBar from "../NavBar";
import Feedback from "../Feedback";

function Level100({ level }) {
    if (level >= 0 && level < 33) {
        return <span>Low</span>
    } else if (level >= 33 && level < 66) {
        return <span>Med</span>
    } else {
        return <span>High</span>
    }
}

function Level1000({ level }) {
    if (level >= 0 && level < 333) {
        return <span>Low</span>
    } else if (level >= 333 && level < 666) {
        return <span>Med</span>
    } else {
        return <span>High</span>
    }
}

class Discover extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fat: 0.0,
            calories: 0.0,
            proteins: 0.0,
            carbohydrates: 0.0,
            showFeedback: false
        }

        this.onFatChangeEventHandler = this.onFatChangeEventHandler.bind(this);
        this.onCaloriesChangeEventHandler = this.onCaloriesChangeEventHandler.bind(this);
        this.onProteinsChangeEventHandler = this.onProteinsChangeEventHandler.bind(this);
        this.onCarbohydratesChangeEventHandler = this.onCarbohydratesChangeEventHandler.bind(this);
        this.toggleShowFeedback = this.toggleShowFeedback.bind(this);
    }

    onFatChangeEventHandler(event) {
        this.setState(() => {
            return {
                fat: event.target.value,
            }
        })
    }

    onCaloriesChangeEventHandler(event) {
        this.setState(() => {
            return {
                calories: event.target.value,
            }
        })
    }

    onProteinsChangeEventHandler(event) {
        this.setState(() => {
            return {
                proteins: event.target.value,
            }
        })
    }

    onCarbohydratesChangeEventHandler(event) {
        this.setState(() => {
            return {
                carbohydrates: event.target.value,
            }
        })
    }

    toggleShowFeedback() {
        this.setState(() => {
            return {
                showFeedback: !this.state.showFeedback,
            }
        })
    }

    render() {
        return (
            <div className="px-16 py-8">
                <NavBar />
                {this.state.showFeedback ? <Feedback toggle={this.toggleShowFeedback} /> : null}
                <div className={`${this.state.showFeedback ? 'blur' : 'blur-none'} z-0 flex py-16`}>
                    <div className="w-1/3">
                        <p className="font-medium">Discover your next favorite healthy meal with just a <span className="font-bold">few clicks</span> with GolekFoods.</p>
                        <div className="my-16 grid grid-cols-10 gap-2 items-center">
                            <p className="col-span-10">Fat</p>
                            <input type="range" value={this.state.fat} onChange={this.onFatChangeEventHandler} min={0} max={100} className="accent-GF-green h-0.5 col-span-9" />
                            <Level100 level={this.state.fat} />

                            <p className="col-span-10">Calories</p>
                            <input type="range" value={this.state.calories} onChange={this.onCaloriesChangeEventHandler} min={0} max={1000} className="accent-GF-green h-0.5 col-span-9" />
                            <Level1000 level={this.state.calories} />

                            <p className="col-span-10">Proteins</p>
                            <input type="range" value={this.state.proteins} onChange={this.onProteinsChangeEventHandler} min={0} max={100} className="accent-GF-green h-0.5 col-span-9" />
                            <Level100 level={this.state.proteins} />

                            <p className="col-span-10">Carbohydrates</p>
                            <input type="range" value={this.state.carbohydrates} onChange={this.onCarbohydratesChangeEventHandler} min={0} max={1000} className="accent-GF-green h-0.5 col-span-9" />
                            <Level1000 level={this.state.carbohydrates} />
                        </div>
                        <button className="font-medium text-white bg-GF-green w-full py-4 rounded-xl hover:bg-opacity-75">Discover Foods</button>
                    </div>
                    <div className="w-2/3 pl-4">
                        <p className="font-medium text-center text-xl">Best Match</p>
                    </div>
                </div>
                <button onClick={this.toggleShowFeedback} className="flex space-x-4 fixed bottom-8 right-8 bg-white px-4 py-2 items-center justify-center rounded-xl hover:border-b-GF-green hover:border-2">
                    <span className="font-medium">Send us feedback</span>
                    <img src={require('../../assets/feedback_icon.png')} alt="feedback" />
                </button>
            </div>
        );
    }
}

export default Discover;