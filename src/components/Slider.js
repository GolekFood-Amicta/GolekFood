import React from "react";

function Slider({ sliderTitle, value, onChange, min, max }) {
    return (
        <>
            <p className="col-span-8 font-medium">{sliderTitle}</p>
            <input type="range" step={0.1} value={value} onChange={onChange} min={min} max={max} className="slider font-medium hover:opacity-80 bg-black h-0.5 col-span-8 transition duration-200" />
        </>
    );
}

export default Slider;