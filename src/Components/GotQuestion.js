import React from 'react';
import '../Style/goQuestion.css'

class Gotquestions extends React.Component {
    dropDownClick = () => {

    }
    render() {

        return (
            <div>
                <h1 className="text-center text-5xl font-extrabold -mt-10 pb-10"> Got Questions? </h1>
                <div>
                    <main class="w-11/12 p-8 mx-auto">
                        <section class="shadow row bg-gray-100">
                            <div class="tabs">
                                <div class="border-b tab">
                                    <div class="border-l-2 border-transparent relative">
                                        <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
                                        <header class="flex justify-between items-center p-5 pl-8 pr-8 pb-10 cursor-pointer select-none tab-label font-bold" for="chck1">
                                            How do I create a playlist?
                                            <span class="text-grey-darkest font-thin text-xl">
                                                {/* Massa vitae tortor condimentum lacinia quis vel eros donec */}
                                            </span>
                                            <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                                {/* <!-- icon by feathericons.com --> */}
                                                <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                    <polyline points="6 9 12 15 18 9">
                                                    </polyline>
                                                </svg>
                                            </div>
                                        </header>
                                        <div class="tab-content">
                                            <div class="pl-8 pr-8 pb-8 text-grey-darkest">
                                                <ul class="pl-4">
                                                    <li class="pb-2 text-gray-500">
                                                        Playlists are a great way to save collections of music, either for your own listening or to share.
                                                    </li>
                                                    <li class="pb-2 text-gray-500">
                                                        To create one:
                                                    </li>
                                                    <li class="pb-2 text-black pl-4">
                                                        <ol>1. Tap Your Library.</ol>
                                                        <ol>2. Tap <span className="font-bold">CREATE</span>.</ol>
                                                        <ol>3. Give your playlist a name.</ol>
                                                        <ol>4. Start adding songs (and we’ll help you along).</ol>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-b tab">
                                    <div class="border-l-2 border-transparent relative">
                                        <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck2" />
                                        <header class="flex justify-between items-center p-5 pl-8 pr-8 pb-10 cursor-pointer select-none tab-label font-bold" for="chck2">
                                            How do i activate Data Saver mode?
                                            <span class="text-grey-darkest font-thin text-xl">
                                                {/* Massa vitae tortor condimentum lacinia quis vel eros donec */}
                                            </span>
                                            <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                                {/* <!-- icon by feathericons.com --> */}
                                                <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                    <polyline points="6 9 12 15 18 9">
                                                    </polyline>
                                                </svg>
                                            </div>
                                        </header>
                                        <div class="tab-content">
                                            <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                                                <ul class="pl-4">
                                                    <li class="pb-2">
                                                        <ol>1. Tap <span className="font-bold">Home</span>.</ol>
                                                        <ol>2. Tap <span className="font-bold">Settings</span>.</ol>
                                                        <ol>3. Tap <span className="font-bold">Data Saver</span>.</ol>
                                                        <ol>4. Tap Switch on Data Saver.</ol>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-b tab">
                                    <div class="border-l-2 border-transparent relative">
                                        <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck3" />
                                        <header class="flex justify-between items-center p-5 pl-8 pr-8 pb-10 cursor-pointer select-none tab-label font-bold" for="chck3">
                                            Is it only possible to shuffle play music?
                                            <span class="text-grey-darkest font-thin text-xl">
                                                {/* Massa vitae tortor condimentum lacinia quis vel eros donec */}
                                            </span>
                                            <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                                {/* <!-- icon by feathericons.com --> */}
                                                <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                    <polyline points="6 9 12 15 18 9">
                                                    </polyline>
                                                </svg>
                                            </div>
                                        </header>
                                        <div class="tab-content">
                                            <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                                                <ul class="pl-4">
                                                    <li class="pb-2">
                                                        Any playlist with the shuffle <i class="fal fa-random text-black"></i> icon will play on shuffle.
                                                    </li>
                                                    <li class="pb-2">
                                                        Some playlists won't have the shuffle icon, so you can tap any song to play it.
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-b tab">
                                    <div class="border-l-2 border-transparent relative">
                                        <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck3" />
                                        <header class="flex justify-between items-center p-5 pl-8 pr-8 pb-10 cursor-pointer select-none tab-label font-bold" for="chck3">
                                            Where can i find podcasts
                                            <span class="text-grey-darkest font-thin text-xl">
                                                {/* Massa vitae tortor condimentum lacinia quis vel eros donec */}
                                            </span>
                                            <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                                {/* <!-- icon by feathericons.com --> */}
                                                <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                    <polyline points="6 9 12 15 18 9">
                                                    </polyline>
                                                </svg>
                                            </div>
                                        </header>
                                        <div class="tab-content">
                                            <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                                                <ul class="pl-4">
                                                    <li class="pb-2">
                                                        Tap <span className="font-bold">Search<i class="fad fa-search"></i></span>. Under <span className="font-bold">Browse All</span>, tap Podcasts.
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        )
    }
}

export default Gotquestions;