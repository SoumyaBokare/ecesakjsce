
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
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path ="/events" element={<Events />} />
        <Route path ="/notemate" element={<Notemate />} />
        <Route path="/:year/:subject/notes" element={<ContentPage type="notes" />} />
        <Route path="/:year/:subject/videos" element={<ContentPage type="videos" />} />
        <Route path="/:year/:subject/reference-books" element={<ContentPage type="reference-books" />} />
      </Routes>
    </Router>
  );
}

export default App;