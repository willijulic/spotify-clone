import React from 'react';
import '../Style/ready.css'

class Ready extends React.Component {
    render() {
        return (
            <div className="h-screen bg-black" >
                <div className="min-h-screen bg-black flex flex-col  align-center ">
                    <div className=" bg-gradient-to-t from-pink-400 to-purple-900 h-96 flex flex-col justify-center align-center ">
                        <div className="flex lg:flex lg:justify-center ">
                            <div className="grid justify-items-center  ">
                                <div className="flex justify-center items-center text-white text-6xl font-bold 
                              text-center mb-10">
                                    Ready? Let’s play.

                                </div>
                                <p className="flex justify-center items-center w-52 h-12 bg-white rounded-full cursor-pointer  ">
                                    <div className="font-bold flex justify-center items-center">
                                        GET SPOTIFY FREE
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-14 flex items-center justify-center sm:space-y-3.5">

                        <div className="lg:grid lg:grid-cols-6 gap-8 sm:grid-cols-1 sm:">
                            <div className="text-white text-3xl">
                                <i class="fab fa-spotify"></i> Spotify
                            </div>
                            <div className="text-white leading-9 ">
                                <ul className="text-gray-400">COMPANY</ul>
                                <ul> About </ul>
                                <ul> Jobs </ul>
                                <ul> For the Record </ul>

                            </div>
                            <div className="text-white leading-9">
                                <ul className="text-gray-400">COMMUNITIES</ul>
                                <ul> For Artists </ul>
                                <ul> Developers </ul>
                                <ul> Advertising </ul>
                                <ul> Investors </ul>
                                <ul> Vendors </ul>
                            </div>
                            <div className="text-white leading-9">
                                <ul className="text-gray-400">USEFUL LINKS</ul>
                                <ul> Support </ul>
                                <ul> Web Player </ul>
                                <ul> Free Mobile App </ul>
                            </div>
                            <div className="empty">

                            </div>
                            <div className="icons flex justify-center  space-x-2.5">
                                <div className="w-12 h-12 rounded-full rol flex justify-center items-center ">
                                    <i class="fab fa-instagram fa-2x text-white"></i>
                                </div>
                                <div className="w-12 h-12 rounded-full rol flex justify-center items-center ">
                                    <i class="fab fa-twitter fa-2x text-white"></i>
                                </div>
                                <div className="w-12 h-12 rounded-full rol flex justify-center items-center ">
                                    <i class="fab fa-facebook fa-2x text-white"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="p-14 ">
                        <small className="text-white flex items-center space-x-7">

                            <ul>Legal</ul>
                            <ul>Privacy Center</ul>
                            <ul>Privacy Policy</ul>
                            <ul>Cookies</ul>
                            <ul>AboutAds</ul>                            
                                                        
                        </small>
                        <div className="text-white grid justify-items-end space-y-2.5">
                            <small>
                            <i class="fas fa-globe-asia"></i> India(English)
                            </small>
                            <small>
                            <i class="far fa-copyright"></i> 2021 Spotify AB 
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ready;