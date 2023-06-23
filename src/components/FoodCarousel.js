import React from "react";
import Carousel, { Dots, arrowsPlugin, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import '@brainhubeu/react-carousel/lib/style.css';
import left_arrow from "../assets/left-arrow.svg";
import right_arrow from "../assets/right-arrow.svg";
import FoodItem from "./FoodItem";
import ml_api from "../api/ml_api";
import dummyFoods from "../data/DummyFoods";

class FoodCarousel extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0,
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        this.setState({ value });
    }

    render() {
        return (
            <Carousel
                value={this.state.value}
                onChange={this.onChange}
                slides={
                    this.state.foods.data.map(food =>
                        <FoodItem
                            key={food.id_food}
                            foodName={food.nama}
                            foodImage={food.gambar}
                            fatValue={food.lemak}
                            calValue={food.energi}
                            proValue={food.protein}
                            carboValue={food.karbohidrat}
                        />
                    )
                }
                plugins={[
                    'infinite',
                    {
                        resolve: arrowsPlugin,
                        options: {
                            arrowLeft: <button>
                                <img src={left_arrow} alt="left-arrow" />
                            </button>,
                            arrowRight: <button>
                                <img src={right_arrow} alt="right-arrow" />
                            </button>,
                            addArrowClickHandler: true,
                        }
                    },
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 2
                        }
                    }
                ]}
            />
        );
    }
}

export default FoodCarousel;