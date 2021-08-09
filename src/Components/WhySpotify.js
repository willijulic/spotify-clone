import React from 'react';

export default class Whyspotify extends React.Component {
    render() {
        return (
            <div className="m-12">
                <div className="">
                    <p className="text-4xl font-bold text-center m-16"> Why Spotify ?</p>
                </div>
                <div className="bg-white m-12 lg:flex justify-evenly flex-nowrap sm:flex flex-wrap">
                    <div className=" grid justify-items-center">
                        <div className="play flex items-center justify-center bg-gradient-to-r from-purple-700 to-pink-500 rounded-full w-40 h-40">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                        </div>
                        <div className="my-6 text-center">
                            <h1 className="text-2xl font-bold "> Play Your favorites </h1>
                            <h6 className="text-gray-800 flex ">Listen to the songs you love, and discover new music and podcasts.</h6>
                        </div>
                    </div>
                    <div className=" grid justify-items-center">
                        <div className="library flex items-center justify-center bg-gradient-to-r from-purple-700 to-pink-500 rounded-full w-40 h-40">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                            </svg>
                        </div>
                        <div className="my-6 text-center">
                            <h1 className="text-2xl font-bold"> Playlists made easy. </h1>
                            <h6 className="text-gray-800">We'll help you make playlists. Or  enjoy playlists made by music experts</h6>
                        </div>
                    </div>
                    <div className=" grid justify-items-center">
                        <div className="favourite flex items-center justify-center bg-gradient-to-r from-purple-700 to-pink-500 rounded-full w-40 h-40">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <div className="my-6 text-center">
                            <h1 className="text-2xl font-bold"> Make it yours. </h1>
                            <h6 className="text-gray-800">Tell us what you like, and we'll  recommend music for you.</h6>
                        </div>
                    </div>
                    <div className=" grid justify-items-center">
                        <div className="data-saver flex items-center justify-center bg-gradient-to-r from-purple-700 to-pink-500 rounded-full w-40 h-40">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div className="my-6 text-center ">
                            <h1 className="text-2xl font-bold mx-4"> Save mobile data. </h1>
                            <h6 className="text-gray-800 ">To use less data when you play music, turn on Data Saver in Settings.</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

