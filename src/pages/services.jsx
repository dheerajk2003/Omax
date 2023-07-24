import { useEffect, useState } from 'react';
import { useRef } from 'react';

import '../styles/services.css';
import item from '/src/assets/item.json';
// const itemJson = item;
export function Services() {
    const [Clothes, setClothes] = useState([]);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        setClothes(item)
        console.log(item)
    }, [])

    function Mappit() {
        const card = Clothes.map((cloth) => {
            return <div className="itemCard" >
                <img src={`${cloth.image}`} className='cardImg' />
                <div className='conWrapper'>
                    <h2 className="itemTitle">{cloth.itemName}</h2>
                    <div className='itemHide'>
                        <p>{cloth.type}</p>
                        <p>{cloth.cost}</p>
                    </div>
                </div>
            </div>
        })
        console.log(card)
        return card;
    }
    const next = (scrollAmount) => {
        scrollContainerRef.current.scrollLeft += scrollAmount;
        console.log(scrollAmount);
    }
    return (
        <section className="servicesSec" id="services">
            <h1 className="secName">CLOTHES WE SEW</h1>
            <div className="Cards" id='cards' ref={scrollContainerRef}>
                <Mappit />
            </div>
            <button className='prevBtn' onClick={() => next(-350)}>
                <img src='/previous.png'></img>
            </button>
            <button className='nextBtn' onClick={() => next(350)}>
            <img src='/previous.png'></img>
            </button>
        </section>
    )
}