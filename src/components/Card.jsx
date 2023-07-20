import React, {useEffect, useState} from 'react';

const Card = ({onClick, change, card, ...props}) => {

    const [maxValue, setMaxValue] = useState(2)
    const [limit, setLimit] = useState([])
    if (flipped) {
        const [flip, setFlip] = {flipped}
        setLimit([...flipped, flip])
        console.log(limit)
    }


    return (
        <div
            className="group h-44 w-44 [perspective:1000px]"
            onClick={() => setFlipped([...flipped, card])}
        >
            <div className={`
                            relative h-full w-full
                            rounded
                            border-[1px] border-border-color
                            [transform-style:preserve-3d] transition-all duration-500
                            ${flipped.length && '[transform:rotateY(-180deg)]'}           
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
    );
};

export default Card;