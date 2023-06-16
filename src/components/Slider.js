import React from "react";

function Slider({ sliderTitle, value, onChange, min, max }) {
    return (
        <>
            <p className="col-span-10 font-medium">{sliderTitle}</p>
            <input type="range" step={0.1} value={value} onChange={onChange} min={min} max={max} className="appearance-none font-medium bg-black accent-GF-green h-0.5 col-span-8" />
        </>
    );
}

export default Slider;