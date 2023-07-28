import React, { useState } from "react";
import Square from './Square';
import './cards.css'


function Cards () {
    const [items, setItems] =  useState([
        { id: 1, img: './images/html.png', stat: "" },
        { id: 1, img: './images/html.png', stat: "" },
        { id: 2, img: './images/css.png', stat: "" },
        { id: 2, img: './images/css.png', stat: "" },
        { id: 3, img: './images/js.png', stat: "" },
        { id: 3, img: './images/js.png', stat: "" },
        { id: 4, img: './images/scss.png', stat: "" },
        { id: 4, img: './images/scss.png', stat: "" },
        { id: 5, img: './images/react.png', stat: "" },
        { id: 5, img: './images/react.png', stat: "" },
        { id: 6, img: './images/vue.png', stat: "" },
        { id: 6, img: './images/vue.png', stat: "" },
        { id: 7, img: './images/angular.png', stat: "" },
        { id: 7, img: './images/angular.png', stat: "" },
        { id: 8, img: './images/nodejs.png', stat: "" },
        { id: 8, img: './images/nodejs.png', stat: "" }
    ].sort(()=> Math.random() - 0.5 ))

    const [prevCardId, setPrevCardId] = useState(-1);

    const check = (current) => {
        if(items[current].id === items[prevCardId].id) {
            items[current].stat = "correct"
            items[prevCardId].stat = "correct"
            setPrevCardId(-1)

        } else {
            items[current].stat = "wrong"
            items[prevCardId].stat = "wrong"
            setItems([...items])
            setTimeout( () => {
                items[current].stat = ""
                items[prevCardId].stat = ""
                setItems([...items])
                setPrevCardId(-1)
            }, 1000)
        }

    }


    function handleClick(id) {
        if (prevCardId === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrevCardId(id);
        } else {
            check(id)
        }
        
    }

  return (
    <div className='container text-center'>
        <div className='row row-cols-md-4 row-cols-sm-2 p-md-2 p-sm-0'>
            { 
                items.map((item, index) => (
                    <div className='col'>
                        <Square  key={index} item={item} id={index} handleClick={handleClick}/>
                    </div>
                    
                ))

            } 
        </div>
    </div>
  )
};

export default Cards;
