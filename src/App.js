import './App.css';
//BrowserRouter, Route & Link components
import { BrowserRouter, Route } from 'react-router-dom';
import Resume from './resume/KennethRancourSoftwareEngineer.pdf';
// Bootstrap Navbar component 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// Bootstrap Card component
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck';
// Bootstrap button component
import Button from 'react-bootstrap/Button';
//import images
import mongodb from './img/mongodb.svg';
import express from './img/express.svg';
import css from './img/css3.svg';
import jQuery from './img/jquery.svg';
import html from './img/html5.svg';

function App() {

  return (
    <BrowserRouter>
      <div className="App">

        <Route path="/Resume" component={Resume} />

        <header className="header" id="home">
          <container>
            <Navbar className="nav-color" fixed="top">
              <Navbar.Brand href="#home" id="nav-name">Kenny Rancour</Navbar.Brand>
              <Nav className="justify-content-end">
                  <Nav.Link href={Resume} id="nav-name">Resume</Nav.Link>
                  <Nav.Link href="#about" id="nav-name">About</Nav.Link>
                  <Nav.Link href="#portfolio" id="nav-name">Portfolio</Nav.Link>
                  <Nav.Link href="#contact" id="nav-name">Contact</Nav.Link>
              </Nav>
            </Navbar>
          </container>
        </header>

          <main>
            <div id="intro">
              <h1 className="name-text">
                <span id="firstname">Kenny
                  <span id="lastname"> Rancour</span>
                </span>
              </h1>
              <div id="occupation">
                <p className="occupation-text">Software Engineer</p>
              </div>
            </div>

            <hr id="top-line"></hr>

            <div className="about" id="about">
              <h2>About Me</h2>
              <p>Welcome to my site! I'm a software engineer, with mostly front-end experience. Currently working on projects with the MERN stack, they will be on my Github. Here you'll find a brief overview of my skills and projects I've worked on. Feel free to contact me below. </p>
            </div>

            <div className="skillset">
              <h2>My Skillset</h2>
              <div className="skill-icons-row">
                <div className="skill-icons">
                  <i class="fab fa-js"></i>
                  <p>JavaScript</p>
                </div>
                <div className="skill-icons">
                  <i class="fab fa-node-js"></i>
                  <p>Node.js</p>
                </div>
                <div className="skill-icons">
                  <i class="fab fa-react"></i>
                  <p>Reactjs</p>
                </div>
              </div>

              <div className="skill-icons-row">
                <div className="skill-icons">
                  <img src={html} class="skill-imgs" alt="html-icon"></img>
                  <p>HTML</p>
                </div>
                <div className="skill-icons">
                  <img src={css} class="skill-imgs" alt="css-icon"></img>
                  <p>CSS</p>
                </div>
                <div className="skill-icons">
                  <i class="fab fa-npm"></i>
                  <p>NPM</p>
                </div>
              </div>

              <div className="skill-icons-row">
                <div className="skill-icons">
                <i class="fab fa-github gh-icon"></i>
                  <p>Github</p>
                </div>
                <div className="skill-icons">
                  <img src={mongodb} className="skill-imgs" alt="mongodb-icon"/>
                  <p>MongoDB</p>
                </div>
                <div className="skill-icons">
                  <img src={jQuery} className="skill-imgs" alt="jquery-icon"/>
                  <p>jQuery</p>
                </div>
                <div className="skill-icons">
                  <img src={express} className="skill-imgs" alt="express"/>
                  <p>Express</p>
                </div>
              </div>
            </div>

            <hr id="bottom-line"></hr>

            <div id="portfolio">
              <h2 id="portfolio-head">Projects</h2>
              <p>Past and current projects I've worked on</p>
              <CardDeck>
                <Card>
                  <Card.Body>
                    <Card.Title><h4>Weather App</h4></Card.Title>
                    <hr></hr>
                    <Card.Text>
                      <p>Weather app made with React, NodeJS, and OpenWeatherMap API to display the weather in the location of your choice.</p>
                    </Card.Text>
                    <Button className="card-button" variant="outline-secondary" href="https://kennyran.github.io/weather-app/" target="_blank">Check your weather here</Button>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title><h4>Boxscore Tracker</h4></Card.Title>
                    <hr></hr>
                    <Card.Text>
                     <p>Created a NodeJS API that fetches the data of NBA and MLB games every 15 seconds, then displays it within a React app.</p>
                    </Card.Text>
                    <Button className="card-button" variant="outline-secondary" href="https://github.com/kennyran/boxscore-tracker" target="_blank">Check the score of a game</Button>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title><h4>Todo List</h4></Card.Title>
                    <hr></hr>
                    <Card.Text>
                      <p>Standard to-do list made with JavaScript, where you can add, or delete tasks as you complete them</p>
                    </Card.Text>
                    <Button className="card-button" variant="outline-secondary" href="https://kennyran.github.io/js-todo-list/" target="_blank">Add some things to your to-do list</Button>
                  </Card.Body>
                </Card>
            </CardDeck>
            </div>

            <hr></hr>

            <div id="contact">
              <h2 id="contact-head">Contact Me</h2>
              <p>Feel free to reach out and contact me on LinkedIn or via Email</p>
              <div className="link-list" id="contact">
                <button className="link-button" id="linkedin" onClick={() => window.open("https://www.linkedin.com/in/kennethrancour/", "_blank")}><i class="fab fa-linkedin"></i></button>
                <p>LinkedIn</p>
              </div>
              <div className="link-list" id="contact">
                <button className="link-button" id="github" onClick={() => window.open("https://github.com/kennyran", "_blank")}><i class="fab fa-github"></i></button>
                <p>Github</p>
              </div>
              <div className="link-list" id="contact">
                <button className="link-button" id="email" onClick={() => window.open("mailto:rancourkenny@gmail.com")}><i class="far fa-envelope"></i></button>
                <p>Email</p>
              </div>
              <div className="link-list" id="contact">
                <button className="link-button" id="email" onClick={() => window.open("https://codepen.io/yaboykenny")}><i class="fab fa-codepen"></i></button>
                <p>CodePen</p>
              </div>

            </div>

            <Card.Footer className="text-muted"><Button variant="outline-secondary" className="footer-button" id="nav-name" href="#home">Back to top</Button></Card.Footer>
          </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
