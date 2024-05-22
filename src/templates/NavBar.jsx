import Img1 from '../assets/img/dumbbell2.png';
import '../assets/css/NavBar.css'
import { useRef, useState } from 'react';

function NavBar() {
  const [toggleNav, setToggleNav] = useState(false);
  const inputRef = useRef(null);

  const handleToggleNav = () => {
    if (toggleNav === false) {
      setToggleNav(true);
      inputRef.current.classList.add("navbar-toggler-x");
      inputRef.current.classList.remove("navbar-toggler-icon");
      return;
    }
    setToggleNav(false);
    inputRef.current.classList.add("navbar-toggler-icon");
    inputRef.current.classList.remove("navbar-toggler-x");
    return;
  }


  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img className='logo' src={Img1} alt="dumbbell" crossOrigin=""/></a>
        <button onClick={handleToggleNav} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span ref={inputRef} className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Our Place</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Workouts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Plans</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
