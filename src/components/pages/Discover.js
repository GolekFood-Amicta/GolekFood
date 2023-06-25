import React from "react";
import NavBar from "../NavBar";
import Feedback from "../Feedback";
import Slider from "../Slider";
import Carousel, { arrowsPlugin, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import FoodItem from "../FoodItem";
import left_arrow from "../../assets/left-arrow.svg";
import right_arrow from "../../assets/right-arrow.svg";
import feedback_icon from "../../assets/feedback_icon.svg";
import ml_api from "../../api/ml_api";
import be_api from "../../api/be_api";
import '@brainhubeu/react-carousel/lib/style.css';

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
        <input
            type="number"
            value={value}
            onChange={onChange}
            min={min}
            max={max}
            step="0.01"
            className="font-medium col-span-2 rounded-md px-2 py-1"
            style={{ width: '45px' }}
            inputMode="decimal"
        />
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
            advanceMode: false,
            value: 0,
            foods: []
        }

        this.onFatChangeEventHandler = this.onFatChangeEventHandler.bind(this);
        this.onCaloriesChangeEventHandler = this.onCaloriesChangeEventHandler.bind(this);
        this.onProteinsChangeEventHandler = this.onProteinsChangeEventHandler.bind(this);
        this.onCarbohydratesChangeEventHandler = this.onCarbohydratesChangeEventHandler.bind(this);
        this.toggleShowFeedback = this.toggleShowFeedback.bind(this);
        this.toggleBasicMode = this.toggleBasicMode.bind(this);
        this.toggleAdvanceMode = this.toggleAdvanceMode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.resetFoods = this.resetFoods.bind(this);
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

    onChangeValue(value) {
        this.setState({ value });
    }

    async handleSubmit(event) {
        event.preventDefault();

        const food = {
            energi: parseInt(this.state.calories),
            protein: parseInt(this.state.proteins),
            lemak: parseInt(this.state.fat),
            karbohidrat: parseInt(this.state.carbohydrates)
        }

        const response = await be_api.post('discover-food-adv', food);
        this.setState(response.data);
        this.state.foods = response.data;
        console.log(this.state.foods);
        event.stopPropagation();
    }

    resetFoods() {
        this.setState(() => {
            return {
                foods: [],
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
            <div>
                <NavBar />
                {this.state.showFeedback ? <Feedback toggle={this.toggleShowFeedback} /> : null}
                <div className={`${this.state.showFeedback ? 'blur' : 'blur-none'} z-0 flex px-16 pt-8`}>
                    <div className="w-1/3">
                        <p className="font-medium">Temukan makanan sehat favorit dengan <span className="font-bold">GolekFood</span></p>
                        <div className="flex space-x-2 my-8">
                            <button onClick={this.toggleBasicMode} className="w-1/2 bg-white border-2 border-black rounded-xl py-2 font-medium focus:bg-black focus:text-white">Dasar</button>
                            <button onClick={this.toggleAdvanceMode} className="w-1/2 bg-white border-2 border-black rounded-xl py-2 font-medium focus:bg-black focus:text-white">Lanjutan</button>
                        </div>

                        <form onSubmit={this.handleSubmit} className="mb-16 mt-8 grid grid-cols-4 gap-2 items-center">
                            <Slider sliderTitle={'Lemak'} value={this.state.fat} onChange={this.onFatChangeEventHandler} min={0} max={100} />
                            {this.state.advanceMode ? <InputNumber value={this.state.fat} onChange={this.onFatChangeEventHandler} /> : <Level100 level={this.state.fat} />}

                            <Slider sliderTitle={'Kalori'} value={this.state.calories} onChange={this.onCaloriesChangeEventHandler} min={0} max={1000} />
                            {this.state.advanceMode ? <InputNumber value={this.state.calories} onChange={this.onCaloriesChangeEventHandler} /> : <Level1000 level={this.state.calories} />}

                            <Slider sliderTitle={'Protein'} value={this.state.proteins} onChange={this.onProteinsChangeEventHandler} min={0} max={100} />
                            {this.state.advanceMode ? <InputNumber value={this.state.proteins} onChange={this.onProteinsChangeEventHandler} /> : <Level100 level={this.state.proteins} />}

                            <Slider sliderTitle={'Karbohidrat'} value={this.state.carbohydrates} onChange={this.onCarbohydratesChangeEventHandler} min={0} max={1000} />
                            {this.state.advanceMode ? <InputNumber value={this.state.carbohydrates} onChange={this.onCarbohydratesChangeEventHandler} /> : <Level1000 level={this.state.carbohydrates} />}
                            <button onClick={this.resetFoods} className="font-medium col-span-10 text-white bg-GF-green w-full py-4 rounded-xl hover:bg-opacity-75">Temukan Makanan</button>
                        </form>
                    </div>
                    <div className="w-2/3 pl-4">
                        <p className="font-medium text-center text-xl mb-16">Rekomendasi</p>
                        <div className="w-11/12 h-fit m-auto">
                            <Carousel
                                value={this.state.value}
                                onChange={this.onChangeValue}
                                slides={
                                    this.state.foods.data ? this.state.foods.data.map((item) => (
                                        <FoodItem
                                            key={item.id_food}
                                            foodName={item.nama}
                                            foodImage={item.gambar}
                                            fatValue={item.lemak}
                                            calValue={item.energi}
                                            proValue={item.protein}
                                            carboValue={item.karbohidrat}
                                        />
                                    )) : <></>
                                }
                                plugins={[
                                    'infinite',
                                    {
                                        resolve: arrowsPlugin,
                                        options: {
                                            arrowLeft: this.state.foods.length !== 0 ? <button>
                                                <img src={left_arrow} alt="left-arrow" />
                                            </button> : <></>,
                                            arrowRight: this.state.foods.length !== 0 ? <button>
                                                <img src={right_arrow} alt="right-arrow" />
                                            </button> : <></>,
                                            addArrowClickHandler: true,
                                        }
                                    },
                                    {
                                        resolve: slidesToShowPlugin,
                                        options: {
                                            numberOfSlides: 2.2
                                        }
                                    }
                                ]}
                            />
                        </div>
                    </div>
                </div>
                <button onClick={this.toggleShowFeedback} className="flex space-x-4 fixed bottom-8 right-8 bg-white px-4 py-2 items-center justify-center rounded-xl hover:border-b-GF-green hover:border-2">
                    <span className="font-medium">Berikan Masukan</span>
                    <img src={feedback_icon} alt="feedback" />
                </button>
            </div>
        );
    }
}

export default Discover;