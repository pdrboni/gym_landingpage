import React, { Fragment, useEffect, useState } from 'react';
import '../assets/css/Gallery.css'
import { register } from 'swiper/element';
register();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react'


function Gallery() {

  let divs = document.querySelectorAll('div');
  let divsArray = Array.from(divs)
  let imgs = divsArray.map((item) => {
    if (item.classList.contains('image')) {
      return item;
    }
    return;
  }).filter((item) => {if (item) return item});

  useEffect (() => {
    const script = document.createElement('script');
    script.src = 'src/assets/js/filter.js'
    document.body.appendChild(script);

    let divs = document.querySelectorAll('div');
    let divsArray = Array.from(divs)
    let imgs = divsArray.map((item) => {
      if (item.classList.contains('image')) {
        return item;
      }
      return;
    }).filter((item) => {if (item) return item});

    imgs.forEach(function(item) {
      item.addEventListener('mouseover', function() {
        imgs.forEach(function(el){
          if (el !== item) {
            el.classList.add('darked');
          }
        })
      });

      item.addEventListener('mouseout', function() {
        imgs.forEach(function(el){
          if (el !== item) {
            el.classList.remove('darked');
          }
        })
      });
    })

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="sctn">
      <div className="container3">
        <div className="label">
          <h1 className='highlight-text1-gallery'>Our Place</h1>
          <p className="highlight-text2-gallery">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tenetur asperiores enim consequuntur! Pariatur, eveniet ab deserunt neque consectetur perferendis?</p>
        </div>
      </div>
      <div className="photo-gallery">
        <ul className='filter'>
          <li className='all-imgs'>All</li>
          <li className='crossfit-imgs'>CrossFit</li>
          <li className='fitness-imgs'>Fitness</li>
          <li className='bodybuilding-imgs'>Bodybuilding</li>
          <li className='local-imgs'>Local</li>
        </ul>
        <div className="img-grid">
          <div className="image yoga">
            <img className='yoga' src="src/assets/img/yoga1.jpg" alt="yoga" />
          </div>
          <div className="image yoga">
            <img className='yoga' src="src/assets/img/yoga2.jpg" alt="yoga" />
          </div>
          <div className="image bodybuilding">
            <img className='bodybuilding' src="src/assets/img/bodybuilding1.png" alt="bodybuilding" />
          </div>
          <div className="image bodybuilding">
            <img className='bodybuilding' src="src/assets/img/bodybuilding2.jpg" alt="bodybuilding" />
          </div>
          <div className="image local">
            <img className='local' src="src/assets/img/gym1.jpg" alt="local" />
          </div>
          <div className="image local">
            <img className='local' src="src/assets/img/gym2.jpg" alt="local" />
          </div>
          <div className="image fitness">
            <img className='fitness' src="src/assets/img/fitness1.jpg" alt="fitness" />
          </div>
          <div className="image fitness">
            <img className='fitness' src="src/assets/img/fitness2.jpg" alt="fitness" />
          </div>
          <div className="image crossfit">
            <img className='crossfit' src="src/assets/img/crossfit1.jpg" alt="crossfit" />
          </div>
          <div className="image crossfit">
            <img className='crossfit' src="src/assets/img/crossfit2.jpg" alt="crossfit" />
          </div>
        </div>
      </div>
      {/* Modal */}
      <div id="myModal" className="modal1">
        <div className="modal-content1">
          <Swiper>
            <SwiperSlide>

            </SwiperSlide>
          </Swiper>
          <span className="close">&times;</span>
          <img id="modal-img" src="" alt="Amplified Image" />
        </div>
      </div>

    </div>
  );
}

export default Gallery;
