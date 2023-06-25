import React from "react";

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: ""
        };
    }

    closeFeedback = () => {
        this.props.toggle();
    }

    handleSubjectChange = (event) => {
        this.setState({ subject: event.target.value });
    }

    render() {
        return (
            <div className="z-[999] shadow fixed m-auto top-0 bottom-0 right-0 left-0 w-1/2 h-[90%] rounded-3xl p-12 bg-white">
                <div className="flex justify-end">
                    <button onClick={this.closeFeedback} className="text-2xl">&times;</button>
                </div>
                <p className="text-center font-semibold text-lg text-GF-green">Masukan</p>
                <p className="text-center my-8">Kami sangat menghargai saran maupun kritik anda.<br />Bantu kami meningkatkan GolekFoods dengan mengirim masukan.</p>

                <input
                    type="text"
                    placeholder="Subject masukan"
                    value={this.state.subject}
                    onChange={this.handleSubjectChange}
                    className="w-full h-12 border-2 border-black rounded-xl px-4 accent-transparent mb-4"
                />
                <textarea
                    placeholder="Tulis masukanmu tentang GolekFoods disini..."
                    className="w-full h-1/2 resize-none border-2 border-black rounded-xl p-4 accent-transparent"
                />

                <div className="flex justify-center mt-8">
                    <button className="bg-GF-green text-white rounded-xl py-4 w-1/2">Kirim Masukan</button>
                </div>
            </div>
        );
    }
}

export default Feedback;
