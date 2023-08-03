import React from "react";
import * as LottiePlayer from "@lottiefiles/lottie-player";

function SubscribeNewsInfo({ className, close }) {
    return (
        <div className={className}>
            <div className="flex justify-end">
                <button onClick={close} className="text-2xl">&times;</button>
            </div>
            <lottie-player
                autoplay
                loop
                mode="normal"
                src="https://assets5.lottiefiles.com/packages/lf20_vOw8d0zc1F.json"
                style={{
                    width: "300px",
                    height: "300px"
                }}
            />
            <p className="font-bold text-lg text-center my-2">Berhasil berlangganan berita</p>
        </div>
    );
}

export default SubscribeNewsInfo;