import React, {useState} from 'react';

import cardPhoto1 from '../assets/images/photo-1.png'
import cardPhoto2 from '../assets/images/photo-2.jpg'
import cardPhoto3 from '../assets/images/photo-3.jpg'
import cardPhoto4 from '../assets/images/photo-4.jpg'
import cardPhoto5 from '../assets/images/photo-5.jpg'
import cardPhoto6 from '../assets/images/photo-6.jpg'
import cardPhotoQuestion from "../assets/images/photo-question.png";

import {
    VscDebugRestart,
} from 'react-icons/vsc'

import {
    RiPlayCircleLine
} from 'react-icons/ri'


const cards = [
    {id: 1, src: cardPhoto1, isFlipped: false},
    {id: 2, src: cardPhoto2, isFlipped: false},
    {id: 3, src: cardPhoto3, isFlipped: false},
    {id: 4, src: cardPhoto4, isFlipped: false},
    {id: 5, src: cardPhoto5, isFlipped: false},
    {id: 6, src: cardPhoto6, isFlipped: false},
    {id: 7, src: cardPhoto1, isFlipped: false},
    {id: 8, src: cardPhoto2, isFlipped: false},
    {id: 9, src: cardPhoto3, isFlipped: false},
    {id: 10, src: cardPhoto4, isFlipped: false},
    {id: 11, src: cardPhoto5, isFlipped: false},
    {id: 12, src: cardPhoto6, isFlipped: false},
]


const App = () => {
    const [flipped, setFlipped] = useState([{}])

    console.log(flipped)
    return (<div className="
            w-full h-screen
            flex items-center justify-center
            max-w-[1240px] m-auto gap-4
        ">
        <div className="
                bg-card-color
                flex flex-col p-4 gap-4
                rounded
            ">
            <div className="flex gap-4">
                <div className="flex w-full gap-4 p-4">
                    <div className="grid grid-cols-4 gap-4">
                        {cards.map((card, index) => (
                            <div
                                className="group h-44 w-44 [perspective:1000px]"
                                onClick={() => setFlipped([...flipped, card])}
                                key={card.id}
                            >
                                <div className={`
                            relative h-full w-full
                            rounded
                            border-[1px] border-border-color
                            [transform-style:preserve-3d] transition-all duration-500
                            ${flipped[card.id] && '[transform:rotateY(-180deg)]'}           
                        `}
                                >
                                    <div className="absolute inset-0">
                                        <img className="h-full w-full rounded object-cover"
                                             src={cardPhotoQuestion}
                                             alt="/"/>
                                    </div>
                                    <div className={`
                                absolute inset-0
                                h-full w-full
                                rounded-xl bg-card-color
                                text-center
                                text-font-color
                                [backface-visibility:hidden]
                                [transform:rotateY(180deg)]
                             `}>
                                        <img className="h-full w-full rounded object-cover" src={card.src}
                                             alt="/"/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-auto justify-between p-4">
                    <div className="
                                flex gap-4 rounded items-center
                                p-3 flex-col border-[1px]
                                border-border-color h-full
                        ">
                        <div className="flex-1 flex-col justify-center">
                            <p className="text-font-color text-lg text-center">Ходы: <span>0</span></p>
                        </div>
                        <button className="
                            text-font-color
                            border-[1px] border-border-color
                            bg-button-bg-color p-2.5 rounded
                            hover:bg-[#4aa8f7] hover:duration-300
                            duration-300
                            focus:border-[1px] focus:border-border-focus-color
                        ">
                            <RiPlayCircleLine size={18}/>
                        </button>
                        <button className="
                            text-font-color border-[1px]
                            border-border-color p-2.5 rounded
                            hover:bg-[#2c2c2c] hover:duration-300
                            duration-300
                            focus:border-[1px] focus:border-border-focus-color
                        ">
                            <VscDebugRestart size={18}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default App;

