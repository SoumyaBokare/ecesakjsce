
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/landing';
import Contact from './components/contact';
import Events from './components/events';
import Notemate from './components/notemate';
import ContentPage from './components/contentpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} key="landing" />
        <Route path="/contact" element={<Contact />} key="contact" />
        <Route path="/events" element={<Events />} key="events" />
        <Route path="/notemate" element={<Notemate />} key="notemate" />
        <Route path="/:year/:subject/notes" element={<ContentPage type="notes" />} key="notes" />
        <Route path="/:year/:subject/videos" element={<ContentPage type="videos" />} key="videos" />
        <Route path="/:year/:subject/reference-books" element={<ContentPage type="reference-books" />} key="reference-books" />
      </Routes>
    </Router>
  );
}

export default App;