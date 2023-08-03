import React from "react";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import api from "../api/api";

class Feedback extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subject: '',
            content: '',
            response: null,
            feedbackSent: false,
        }

        this.onSubjectChangeEventHandler = this.onSubjectChangeEventHandler.bind(this);
        this.onContentChangeEventHandler = this.onContentChangeEventHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeFeedbackNotification = this.closeFeedbackNotification.bind(this);
    }

    closeFeedback = () => {
        this.props.toggle();
    }

    onSubjectChangeEventHandler(event) {
        this.setState(() => {
            return {
                subject: event.target.value,
            }
        })
    }

    onContentChangeEventHandler(event) {
        this.setState(() => {
            return {
                content: event.target.value,
            }
        })
    }

    async handleSubmit(event) {
        event.preventDefault();

        const feedback = {
            user_id: localStorage.getItem('user_id'),
            subject: this.state.subject,
            content: this.state.content,
        }

        const response = await api.post('feedback', feedback);

        this.setState(() => {
            return {
                response: response.data,
                feedbackSent: true
            }
        })

        console.log(this.state.response);

        event.stopPropagation();
    }

    closeFeedbackNotification() {
        this.setState(() => {
            return {
                feedbackSent: false,
                response: null
            }
        })
    }

    render() {
        if (this.state.response && this.state.response.success === true) {
            this.setState(() => {
                return {
                    subject: '',
                    content: ''
                }
            })
        }

        return (
            <>
                {
                    this.state.response && this.state.feedbackSent === true ? <div className={`z-[999] shadow fixed right-5 top-36 w-72 h-20 px-4 rounded-3xl bg-GF-green flex justify-around items-center`}>
                        <lottie-player
                            autoplay
                            loop
                            mode="normal"
                            src="https://assets5.lottiefiles.com/packages/lf20_vOw8d0zc1F.json"
                            style={{
                                width: "100px",
                                height: "100px"
                            }}
                        />
                        <p className="text-white font-medium">Masukanmu berhasil dikirim</p>
                        <button onClick={this.closeFeedbackNotification} className="text-2xl text-white">
                            &times;
                        </button>
                    </div> : null
                }
                <div className="z-[999] shadow fixed m-auto top-0 bottom-0 right-0 left-0 w-1/2 h-5/6 rounded-3xl p-8 bg-white">
                    <div className="flex justify-end">
                        <button onClick={this.closeFeedback} className="text-2xl">&times;</button>
                    </div>
                    <p className="text-center font-semibold text-lg text-GF-green">Masukan</p>
                    <p className="text-center my-8">Kami sangat menghargai saran maupun kritik anda.<br />Bantu kami meningkatkan GolekFoods dengan mengirim masukan.</p>
                    <form onSubmit={this.handleSubmit} className="h-2/3 flex flex-col justify-around">
                        <input value={this.state.subject} onChange={this.onSubjectChangeEventHandler} placeholder="Subjek" className="w-full border-2 border-black rounded-xl p-4 accent-transparent" required={true} />
                        <textarea value={this.state.content} onChange={this.onContentChangeEventHandler} placeholder="Tulis masukanmu tentang GolekFoods disini..." className="w-full h-1/2 resize-none border-2 border-black rounded-xl p-4 accent-transparent" required={true} />
                        <div className="flex justify-center">
                            <button className="bg-GF-green text-white rounded-xl py-4 w-1/2">Kirim Masukan</button>
                        </div>
                    </form>

                </div>
            </>
        );
    }
}

export default Feedback;
