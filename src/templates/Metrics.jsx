import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import '../assets/css/Metrics.css'
import CountUp from 'react-countup'

export default function Metrics() {
    const [isVisible, setIsVisible] = useState(false);
    const inputRef = useRef(null)

    useEffect(() => {

        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsVisible(entry.isIntersecting);
          },
          {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 0.01 // Trigger when 50% of the component is visible
          }
        );

        if (inputRef.current) {
            observer.observe(inputRef.current);
          }

          return () => {
            if (inputRef.current) {
              observer.unobserve(inputRef.current);
            }
          };
        }, []);

    return(
        <div className="sctn">
            <div className="secao"></div>
            <div ref={inputRef} className="metrics" id='metrics'>
                {isVisible &&
                <>
                    <div className="card-odometer">
                        <div className='subscribers-odometer odometer'><CountUp start={0} end={300} duration={4}/></div>
                        <div className='type'>Subscribers</div>
                    </div>

                    <div className="card-odometer">
                        <div className='followers-odometer odometer'><CountUp start={0} end={12345} duration={4}/></div>
                        <div className='type'>Followers</div>
                    </div>

                    <div className="card-odometer">
                        <div className='projects-odometer odometer'><CountUp start={0} end={8} duration={4}/></div>
                        <div className='type'>Projects</div>
                    </div>
                </>
                }
            </div>
            <div className="secao"></div>
        </div>
    )

}
