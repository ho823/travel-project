import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption,
  Button
} from 'reactstrap';
import {Link} from 'react-router-dom'

import styles from './Start.module.css'

const items = [
  {
    src:"https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1093&q=80",
    id: 1,
  },
  {
    src:"https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=1008&q=80",
    id: 2,
  },
  {
    src:"https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    id: 3,
  }
];

const Start = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }


  const slides = items.map((item) => {
    return (
      
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      ><img className={styles.img} src={item.src} alt={item.id}/>
        <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              height: 100vh;
            }`
        }
      </style>
      <p className={styles.h1}>Travel during confinement</p>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <Button tag={Link} to="/map" size="lg"className={styles.button} color="info">Let's go !</Button>
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} className={styles.arrowCarousel} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} className={styles.arrowCarousel} />
      </Carousel>
    </div>
  );
}

export default Start;