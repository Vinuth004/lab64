import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './Login';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css';
// import './style.css'; // Your custom stylesheet

const Spinner = () => (
  <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

const Topbar = () => (
  <div className="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s">
    <div className="row gx-0 d-none d-lg-flex">
      <div className="col-lg-7 px-5 text-start">
        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
          <small className="fa fa-map-marker-alt text-primary me-2"></small>
          <small>123 Street, New York, USA</small>
        </div>
        <div className="h-100 d-inline-flex align-items-center py-3">
          <small className="far fa-clock text-primary me-2"></small>
          <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
        </div>
      </div>
      <div className="col-lg-5 px-5 text-end">
        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
          <small className="fa fa-phone-alt text-primary me-2"></small>
          <small>+012 345 6789</small>
        </div>

      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
      <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <h1 className="m-0 text-primary"><i className="far fa-hospital me-3"></i>Lab64</h1>
      </a>
      <button type="button" className="navbar-toggler me-4" onClick={toggleMenu}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarCollapse">
        <ul className="navbar-nav ms-auto p-4 p-lg-0">
          <li className="nav-item">
            <a href="index.html" className="nav-link active">Home</a>
          </li>
          <li className="nav-item">
            <a href="about.html" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="service.html" className="nav-link">Service</a>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
            <div className="dropdown-menu rounded-0 rounded-bottom m-0">
              <a href="feature.html" className="dropdown-item">Feature</a>
              <a href="team.html" className="dropdown-item">Our Doctor</a>
              <a href="appointment.html" className="dropdown-item">Appointment</a>
              <a href="testimonial.html" className="dropdown-item">Testimonial</a>
              <a href="404.html" className="dropdown-item">404 Page</a>
            </div>
          </li>
          <li className="nav-item">
            <a href="contact.html" className="nav-link">Contact</a>
          </li>
        </ul>
        <a href="" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Appointment<i className="m-2 bi bi-arrow-right-square-fill"></i></a>
      </div>
    </nav>
  );
};

const Header = () => (
  <div className="container-fluid header bg-primary p-0 mb-5">
    <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
      <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
        <h1 className="display-4 text-white mb-5 text-start">Good Health Is The Root Of All Happiness</h1>
        <div className="row g-4">
          <div className="col-sm-4">
            <div className="border-start border-light ps-4">
              <h2 className="text-white mb-1" data-toggle="counter-up">123</h2>
              <p className="text-light mb-0">Expert Doctors</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="border-start border-light ps-4">
              <h2 className="text-white mb-1" data-toggle="counter-up">1234</h2>
              <p className="text-light mb-0">Medical Staff</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="border-start border-light ps-4">
              <h2 className="text-white mb-1" data-toggle="counter-up">12345</h2>
              <p className="text-light mb-0">Total Patients</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
        <img className="img-fluid" src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="container-xxl py-5">
    <div className="row g-0 align-items-center justify-content-between text-start">
    <div className="col-lg-5">
        <img className="img-fluid rounded-3 shadow-lg wow fadeIn" src="https://images.unsplash.com/photo-1578496480240-32d3e0c04525?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" data-wow-delay="0.4s" />
      </div>
      <div className="col-lg-6 px-lg-5">
        <h2 className="h1 mb-4 wow fadeIn">We Are Leading Health Care</h2>
        <p className="text-muted mb-4 wow fadeIn" data-wow-delay="0.1s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident facilis vel facere, repellat nobis doloribus iure ab, a magnam totam tempora omnis atque! Tempore aperiam iusto aut autem quam officiis.</p>
        <p className="text-muted mb-4 wow fadeIn" data-wow-delay="0.2s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem optio necessitatibus voluptas deserunt quibusdam vel, eligendi unde minus, voluptatem corporis! Doloribus modi accusantium adipisci facere aperiam esse excepturi, animi voluptas.</p>
      </div>

    </div>
  </div>
);

const Appointment = () => (
  <div className="container-xxl py-5">
    <div className="row g-0 align-items-center justify-content-between text-start">
      <div className="col-lg-6 px-lg-5">
        <h2 className="h1 mb-4 wow fadeIn">Book Appointment Today</h2>
        <p className="text-muted mb-4 wow fadeIn" data-wow-delay="0.1s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident facilis vel facere, repellat nobis doloribus iure ab, a magnam totam tempora omnis atque! Tempore aperiam iusto aut autem quam officiis.</p>
        <p className="text-muted mb-4 wow fadeIn" data-wow-delay="0.2s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem optio necessitatibus voluptas deserunt quibusdam vel, eligendi unde minus, voluptatem corporis! Doloribus modi accusantium adipisci facere aperiam esse excepturi, animi voluptas.</p>
        <a href="appointment.html" className="btn btn-lg btn-primary btn-square rounded-0 wow fadeIn" data-wow-delay="0.3s">Book Appointment</a>
      </div>
      <div className="col-lg-5">
        <img className="img-fluid rounded-3 shadow-lg wow fadeIn" src="https://www.southernliving.com/thmb/s-nmvDlcZ3P-3hrQnOpEtwfmfzM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-503848507-2000-e8c5f98381bb4dd2a591dafcc267acfa.jpg" alt="" data-wow-delay="0.4s" />
      </div>
    </div>
  </div>
);

