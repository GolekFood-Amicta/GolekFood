import React from 'react';
import NavBar from '../NavBar';
import Feedback from '../Feedback';
import Slider from '../Slider';
import Carousel, {
    arrowsPlugin,
    slidesToShowPlugin,
} from '@brainhubeu/react-carousel';
import FoodItem from '../FoodItem';
import left_arrow from '../../assets/left-arrow.svg';
import right_arrow from '../../assets/right-arrow.svg';
import feedback_icon from '../../assets/feedback_icon.svg';
import api from '../../api/api';
import favorite_icon from '../../assets/favorite.svg';
import unfavorite_icon from '../../assets/unfavorite.svg';
import '@brainhubeu/react-carousel/lib/style.css';
import LimitWarning from '../LimitWarning';
import vector from '../../assets/vector/vector-discover.svg';

function Level100({ level }) {
    if (level >= 0 && level < 33) {
        return <span className="col-span-2 font-medium px-2 py-1">Rendah</span>;
    } else if (level >= 33 && level < 66) {
        return <span className="col-span-2 font-medium px-2 py-1">Sedang</span>;
    } else {
        return <span className="col-span-2 font-medium px-2 py-1">Tinggi</span>;
    }
}

function Level1000({ level }) {
    if (level >= 0 && level < 333) {
        return <span className="col-span-2 font-medium px-2 py-1">Rendah</span>;
    } else if (level >= 333 && level < 666) {
        return <span className="col-span-2 font-medium px-2 py-1">Sedang</span>;
    } else {
        return <span className="col-span-2 font-medium px-2 py-1">Tinggi</span>;
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
            className="font-medium col-span-2 rounded-md px-2 py-1"
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
            foods: [],
            recommendations: [],
            favoriteFoodResponse: null,
            isFavoriteFood: false,
            currentSlide: 0,
        };

        this.onFatChangeEventHandler = this.onFatChangeEventHandler.bind(this);
        this.onCaloriesChangeEventHandler =
            this.onCaloriesChangeEventHandler.bind(this);
        this.onProteinsChangeEventHandler =
            this.onProteinsChangeEventHandler.bind(this);
        this.onCarbohydratesChangeEventHandler =
            this.onCarbohydratesChangeEventHandler.bind(this);
        this.toggleShowFeedback = this.toggleShowFeedback.bind(this);
        this.toggleBasicMode = this.toggleBasicMode.bind(this);
        this.toggleAdvanceMode = this.toggleAdvanceMode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addFavoriteFood = this.addFavoriteFood.bind(this);
        this.deleteFavoriteFood = this.deleteFavoriteFood.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.resetFoods = this.resetFoods.bind(this);
        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickPrevious = this.handleClickPrevious.bind(this);
    }

    onFatChangeEventHandler(event) {
        this.setState(() => {
            return {
                fat: event.target.value,
            };
        });
    }

    onCaloriesChangeEventHandler(event) {
        this.setState(() => {
            return {
                calories: event.target.value,
            };
        });
    }

    onProteinsChangeEventHandler(event) {
        this.setState(() => {
            return {
                proteins: event.target.value,
            };
        });
    }

    onCarbohydratesChangeEventHandler(event) {
        this.setState(() => {
            return {
                carbohydrates: event.target.value,
            };
        });
    }

    onChangeValue(value) {
        this.setState({ currentSlide: value });
    }

    handleClickNext = () => {
        const { currentSlide, foods } = this.state;
        const totalSlides = foods.data?.length || 0;
        const isLastSlide = currentSlide === totalSlides - 2;

        if (!isLastSlide && currentSlide < 8) {
            this.onChangeValue(currentSlide + 1);
        }
    };

    handleClickPrevious = () => {
        const { currentSlide } = this.state;

        if (currentSlide > 0) {
            this.onChangeValue(currentSlide - 1);
        }
    };

    async handleSubmit(event) {
        event.preventDefault();

        const food = {
            energi: parseInt(this.state.calories),
            protein: parseInt(this.state.proteins),
            lemak: parseInt(this.state.fat),
            karbohidrat: parseInt(this.state.carbohydrates),
        };

        const response = await api.post('discover-food-adv', food, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        const newRecommendations = response.data;

        this.setState((prevState) => ({
            recommendations:
                newRecommendations.length > 0
                    ? newRecommendations
                    : prevState.recommendations,
            foods: newRecommendations,
        }));

        event.stopPropagation();
    }

    async addFavoriteFood(event, index) {
        const favoriteFood = {
            user_id: localStorage.getItem('user_id'),
            food_id: this.state.foods.data[index].id_food,
            foodname: this.state.foods.data[index].nama,
            fat: this.state.foods.data[index].lemak,
            protein: this.state.foods.data[index].protein,
            carbohydrate: this.state.foods.data[index].karbohidrat,
            calories: this.state.foods.data[index].energi,
            image: this.state.foods.data[index].gambar,
        };

        const response = await api.post('favourite', favoriteFood);
        console.log(response.data);

        this.setState((prevState) => {
            const updatedFoods = [...prevState.foods.data];
            updatedFoods[index].is_favourite = true;

            return {
                favoriteFoodResponse: response.data,
                isFavoriteFood: true,
                foods: { ...prevState.foods, data: updatedFoods },
            };
        });
    }

    async deleteFavoriteFood(event, index) {
        const unFavoriteFood = {
            user_id: parseInt(localStorage.getItem('user_id')),
            food_id: parseInt(this.state.foods.data[index].id_food),
        };

        const response = await api.delete('favourite', { data: unFavoriteFood });

        console.log(response.data);

        this.setState((prevState) => {
            const updatedFoods = [...prevState.foods.data];
            updatedFoods[index].is_favourite = false;

            return {
                isFavoriteFood: false,
                foods: { ...prevState.foods, data: updatedFoods },
            };
        });
    }

    resetFoods() {
        this.setState(() => {
            return {
                foods: [],
                recommendations: [],
            };
        });
    }

    toggleShowFeedback() {
        this.setState(() => {
            return {
                showFeedback: !this.state.showFeedback,
            };
        });
    }

    toggleBasicMode() {
        this.setState(() => {
            return {
                advanceMode: false,
            };
        });
    }

    toggleAdvanceMode() {
        this.setState(() => {
            return {
                advanceMode: true,
            };
        });
    }

    render() {
        let slides = [];

        if (this.state.foods) {
            slides = this.state.foods.data?.map((item, index) => (
                <FoodItem
                    key={item.id_food}
                    foodName={item.nama}
                    foodImage={item.gambar}
                    fatValue={item.lemak}
                    calValue={item.energi}
                    proValue={item.protein}
                    carboValue={item.karbohidrat}
                    favorite={
                        item.is_favourite === false
                            ? (event) => this.addFavoriteFood(event, index)
                            : (event) => this.deleteFavoriteFood(event, index)
                    }
                    favoriteIcon={
                        item.is_favourite === true ? favorite_icon : unfavorite_icon
                    }
                />
            ));
        } else {
            slides = [<p className="text-center">No food items found.</p>];
        }

        const currentSlide = this.state.currentSlide;
        const totalSlides = this.state.foods.data?.length || 0;
        const isLastSlide = currentSlide === totalSlides - 2;
        console.log(currentSlide);
        console.log(isLastSlide);

        return (
            <div>
                <NavBar />
                {
                    this.state.foods.message === "Sudah Mencapai limit harian user biasa" ?
                        <LimitWarning /> : null
                }
                {this.state.showFeedback ? (
                    <Feedback toggle={this.toggleShowFeedback} />
                ) : null}
                <div
                    className={`${this.state.showFeedback || this.state.foods.message === 'Sudah Mencapai limit harian user biasa' ? 'blur' : 'blur-none'
                        } z-0 flex px-16 pt-8`}
                >
                    <div className="w-1/3">
                        <p className="font-medium">
                            Temukan makanan sehat favorit dengan <span className="font-bold">GolekFood</span>
                        </p>
                        <div className="flex space-x-2 my-8">
                            <button
                                onClick={this.toggleBasicMode}
                                className="w-1/2 bg-white border-2 border-black rounded-xl py-2 font-medium focus:bg-black focus:text-white"
                            >
                                Dasar
                            </button>
                            <button
                                onClick={this.toggleAdvanceMode}
                                className="w-1/2 bg-white border-2 border-black rounded-xl py-2 font-medium focus:bg-black focus:text-white"
                            >
                                Lanjutan
                            </button>
                        </div>

                        <form
                            onSubmit={this.handleSubmit}
                            className="mt-8 mb-8 grid grid-cols-10 gap-2 items-center"
                        >
                            <Slider
                                sliderTitle={'Lemak'}
                                value={this.state.fat}
                                onChange={this.onFatChangeEventHandler}
                                min={0}
                                max={100}
                            />
                            {this.state.advanceMode ? (
                                <InputNumber
                                    value={this.state.fat}
                                    onChange={this.onFatChangeEventHandler}
                                />
                            ) : (
                                <Level100 level={this.state.fat} />
                            )}

                            <Slider
                                sliderTitle={'Kalori'}
                                value={this.state.calories}
                                onChange={this.onCaloriesChangeEventHandler}
                                min={0}
                                max={1000}
                            />
                            {this.state.advanceMode ? (
                                <InputNumber
                                    value={this.state.calories}
                                    onChange={this.onCaloriesChangeEventHandler}
                                />
                            ) : (
                                <Level1000 level={this.state.calories} />
                            )}

                            <Slider
                                sliderTitle={'Protein'}
                                value={this.state.proteins}
                                onChange={this.onProteinsChangeEventHandler}
                                min={0}
                                max={100}
                            />
                            {this.state.advanceMode ? (
                                <InputNumber
                                    value={this.state.proteins}
                                    onChange={this.onProteinsChangeEventHandler}
                                />
                            ) : (
                                <Level100 level={this.state.proteins} />
                            )}

                            <Slider
                                sliderTitle={'Karbohidrat'}
                                value={this.state.carbohydrates}
                                onChange={this.onCarbohydratesChangeEventHandler}
                                min={0}
                                max={1000}
                            />
                            {this.state.advanceMode ? (
                                <InputNumber
                                    value={this.state.carbohydrates}
                                    onChange={this.onCarbohydratesChangeEventHandler}
                                />
                            ) : (
                                <Level1000 level={this.state.carbohydrates} />
                            )}
                            <button
                                onClick={this.resetFoods}
                                className="font-medium col-span-10 text-white bg-GF-green w-full py-4 rounded-xl hover:bg-opacity-75"
                            >
                                Temukan Makanan
                            </button>
                        </form>
                        <p className="text-xs">
                            *Komposisi gizi pangan dihitung per 100 g
                        </p>
                    </div>
                    <div className="w-2/3 pl-4">
                        {
                            this.state.foods.data && this.state.foods.data.length > 0 ?
                                <p className="font-medium text-center text-xl mb-16">Rekomendasi</p>
                                :
                                <img src={vector} alt='vector' className='m-auto' />
                        }
                        <div className="w-11/12 h-fit m-auto">
                            {this.state.foods.data && this.state.foods.data.length > 0 && (
                                <Carousel
                                    value={currentSlide}
                                    onChange={this.onChangeValue}
                                    key={this.state.foods.data.length}
                                    slides={slides}
                                    plugins={[
                                        {
                                            resolve: arrowsPlugin,
                                            options: {
                                                arrowLeft:
                                                    this.state.foods.data.length > 1 ? (
                                                        <>
                                                            {
                                                                this.state.currentSlide > 0 ? <button
                                                                    onClick={this.handleClickPrevious}
                                                                >
                                                                    <img src={left_arrow} alt="left-arrow" />
                                                                </button> : null
                                                            }
                                                        </>
                                                    ) : null,
                                                arrowRight:
                                                    this.state.foods.data.length > 1 ? (
                                                        <>
                                                            {
                                                                this.state.currentSlide < 8 ? <button
                                                                    onClick={this.handleClickNext}
                                                                >
                                                                    <img src={right_arrow} alt="right-arrow" />
                                                                </button> : null
                                                            }
                                                        </>
                                                    ) : null,
                                            },
                                        },
                                        {
                                            resolve: slidesToShowPlugin,
                                            options: {
                                                numberOfSlides: 2,
                                            },
                                        },
                                    ]}
                                />
                            )}
                        </div>
                    </div>
                </div>
                {
                    this.state.foods.message !== 'Sudah Mencapai limit harian user biasa' ? <button
                        onClick={this.toggleShowFeedback}
                        className="flex space-x-4 fixed bottom-8 right-8 bg-white px-4 py-2 items-center justify-center rounded-xl hover:border-b-GF-green hover:border-2"
                    >
                        <span className="font-medium">Berikan Masukan</span>
                        <img src={feedback_icon} alt="feedback" />
                    </button> : null
                }
            </div>
        );
    }
}

export default Discover;
