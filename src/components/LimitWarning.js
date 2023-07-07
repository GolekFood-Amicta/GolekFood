import React from "react";

function LimitWarning() {
    const closeWarning = () => {
        this.props.toggle();
    }

    return (
        <div className='z-[999] fixed m-auto top-0 bottom-0 right-0 left-0 w-1/2 h-5/6 rounded-3xl p-8 bg-white shadow'>
            <div className="flex justify-end">
                <button onClick={closeWarning} className="text-2xl">&times;</button>
            </div>
            <p className='text-justify'>Kamu telah mencapai batas harian sebagai pengguna non-premium</p>
        </div>
    );
}

export default LimitWarning;