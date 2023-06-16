import React from "react";
import NavBar from "../NavBar";
import Feedback from "../Feedback";
import Slider from "../Slider";

function Level100({ level }) {
    if (level >= 0 && level < 33) {
        return <span className="col-span-2 font-medium px-2 py-1">Low</span>
    } else if (level >= 33 && level < 66) {
        return <span className="col-span-2 font-medium px-2 py-1">Med</span>
    } else {
        return <span className="col-span-2 font-medium px-2 py-1">High</span>
    }
}

function Level1000({ level }) {
    if (level >= 0 && level < 333) {
        return <span className="col-span-2 font-medium px-2 py-1">Low</span>
    } else if (level >= 333 && level < 666) {
        return <span className="col-span-2 font-medium px-2 py-1">Med</span>
    } else {
        return <span className="col-span-2 font-medium px-2 py-1">High</span>
    }
}

function InputNumber({ value, onChange, min, max }) {
    return (
        <input type="number" value={value} onChange={onChange} min={min} max={max} className="font-medium col-span-2 rounded-md px-2 py-1" />
    );
}

class Discover extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fat: 0.0,
            calories: 0.0,
            proteins: 0.0,
            carbohydrates: 0.0,
            showFeedback: false,
            advanceMode: false
        }

        this.onFatChangeEventHandler = this.onFatChangeEventHandler.bind(this);
        this.onCaloriesChangeEventHandler = this.onCaloriesChangeEventHandler.bind(this);
        this.onProteinsChangeEventHandler = this.onProteinsChangeEventHandler.bind(this);
        this.onCarbohydratesChangeEventHandler = this.onCarbohydratesChangeEventHandler.bind(this);
        this.toggleShowFeedback = this.toggleShowFeedback.bind(this);
        this.toggleBasicMode = this.toggleBasicMode.bind(this);
        this.toggleAdvanceMode = this.toggleAdvanceMode.bind(this);
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

    toggleBasicMode() {
        this.setState(() => {
            return {
                advanceMode: false,
            }
        })
    }

    toggleAdvanceMode() {
        this.setState(() => {
            return {
                advanceMode: true,
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
                        <div className="flex space-x-2 my-8">
                            <button onClick={this.toggleBasicMode} className="w-1/2 bg-white border-2 border-black rounded-xl py-2 font-medium focus:bg-black focus:text-white">Basic</button>
                            <button onClick={this.toggleAdvanceMode} className="w-1/2 bg-white border-2 border-black rounded-xl py-2 font-medium focus:bg-black focus:text-white">Advance</button>
                        </div>
                        <div className="mb-16 mt-8 grid grid-cols-10 gap-2 items-center">
                            <Slider sliderTitle={'Fat'} value={this.state.fat} onChange={this.onFatChangeEventHandler} min={0} max={100} />
                            {this.state.advanceMode ? <InputNumber value={this.state.fat} onChange={this.onFatChangeEventHandler} /> : <Level100 level={this.state.fat} />}

                            <Slider sliderTitle={'Calories'} value={this.state.calories} onChange={this.onCaloriesChangeEventHandler} min={0} max={1000} />
                            {this.state.advanceMode ? <InputNumber value={this.state.calories} onChange={this.onCaloriesChangeEventHandler} /> : <Level1000 level={this.state.calories} />}

                            <Slider sliderTitle={'Proteins'} value={this.state.proteins} onChange={this.onProteinsChangeEventHandler} min={0} max={100} />
                            {this.state.advanceMode ? <InputNumber value={this.state.proteins} onChange={this.onProteinsChangeEventHandler} /> : <Level100 level={this.state.proteins} />}

                            <Slider sliderTitle={'Carbohydrates'} value={this.state.carbohydrates} onChange={this.onCarbohydratesChangeEventHandler} min={0} max={1000} />
                            {this.state.advanceMode ? <InputNumber value={this.state.carbohydrates} onChange={this.onCarbohydratesChangeEventHandler} /> : <Level1000 level={this.state.carbohydrates} />}
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