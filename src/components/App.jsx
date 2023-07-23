import React, {useEffect, useState} from 'react';

import cardPhoto1 from '../assets/images/photo-1.jpg'
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

const cards = [{id: 1, src: cardPhoto1, flip: false}, {id: 2, src: cardPhoto2, flip: false}, {
    id: 3, src: cardPhoto3, flip: false
}, {id: 4, src: cardPhoto4, flip: false}, {id: 5, src: cardPhoto5, flip: false}, {
    id: 6, src: cardPhoto6, flip: false
}, {id: 7, src: cardPhoto1, flip: false}, {id: 8, src: cardPhoto2, flip: false}, {
    id: 9, src: cardPhoto3, flip: false
}, {id: 10, src: cardPhoto4, flip: false}, {id: 11, src: cardPhoto5, flip: false}, {
    id: 12, src: cardPhoto6, flip: false
},]


const App = () => {
        const [copyArr, setCopyArr] = useState(cards.slice());
        const [flipped, setFlipped] = useState([]);
        const [count, setCount] = useState(0)
        const [victory, setVictory] = useState(false)
        const [start, setStart] = useState(false)
        const handleCardClick = (card) => {
            if (start) {
                setCopyArr((prevCopyArr) => {
                    return prevCopyArr.map((c) => {
                        if (c.id === card.id) {
                            return {
                                ...c,
                                flip: !c.flip,
                            };
                        }
                        return c;
                    });
                });

                setFlipped((prevFlipped) => [...prevFlipped, card]);
            }
        };

        useEffect(() => {
            checkCard();
        }, [flipped]);

        const checkVictory = () => {
            const isWin = copyArr.every((card) => card.flip === true)
            setVictory(isWin);
        }
        const checkCard = () => {
            if (flipped.length === 2) {
                setCount(count + 1)
                checkVictory()
                if (flipped[0].src === flipped[1].src) {
                    setFlipped([]);
                } else {
                    setTimeout(() => {
                        setCopyArr((prevCopyArr) => {
                            return prevCopyArr.map((c) => {
                                if (c.id === flipped[0].id || c.id === flipped[1].id) {
                                    return {
                                        ...c,
                                        flip: false,
                                    };
                                }
                                return c;
                            });
                        });
                        setFlipped([]);
                    }, 1000);
                }
            }
        };

        const handleStartClick = (start) => {
            setStart(start)
        }

        const handleRestartClick = () => {
            setCopyArr(cards.slice())
            setFlipped([])

            console.log(copyArr)
        }


        return (
            <div className="
            w-full h-screen
            flex items-center justify-center
            max-w-[1240px] m-auto gap-4
        ">
                <div>
                    <div className="flex flex-col gap-4">
                        {victory &&
                            <div className="
                             w-full
                            z-10 bg-card-color
                            top-[-10%] text-center
                            p-2 transition-all duration-500   [transform-style:preserve-3d]
                        ">
                                <div
                                    className="
                                    border-[1px] border-[#4E4E4E]
                                    w-full text-font-color
                                    text-3xl gap-2
                                    justify-center border-card-color
                                    flex p-4 rounded">
                                    <p> Игра окончена!</p>
                                    <p> Ходов сделано: {count}</p>
                                </div>
                            </div>
                        }
                        <div className="flex  rounded  bg-card-color">
                            <div className="flex w-full py-4 pl-4">
                                <div className="grid grid-cols-4 gap-4">
                                    {copyArr.map((card) => (<div
                                        className="group h-44 w-44 [perspective:1000px]"
                                        onClick={() => handleCardClick(card)}
                                        key={card.id}
                                    >
                                        <div className={`
                                            relative h-full w-full
                                            rounded cursor-pointer
                                            border-[1px] border-border-color
                                            [transform-style:preserve-3d] transition-all duration-500
                                            ${card.flip && '[transform:rotateY(-180deg)]'}         
                                        `}>
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
                                    </div>))}
                                </div>
                            </div>
                            <div className="flex-auto justify-between p-4">
                                <div className="
                                flex gap-4 rounded items-center
                                p-3 flex-col border-[1px]
                                border-border-color h-full
                        ">
                                    <div className="flex-1 flex-col justify-center">
                                        <p className="text-font-color text-lg text-center">Ходы: <span>{count}</span></p>
                                    </div>
                                    <button className="
                            text-font-color
                            border-[1px] border-border-color
                            bg-button-bg-color p-2.5 rounded
                            hover:bg-[#4aa8f7] hover:duration-300
                            duration-300
                            focus:border-[1px] focus:border-border-focus-color
                        " onClick={() => handleStartClick(!start)}>
                                        <RiPlayCircleLine size={18}/>
                                    </button>
                                    <button className="
                            text-font-color border-[1px]
                            border-border-color p-2.5 rounded
                            hover:bg-[#2c2c2c] hover:duration-300
                            duration-300
                            focus:border-[1px] focus:border-border-focus-color
                        " onClick={handleRestartClick}>
                                        <VscDebugRestart
                                            size={18}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>);
    }
;

export default App;

// const [flipped, setFlipped] = useState([])
// const [copyArr, setCopyArr] = useState(cards.slice())
//
// const checkArray = (card) => {
//     const cardIndex = copyArr.findIndex((c) => c.id === card.id)
//     if (cardIndex) {
//         const updatedCard = {...copyArr[cardIndex], flip: true}
//         setFlipped([...flipped, updatedCard])
//         setCopyArr((prevCopyArr) => {
//             const newCopyArr = prevCopyArr.slice();
//             newCopyArr[cardIndex] = updatedCard;
//             return newCopyArr
//         })
//     }
//
//     if (flipped.length % 2 === 0) {
//         checkCard()
//     }
// }
//
// const checkCard = () => {
//
// }
//
// const removeFlip = (card1, card2) => {
//     card1.flip = false
//     card2.flip = false
//


// const checkCards = (flipped) => {
//     if (flipped.length % 2 === 0 && flipped.length > 0) { // Check for empty flipped array
//         checkCard(flipped);
//     }
// };

// const checkCard = (flipped) => {
//     const flippedSrcs = flipped.map((item) => item.src);
//
//     const updatedCopyArr = copyArr.map((card) => {
//         if (flippedSrcs.includes(card.src)) {
//             return {
//                 ...card,
//                 flip: true,
//             };
//         }
//         return card;
//     });
//
//     setCopyArr(updatedCopyArr);
// };
// useEffect(() => {
//     checkCards(flipped);
// }, [flipped]);
