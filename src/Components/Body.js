import React from 'react';
import Whyspotify from './WhySpotify';
import Bottom from './Bottom';
import Gotquestions from './GotQuestion';
import Ready from './Ready';

class Body extends React.Component {

    scrollDown = () => {
        window.scrollTo({
            top: 600,
            behavior: 'smooth'
        });
    }

    render() {

        return (
            <div className="  ">
                <div className='bodythis flex justify-evenly body bg-gradient-to-r from-purple-500 via-blue-400 to-pink-500 h-screen min-h-full w-screen '>
                    <div className="phone-made-for-you ">
                        <div className=" pt-28 ">
                            <div className="block lg:block w-72 h-72 pt-16 bg-white rounded-3xl hidden sm:hidden">
                                <img className="backgroundPhoneImage " src="https://www.scdn.co/i/free/screen_shot_taste_profile.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:flex lg:justify-center mt-28 ">
                        <div className="grid justify-items-center pr-20 ">
                            <div className="flex justify-center items-center text-white text-6xl font-bold 
                              text-center">
                                Play millions of songs <br></br> and podcasts, for free. 

                            </div>
                            <p className="flex justify-center items-center w-52 h-12 bg-white rounded-full cursor-pointer  ">
                                <div className="font-bold flex justify-center items-center">
                                    GET SPOTIFY FREE
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                <p className="flex justify-center items-center cursor-pointer hover:w-12 hover:h-12
                " onClick={this.scrollDown} >
                    <div className="w-8 h-8  flex justify-center items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded-full ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </p>
                <Whyspotify />
                <Bottom />
                <Gotquestions />
                <Ready />

            </div>
        )
    }
}

export default Body;

