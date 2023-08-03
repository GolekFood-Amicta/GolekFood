import React from "react";
import NavBar from "../NavBar";
import vector_diet from '../../assets/vector/vector-diet.svg';
import vector_bulking from '../../assets/vector/vector-bulking.svg';
import vector_other from '../../assets/vector/vector-other.svg';
import { Link } from "react-router-dom";

class SurveyPurpose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            purpose: "",
        }

        this.handlePurpose = this.handlePurpose.bind(this);
    }

    handlePurpose(event, value) {
        this.setState(() => {
            return {
                purpose: value,
            }
        })
    }

    render() {
        console.log(this.state.purpose);
        return (
            <div>
                {/* <NavBar /> */}
                <p className="text-2xl font-medium text-center">Apa tujuanmu menggunakan <span className="font-bold">GolekFood</span></p>
                <div className="grid grid-cols-3 gap-10 w-2/3 m-auto mt-16">
                    <button onClick={event => this.handlePurpose(event, "diet")} className="w-full rounded-3xl focus:border-2">
                        <img src={vector_diet} alt="diet" className="w-full" />
                    </button>
                    <button onClick={event => this.handlePurpose(event, "bulking")} className="w-full rounded-3xl focus:border-2">
                        <img src={vector_bulking} alt="bulking" className="w-full" />
                    </button>
                    <button onClick={event => this.handlePurpose(event, "other")} className="w-full rounded-3xl focus:border-2">
                        <img src={vector_other} alt="other" className="w-full" />
                    </button>
                </div>
                <div className="flex flex-col mt-10 space-y-4">
                    <Link to={'/survey-data'} className="flex justify-center" state={{
                        purpose: this.state.purpose,
                    }}>
                        <button className="m-auto w-1/3 bg-GF-green py-4 text-white font-medium rounded-xl transition hover:bg-opacity-75">Lanjut</button>
                    </Link>
                    <Link to={'/survey-data'} className="flex justify-center">
                        <button className="m-auto w-1/3 py-4 border-2 border-transparent font-medium rounded-xl transition hover:border-2 hover:border-GF-light-grey">Lewati</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default SurveyPurpose;