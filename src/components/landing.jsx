import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './landing.css';

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.to(heroRef.current, {
      yPercent: 20,
      scale: 1.05,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(imageRef.current, {
      yPercent: -20,
      scale: 1.05,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.fromTo(
      ".section-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".section-title",
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      ".about__p, .benefits__p",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".about__p, .benefits__p",
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
      }
    );
  }, []);

  const handleContactClick = () => {
    navigate('/contact');
    navigate('/events');
  };

  return (
    <div className="landing">
      <nav className="navbar">
        <div className="logo">
          <Link to="/"><img src='../public/assets/images/logo.jpg' alt="e-CESA Logo" /></Link>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About Us</a></li>
          <li><Link to="/events">Events</Link></li>
          <li><a href="#contact" onClick={handleContactClick}>Contact Us</a></li>
          <li><Link to="/notemate">Notemate</Link></li>
        </ul>
      </nav>

      <section className="header hero-section" ref={heroRef}>
        <h1 className="title welcome-message">Welcome to e-CESA</h1>
        <div className="header__img group-photo">
          <img src="../assets/images/grp.JPG" alt="Group" ref={imageRef} />
        </div>
      </section>

      <section className="about about-us-section glass-effect" id="about">
        <h2 className="section-title">About Us</h2>
        <p className="about__p">
          Welcome to e-CESA, the Electronics and Computer Engineering Student Association at KJ Somaiya College of Engineering. We are a dynamic community dedicated to fostering innovation, hands-on learning, and professional growth among students. Our mission is to bridge the gap between academic knowledge and industry demands by providing a platform for students to develop practical skills and explore career opportunities in electronics and computer engineering.
        </p>
      </section>

      <section className="why-we-exist-section glass-effect">
        <h2 className="section-title">Why We Exist</h2>
        <p className="benefits__p">
          e-CESA was founded with a clear purpose: to empower students in electronics and computer engineering to thrive in an ever-evolving technological landscape. We recognize that the demands of the modern world require more than just theoretical knowledge; they require practical experience, innovation, and a deep understanding of how to apply concepts in real-world scenarios.
        </p>
      </section>

      <section className="work meet-our-members-section">
        <h2 className="section-title">Meet Our Members</h2>
        
        <div className="team-section">
          <h3 className="team-title">Core Team</h3>
          <div className="members core-team">
            <div className="member pratham">
              <p className='member-title'>Pratham Chintrate<br />(General Secretary)</p>
            </div>
            <div className="member soumya">
              <p className='member-title'>Soumya Bokare<br />(Joint General Secretary)</p>
            </div>
            <div className="member arpita">
              <p className='member-title'>Arpita Singh<br />(Joint General Secretary)</p>
            </div>
            <div className="member hrishikesh">
              <p className='member-title'>Hrishikesh Chanekar<br />(Treasurer)</p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h3 className="team-title">Tech Team</h3>
          <div className="members tech-team">
            <div className="member tejas">
              <p className='member-title'>Tejas Kamath<br />(Tech Head)</p>
            </div>
            <div className="member piyush">
              <p className='member-title'>Piyush Tyagi<br />(Tech Head)</p>
            </div>
            <div className="member miten">
              <p className='member-title'>Miten Bhandari<br />(Tech Head)</p>
            </div>
            <div className="member siya">
              <p className='member-title'>Siya Naulakha<br />(Joint Tech Head)</p>
            </div>
            <div className="member aamir">
              <p className='member-title'>Aamir Arsiwala<br />(Joint Tech Head)</p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h3 className="team-title">Creative Team</h3>
          <div className="members creative-team">
            <div className="member purva">
              <p className='member-title'>Purva Bhadawkar<br />(Creative Head)</p>
            </div>
            <div className="member priyanshu">
              <p className='member-title'>Priyanshu Mishra<br />(Creative Head)</p>
            </div>
            <div className="member rishabh">
              <p className='member-title'>Rishabh Karpe<br />(Joint Creative Head)</p>
            </div>
            <div className="member ajeet">
              <p className='member-title'>Ajeet Jaiswar<br />(Joint Creative Head)</p>
            </div>
            <div className="member arnav">
              <p className='member-title'>Arnav Desai<br />(Joint Creative Head)</p>
            </div>
            <div className="member swajeet">
              <p className='member-title'>Swajeet Salvi<br />(Joint Creative Head)</p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h3 className="team-title">PR Team</h3>
          <div className="members pr-team">
            <div className="member aliasgar">
              <p className='member-title'> Aliasgar Attarwala<br />(PR Head)</p>
            </div>
            <div className="member aarohi">
              <p className='member-title'>Aarohi Dabholkar<br />(PR Head)</p>
            </div>
            <div className="member jaiee">
              <p className='member-title'>Jaiee Paradkar<br />(Joint PR Head)</p>
            </div>
            <div className="member lomte">
              <p className='member-title'>Piyush Lomte <br />(Joint PR Head)</p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h3 className="team-title">Marketing Team</h3>
          <div className="members marketing-team">
            <div className="member chirayu">
              <p className='member-title'>Chirayu Tak<br />(Marketing Head)</p>
            </div>
            <div className="member takshil">
              <p className='member-title'>Takshil<br />(Marketing Head)</p>
            </div>
            <div className="member jhanvi">
              <p className='member-title'>Jhanvi<br />(Joint Marketing Head)</p>
            </div>
            <div className="member purva_2">
              <p className='member-title'>Purva Mangle<br />(Joint Marketing Head)</p>
            </div>
            <div className="member shrutika">
              <p className='member-title'>Shrutika Tambe<br />(Joint Marketing Head)</p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h3 className="team-title">Literary Team</h3>
          <div className="members literary-team">
            <div className="member arun">
              <p className='member-title'>Arun Dange<br />(Literary Head)</p>
            </div>
            <div className="member swapnil">
              <p className='member-title'>Swapnil Ranadive<br />(Literary Head)</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__div">
          Made with ❤️ by <br></br>
          E-CESA KJSCE
        </div>
      </footer>
    </div>
  );
};

export default Landing;