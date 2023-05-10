import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import truck1 from './images/garbagetruck1.jpg';
import truck2 from './images/garbagetruck2.jpg';
import truck3 from './images/garbagetruck3.jpg';
import rdisposal1 from './images/rdisposal1.jpg';
import rdisposal2 from './images/rdisposal2.jpg';
import rdisposal3 from './images/rdisposal3.jpg';
import rdisposal4 from './images/rdisposal4.jpg';


function App() {
  return (
    <div className="container">
      <header>
      <img id="rdispimg1" src={rdisposal1} alt="Rdisposal 1" />
        <div class="sub-header d-flex-align-items-center" >
        <nav>
          <ul>
            <li><a class="btn" type="button" href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
        </div>
        <img id="rdispimg11" src={rdisposal1} alt="Rdisposal 1" />
      </header>
      <main>
      <img id="rdispimg4" src={rdisposal4} alt="Rdisposal 4" />
        <div className="truck-images">
          <div classname="truck-background">
          <img src={rdisposal2} alt="Garbage Truck 2" />
          <img src={rdisposal3} alt="Garbage Truck 3" />
          </div>
        </div>
      </main>
      <footer>
        <p>Copyright &copy; Real Disposal Company</p>
      </footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
