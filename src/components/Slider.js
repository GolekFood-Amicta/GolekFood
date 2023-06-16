import React from "react";

function Slider({ sliderTitle, value, onChange, min, max }) {
    return (
        <>
            <p className="col-span-10">{sliderTitle}</p>
            <input type="range" value={value} onChange={onChange} min={min} max={max} className="appearance-none bg-black accent-GF-green h-0.5 col-span-9" />
        </>
    );
}

export default Slider;