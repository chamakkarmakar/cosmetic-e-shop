import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const banners = [
        {
            id : 1,
            img : "https://as2.ftcdn.net/v2/jpg/04/98/92/17/1000_F_498921757_mXwPlr6JPJW5s6LDop9g4oi3rUgcHzUy.jpg",
            caption : {
                heading : "First slide label",
                paragraph : "Nulla vitae elit libero, a pharetra augue mollis interdum."
            }
        },
        {
            id : 2,
            img : "https://as1.ftcdn.net/v2/jpg/05/39/34/06/1000_F_539340661_SXsQ3pKmO6kGYnidJJ596327nDvHuB6S.jpg",
            caption : {
                heading : "Second slide label",
                paragraph : "Nulla vitae elit libero, a pharetra augue mollis interdum."
            }
        },
        {
            id : 3,
            img : "https://as1.ftcdn.net/v2/jpg/03/22/51/20/1000_F_322512083_5trkg9gU0DXv1HocCUuKw7fC8TzOIUJE.jpg",
            caption : {
                heading : "Third slide label",
                paragraph : "Nulla vitae elit libero, a pharetra augue mollis interdum."
            }
        }
    ];
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {
                banners.map(banner=>
                    <Carousel.Item key={banner.id}>
                <img
                    className="d-block w-100"
                    style={{height: "30rem"}}
                    src={banner.img}
                    alt="slide"
                />
                <Carousel.Caption className='text-dark'>
                    <h3>{banner.caption.heading}</h3>
                    <p>{banner.caption.paragraph}</p>
                </Carousel.Caption>
            </Carousel.Item>
                    )
            }
            
            
        </Carousel>
    )
}

export default Banner
