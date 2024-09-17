import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import modulesConfig from '../config/modulesConfig';
import subjectData from '../data/subject.json'; // Import the JSON file for notes
import videoData from '../data/video.json'; // Import the JSON file for videos
import bookData from '../data/reference.json'; // Import the JSON file for books
import './contentPage.css';

const ContentPage = () => {
  const { year, subject } = useParams();
  const navigate = useNavigate(); 
  const [selectedModule, setSelectedModule] = useState(null);
  const [pdfPaths, setPdfPaths] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [pdfError, setPdfError] = useState(null);

  useEffect(() => {
    if (selectedModule) {
      const moduleData = subjectData[year][subject].modules[selectedModule - 1];
      if (moduleData) {
        const paths = moduleData.paths.map(path => path.replace('../public', '')); // Adjust the paths
        setPdfPaths(paths);
        setSelectedPdf(paths[0]); // Default to the first PDF
        setPdfError(null);
      } else {
        setPdfPaths([]);
        setSelectedPdf(null);
        setPdfError('Module data not found');
      }
    }
  }, [selectedModule, subject, year]);

  const handleModuleClick = (index) => {
    setSelectedModule(index + 1);
  };

  const handleVideoClick = () => {
    const videoDataForSubject = videoData[year][subject];
    if (videoDataForSubject) {
      const paths = videoDataForSubject.videos.map(path => path.replace('/public', '')); // Adjust the paths
      setPdfPaths(paths);
      setSelectedPdf(paths[0]); // Default to the first PDF
      setPdfError(null);
    } else {
      setPdfPaths([]);
      setSelectedPdf(null);
      setPdfError('Video data not found');
    }
  };

  const handleBookClick = () => {
    const bookDataForSubject = bookData[year][subject];
    if (bookDataForSubject) {
      const paths = bookDataForSubject.books.map(path => path.replace('/public', '')); // Adjust the paths
      setPdfPaths(paths);
      setSelectedPdf(paths[0]); // Default to the first PDF
      setPdfError(null);
    } else {
      setPdfPaths([]);
      setSelectedPdf(null);
      setPdfError('Book data not found');
    }
  };

  const handleExitClick = () => {
    navigate('/notemate');
  };

  const renderContent = () => {
    return (
      <div className="content-page">
        <div className="sidebar">
          <h2 className='module-title'>{subject.toUpperCase()} Modules</h2>
          <ul>
            {modulesConfig[subject]?.map((module, index) => (
              <li key={index}>
                <button onClick={() => handleModuleClick(index)}>
                  {module}
                </button>
              </li>
            ))}
          </ul>
          <button className="more-info-button" onClick={handleVideoClick}>
            Videos
          </button>
          <button className="more-info-button" onClick={handleBookClick}>
            Books
          </button>
          <button className="exit-button" onClick={handleExitClick}>
            Exit
          </button>
        </div>
        <div className="main-content">
          {pdfPaths.length > 0 && (
            <>
              <div className="pdf-list">
                <h3>Select a PDF to view:</h3>
                <ul>
                  {pdfPaths.map((path, index) => (
                    <li key={index}>
                      <button onClick={() => setSelectedPdf(path)}>
                        {decodeURIComponent(path.split('/').pop())}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              {selectedPdf && (
                <iframe
                  src={`${selectedPdf}`}
                  width="100%"
                  height="600px"
                  title="PDF Viewer"
                  onError={() => setPdfError('Failed to load PDF')}
                />
              )}
            </>
          )}
          {pdfPaths.length === 0 && (
            <div className="error-message">{pdfError || 'No PDFs found'}</div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/"><img src='/path/to/logo.png' alt="e-CESA Logo" /></Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">About Us</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/notemate">Notemate</Link></li>
        </ul>
      </nav>
      <div>
        {renderContent()}
      </div>
    </>
  );
};

ContentPage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ContentPage;