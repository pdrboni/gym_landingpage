import { useEffect, useState } from 'react';
import '../assets/css/App.css'
import Modal from '../components/modal'

function Home() {

  const [openModal, setOpenModal] = useState(false);

  useEffect (() => {
    const script = document.createElement('script');
    script.src = 'src/assets/js/parallax.js'
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <div id="home" className='sctn1 home' style={{backgroundImage: "url('src/assets/img/home-background.jpg')", backgroundSize: "cover", backgroundPosition: "0% 0%" }}>
        <div className="container1">
          <div className=''>
            <h2 style={{color: "var(--color4)"}}>Here We Look For Your Health!</h2>
            <h2 className='highlight-text1'>Invest In Yourself!</h2><br />
            <div className='white-bg-container'>
              <h2 className='highlight-text2'>Our team:</h2>
              <div className='container2'>
                <div className='item'>
                  <img src="src/assets/img/profile_photo.jpg" alt="profile pic" /><br />
                  <span className='highlight-text1'>Bruna</span><br />
                  <span className='highlight-text2'>Trainer</span>
                </div>
                <div className='item'>
                  <img src="src/assets/img/profile_photo2.png" alt="profile pic" /><br />
                  <span className='highlight-text1'>Bruna</span><br />
                  <span className='highlight-text2'>Trainer</span>
                </div>
                <div className='item'>
                  <img src="src/assets/img/profile_photo3.png" alt="profile pic" /><br />
                  <span className='highlight-text1'>Bruna</span><br />
                  <span className='highlight-text2'>Trainer</span>
                </div>
                <div className='item'>
                  <img src="src/assets/img/profile_photo4.png" alt="profile pic" /><br />
                  <span className='highlight-text1'>Bruna</span><br />
                  <span className='highlight-text2'>Trainer</span>
                </div>
                <div className='item'>
                  <img src="src/assets/img/profile_photo5.jpg" alt="profile pic" /><br />
                  <span className='highlight-text1'>Bruna</span><br />
                  <span className='highlight-text2'>Trainer</span>
                </div>
                <div className='item'>
                  <img src="src/assets/img/profile_photo6.png" alt="profile pic" /><br />
                  <span className='highlight-text1'>Bruna</span><br />
                  <span className='highlight-text2'>Trainer</span>
                </div>
                <div className='item'>
                  <img src="src/assets/img/profile_photo7.png" alt="profile pic" /><br />
                  <span className='highlight-text1'>Bruna</span><br />
                  <span className='highlight-text2'>Trainer</span>
                </div>
                <div className='item'>
                  <img src="src/assets/img/profile_photo8.jpg" alt="profile pic" /><br />
                  <span className='highlight-text1'>Bruna</span><br />
                  <span className='highlight-text2'>Trainer</span>
                </div>
              </div>
            </div>
            <button onClick={() => setOpenModal(true)} className='read-more'>Read more!</button>
            <div>
              <Modal isOpen={openModal} setModalOpen={setOpenModal}>
                <div className='content-modal'>
                  <div className='modal-text'>
                    <h2>Our mission</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet officiis quidem adipisci fugiat voluptatibus laboriosam, ipsum consectetur iusto quibusdam deleniti.</p><br />
                    <h2>Our vision</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet officiis quidem adipisci fugiat voluptatibus laboriosam, ipsum consectetur iusto quibusdam deleniti.</p><br />
                  </div>
                  <div className='modal-grid-img'>
                    <img src="src/assets/img/gym_happy1.jpg" alt="happy people on the gym"/>
                  </div>
                  <div className='modal-grid-img'>
                    <img src="src/assets/img/dumbbell2.png" alt="happy people on the gym"/>
                  </div>
                  <div className='modal-grid-img'>
                    <img src="src/assets/img/gym_happy2.jpg" alt="happy people on the gym"/>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