const Footer = () => (
  <div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container-xxl">
      <div className="row">
        <div className="col-lg-3 mb-4 mb-lg-0">
          <h2 className="h5 text-light mb-4 wow fadeIn">About Us</h2>
          <p className="text-start mb-0 wow fadeIn" data-wow-delay="0.1s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias reiciendis fugiat esse magni deleniti error, voluptates dignissimos, quisquam non.</p>
        </div>
        <div className="col-lg-3 mb-4 mb-lg-0 text-start">
          <h2 className="h5 text-light mb-4 wow fadeIn" data-wow-delay="0.2s">Quick Links</h2>
          <ul className="list-unstyled">
            <li className="mb-2 wow fadeIn" data-wow-delay="0.3s"><a href="#">Home</a></li>
            <li className="mb-2 wow fadeIn" data-wow-delay="0.4s"><a href="#">About</a></li>
            <li className="mb-2 wow fadeIn" data-wow-delay="0.5s"><a href="#">Service</a></li>
            <li className="mb-2 wow fadeIn" data-wow-delay="0.6s"><a href="#">Pages</a></li>
            <li className="mb-2 wow fadeIn" data-wow-delay="0.7s"><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="col-lg-3 mb-4 mb-lg-0 text-start">
          <h2 className="h5 text-light mb-4 wow fadeIn" data-wow-delay="0.3s">Services</h2>
          <ul className="list-unstyled">
            <li className="mb-2 wow fadeIn" data-wow-delay="0.4s"><a href="#">Cardiology</a></li>
            <li className="mb-2 wow fadeIn" data-wow-delay="0.5s"><a href="#">Neurology</a></li>
            <li className="mb-2 wow fadeIn" data-wow-delay="0.6s"><a href="#">Orthopedic</a></li>
            <li className="mb-2 wow fadeIn" data-wow-delay="0.7s"><a href="#">Dermatology</a></li>
            <li className="mb-2 wow fadeIn" data-wow-delay="0.8s"><a href="#">Plastic Surgery</a></li>
          </ul>
        </div>
        <div className="col-lg-3 text-start mb-4">
          <h2 className="h5 text-light mb-4 wow fadeIn" data-wow-delay="0.4s">Contact Info</h2>
          <p className=" mb-4 wow fadeIn" data-wow-delay="0.5s">123 Street, New York, USA</p>
          <p className=" mb-4 wow fadeIn" data-wow-delay="0.6s">Phone: +012 345 6789</p>
          <p className=" mb-4 wow fadeIn" data-wow-delay="0.7s">Email: info@example.com</p>
          <p className=" mb-0 wow fadeIn" data-wow-delay="0.8s">Mon - Fri : 09.00 AM - 09.00 PM</p>
        </div>
      </div>
    </div>
  </div>
);

const BackToTopButton = () => (
  <a href="#" className="btn btn-lg rounded-circle back-to-top"><i className="bi bi-arrow-up-circle-fill"></i></a>
);

const AboutUS = () => (
  <div className="container-xxl py-5 text-start">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="d-flex flex-column">
            <img className="img-fluid rounded w-75 align-self-end" src="https://images.unsplash.com/photo-1609188076864-c35269136b09?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className="img-fluid rounded w-50 bg-white pt-3 pe-3" src="https://images.unsplash.com/photo-1599493758267-c6c884c7071f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{ marginTop: '-25%' }} />
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <p className="d-inline-block border rounded-pill py-1 px-4">About Us</p>
          <h1 className="mb-4">Why You Should Trust Us? Get Know About Us!</h1>
          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
          <p><i className="m-2 bi bi-check-circle-fill"></i>Quality health care</p>
          <p><i className="m-2 bi bi-check-circle-fill"></i>Only Qualified Doctors</p>
          <p><i className="m-2 bi bi-check-circle-fill"></i>Medical Research Professionals</p>
        </div>
      </div>
    </div>
  </div>
);
const Services = () => (
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
        <p className="d-inline-block border rounded-pill py-1 px-4">Services</p>
        <h1>Health Care Solutions</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item bg-dark text-light rounded h-100 p-5">
            <div className="d-inline-flex align-items-center justify-content-center border  rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
            <i className="bi bi-heart-pulse-fill"></i>
            </div>
            <h4 className="mb-3">Cardiology</h4>
            <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
            <a className="btn text-warning" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item bg-dark text-light rounded h-100 p-5">
            <div className="d-inline-flex align-items-center justify-content-center border  rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
            <i className="bi bi-heart-pulse-fill"></i>
            </div>
            <h4 className="mb-3">Cardiology</h4>
            <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
            <a className="btn text-warning" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item bg-dark text-light rounded h-100 p-5">
            <div className="d-inline-flex align-items-center justify-content-center border  rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
            <i className="bi bi-heart-pulse-fill"></i>
            </div>
            <h4 className="mb-3">Cardiology</h4>
            <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
            <a className="btn text-warning" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item bg-dark text-light rounded h-100 p-5">
            <div className="d-inline-flex align-items-center justify-content-center border  rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
            <i className="bi bi-heart-pulse-fill"></i>
            </div>
            <h4 className="mb-3">Cardiology</h4>
            <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
            <a className="btn text-warning" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
const ClinicApp = () => (
  <>
    <Topbar />
    <Navbar />
    <Header />
    <About />
    <AboutUS />
    <Services />
    <Appointment />
    <Footer />
    <BackToTopButton />
  </>
);

export default ClinicApp;
