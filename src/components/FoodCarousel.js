import React from "react";
import Carousel, { Dots, arrowsPlugin, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import '@brainhubeu/react-carousel/lib/style.css';

import FoodItem from "./FoodItem";

const foodItem = [
    <FoodItem
        foodName={'Roti putih'}
        foodImage={'https://img.my-best.id/content_section/beforehand_tips/4e0654064c1f4f6c6f82ca43010f122e.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=690&fit=max&s=a3da0b23fcedeb9e0f0e9f86034c1225'}
        calValue={248}
        proValue={8}
        fatValue={1.2}
        carboValue={50}
    />,
    <FoodItem
        foodName={'Ikan mujair pepes'}
        foodImage={'https://sweetrip.id/wp-content/uploads/2022/10/a-pepeas.jpg'}
        calValue={121}
        proValue={21.7}
        fatValue={2.8}
        carboValue={0.8}
    />,
    <FoodItem
        foodName={'Srikaya'}
        foodImage={'https://images.tokopedia.net/blog-tokopedia-com/uploads/2021/02/Manfaat-Buah-Srikaya-untuk-Kesehatan.jpg'}
        calValue={101}
        proValue={1.7}
        fatValue={0.6}
        carboValue={35.2}
    />,
    <FoodItem
        foodName={'Yoghurt'}
        foodImage={'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/08/04071319/Inilah-Alasan-Greek-Yogurt-Menjadi-Cemilan-Sehat.jpg'}
        calValue={52}
        proValue={3.3}
        fatValue={2.5}
        carboValue={4}
    />,
    <FoodItem
        foodName={'Agar-agar'}
        foodImage={'https://res.cloudinary.com/dk0z4ums3/image/upload/v1644389489/attached_image/manfaat-agar-agar-untuk-tubuh.jpg'}
        calValue={0}
        proValue={0}
        fatValue={0.2}
        carboValue={0}
    />,
    <FoodItem
        foodName={'Coklat manis batang'}
        foodImage={'https://www.mampu.or.id/wp-content/uploads/2022/10/6007a9065cace.jpeg'}
        calValue={472}
        proValue={2}
        fatValue={29.8}
        carboValue={62.7}
    />
];

class FoodCarousel extends React.Component {
    constructor() {
        super();
        this.state = { value: 0 };
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
                    foodItem
                }
                plugins={[
                    'infinite',
                    {
                        resolve: arrowsPlugin,
                        options: {
                            arrowLeft: <button>
                                <img src={require('../assets/left-arrow.png')} alt="left-arrow" />
                            </button>,
                            arrowRight: <button>
                                <img src={require('../assets/right-arrow.png')} alt="right-arrow" />
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