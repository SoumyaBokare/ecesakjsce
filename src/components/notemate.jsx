import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Link, useNavigate } from 'react-router-dom';
import './notemate.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Notemate = () => {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.to('.fy', {
      scrollTrigger: {
        trigger: '.fy',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
      y: -50,
      opacity: 1,
      duration: 1,
    });
  }, []);

  const handleDiveInClick = () => {
    gsap.to(window, {
      scrollTo: { y: '.fy', offsetY: 50 },
      duration: 0.1,
      ease: 'elastic.inOut',
      onComplete: () => {
        gsap.fromTo(
          '.card',
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power2.out',
            stagger: 0.3,
          }
        );
      },
    });
  };

  const fy_subjects = [
    { className: 'am1', name: 'AM1', content: ['notes', 'videos', 'reference-books'] },
    { className: 'am2', name: 'AM2', content: ['notes', 'videos', 'reference-books'] },
    { className: 'ep', name: 'EP', content: ['notes', 'videos', 'reference-books'] },
    { className: 'em', name: 'EM', content: ['notes', 'videos', 'reference-books'] },
    { className: 'ec', name: 'EC', content: ['notes', 'videos', 'reference-books'] },
    { className: 'ed', name: 'ED', content: ['notes', 'videos', 'reference-books'] },
    { className: 'eeee', name: 'EEEE', content: ['notes', 'videos', 'reference-books'] },
    { className: 'pic', name: 'PIC', content: ['videos'] },
    { className: 'pp', name: 'PP', content: ['videos'] },
  ];

  const sy_subjects = [
    { className: 'itvc', name: 'ITVC', content: ['notes', 'videos', 'reference-books'] },
    { className: 'casot', name: 'CASOT', content: ['notes', 'videos', 'reference-books'] },
    { className: 'dm', name: 'DM', content: ['notes', 'videos', 'reference-books'] },
    { className: 'aec', name: 'AEC', content: ['notes', 'videos', 'reference-books'] },
    { className: 'adc', name: 'ADC', content: ['notes', 'videos', 'reference-books'] },
    { className: 'de', name: 'DE', content: ['notes', 'videos', 'reference-books'] },
    { className: 'ds', name: 'DS', content: ['notes', 'videos', 'reference-books'] },
    { className: 'aoa', name: 'AOA', content: ['notes', 'videos', 'reference-books'] },
    { className: 'oopl', name: 'OOPL', content: ['notes', 'videos', 'reference-books'] },
    { className: 'nss', name: 'NSS', content: ['notes', 'videos', 'reference-books'] },
    { className: 'dbms', name: 'DBMS', content: ['notes', 'videos', 'reference-books'] },
    { className: 'mpmc', name: 'MPMC', content: ['notes',  'reference-books'] },
  ];

  return (
    <div className="landing">
      <nav className="navbar">
        <div className="logo">
          <Link to="/"><img src='/assets/logo.png' alt="e-CESA Logo" /></Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">About Us</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/notemate">Notemate</Link></li>
        </ul>
      </nav>
      <div className="notemate-hero">
        <div className="overlay"></div>
        <div className="notemate-hero-content">
          <h1>NOTEMATE BY E-CESA</h1>
          <p>Your one-stop solution for notes, videos, and reference books</p>
          <button className="button-29" role="button" onClick={handleDiveInClick}>Dive In!</button>
          <div className="down-arrow">↓</div>
        </div>
      </div>
      <h1 className='fy'>FY</h1>
      <div className="cards-grid">
        {fy_subjects.map((subject, index) => (
          <div className={`card ${subject.className}`} key={index}>
            <h3 className="card-title">{subject.name}</h3>
            <div className="card-buttons">
              <button className="view-details-btn" onClick={() => navigate(`/fy/${subject.className}/notes`)}>More Info</button>
            </div>
          </div>
        ))}
      </div>
      <h1 className='sy'>SY</h1>
      <div className="cards-grid">
        {sy_subjects.map((subject, index) => (
          <div className={`card ${subject.className}`} key={index}>
            <h3 className="card-title">{subject.name}</h3>
            <div className="card-buttons">
              <button className="view-details-btn" onClick={() => navigate(`/sy/${subject.className}/notes`)}>More Info</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notemate;