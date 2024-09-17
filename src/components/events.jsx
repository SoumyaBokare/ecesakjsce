import { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './events.css';

function Events() {
  const updateCalendar = useCallback(() => {
    const monthSelect = document.getElementById('month-select');
    const selectedMonth = monthSelect.value;
    const calendarTitle = document.getElementById('calendar-title');
    const calendar = document.getElementById('calendar');

    const [year, month] = selectedMonth.split('-').map(Number);
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    calendarTitle.textContent = `${monthNames[month - 1]} ${year}`;

    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDay = new Date(year, month - 1, 1).getDay();

    calendar.innerHTML = '';

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    dayNames.forEach(dayName => {
      const dayHeader = document.createElement('div');
      dayHeader.classList.add('calendar-day', 'day-header');
      dayHeader.textContent = dayName;
      calendar.appendChild(dayHeader);
    });

    for (let i = 0; i < firstDay; i++) {
      const emptyCell = document.createElement('div');
      emptyCell.classList.add('calendar-day', 'empty');
      calendar.appendChild(emptyCell);
    }

    // Sample Events Data
    const events = {
      "2024-08-20": {
        image: "/public/assets/images/grp.JPG",
        description: "Join us for the handover ceremony marking the transfer of councils and the formation of the new council."
      },
      "2024-09-02": {
        image: "/assets/images/btech.png",
        description: "Explore our roadmap for navigating your BTech journey, from core courses to key milestones and basic steps towards career planning."
      },
      "2024-09-05": {
        image: "/public/assets/images/handover1.png",
        description: "Celebrate Teachers' Day with us. A day filled with gratitude and appreciation for our mentors."
      }
    };

    for (let day = 1; day <= daysInMonth; day++) {
      const dayCell = document.createElement('div');
      dayCell.classList.add('calendar-day', 'day-cell');
      dayCell.textContent = day;

      const dateKey = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      if (events[dateKey]) {
        dayCell.classList.add('event');
        dayCell.setAttribute('data-image', events[dateKey].image);
        dayCell.setAttribute('data-description', events[dateKey].description);
        dayCell.addEventListener('click', function() {
          showEventDetails(events[dateKey].image, events[dateKey].description);
        });
      }

      calendar.appendChild(dayCell);
    }
  }, []);

  const showEventDetails = (image, description) => {
    const eventDetails = document.getElementById('event-details');
    const eventImage = document.getElementById('event-image');
    const eventDescription = document.getElementById('event-description');

    eventImage.src = image;
    eventDescription.textContent = description;

    eventDetails.style.display = 'block';
  };

  useEffect(() => {
    updateCalendar();

    const eventDetails = document.getElementById('event-details');
    const closeEventDetailsButton = document.getElementById('close-event-details');

    const hideEventDetails = () => {
      eventDetails.style.display = 'none';
      document.getElementById('event-image').src = '';
      document.getElementById('event-description').textContent = '';
    };

    closeEventDetailsButton.addEventListener('click', hideEventDetails);

    return () => {
      closeEventDetailsButton.removeEventListener('click', hideEventDetails);
    };
  }, [updateCalendar]);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
        <Link to="/"><img src='../public/assets/images/logo.jpg' alt="e-CESA Logo" /></Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">About Us</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/notemate">Notemate</Link></li>
        </ul>
      </nav>
      <div className="calendar-container">
        <div className="calendar-header">
          <select id="month-select" onChange={updateCalendar}>
            <option value="2024-08">August 2024</option>
            <option value="2024-09">September 2024</option>
            <option value="2024-10">October 2024</option>
            <option value="2024-11">November 2024</option>
            <option value="2024-12">December 2024</option>
            <option value="2025-01">January 2025</option>
            <option value="2025-02">February 2025</option>
            <option value="2025-03">March 2025</option>
            <option value="2025-04">April 2025</option>
          </select>
          <h2 id="calendar-title">August 2024</h2>
        </div>
        <div className="calendar" id="calendar"></div>
        <div id="event-details" className="event-details">
          <button id="close-event-details" className="close-button">X</button>
          <img id="event-image" src="" alt="Event Image" />
          <p id="event-description"></p>
        </div>
      </div>
    </>
  );
}

export default Events;