"use client";

const TopSection = ()=>{
    return (
        <div className="w-full h-[480px] md:h-[360px] flex flex-col md:flex-row justify-end md:justify-start items-center md:px-6 rounded-3xl md:rounded-4xl bg-cover bg-right-top bg-[url(/images/artist.jpg)]">
            <div className="w-full md:w-[45%] h-auto flex flex-col justify-end md:justify-center items-start p-4 md:p-8 text-white ">
                <h1 className="text-3xl md:text-4xl font-bold mb-8">Your Command Center</h1>
                <p className="text-sm md:text-lg text-gray-200">
                    Manage your artists, respond to bookings, and grow your network — all in one place.
                </p>
            </div>
        </div>
    )
}

export default TopSection;