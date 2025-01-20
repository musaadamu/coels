import React, { useEffect, useState } from 'react';
import './Results.css'; // External CSS file for styling

export default function Results() {
  const [results, setResults] = useState([]);
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');

  // Fetch results on component mount
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch('/api/results'); // Endpoint to fetch results
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    };

    fetchResults();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload-results', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setUploadMessage(data.message);
      // Re-fetch results after upload
      if (data.success) {
        const updatedResults = await fetch('/api/results');
        setResults(await updatedResults.json());
      }
    } catch (error) {
      console.error('Error uploading results:', error);
      setUploadMessage('Error uploading file.');
    }
  };

  return (
    <div className="results-page-container">
      <header className="results-header">
        <h1>Results Page</h1>
        <h2>College of Education and Legal Studies</h2>
      </header>

      <main className="results-content">
        <form className="upload-form" onSubmit={handleUpload}>
          <div className="form-group">
            <label htmlFor="file">Upload Results File:</label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">Upload Results</button>
          {uploadMessage && <p>{uploadMessage}</p>}
        </form>

        <div className="results-list">
          <h2>Uploaded Results</h2>
          {results.length === 0 ? (
            <p>No results available.</p>
          ) : (
            <ul>
              {results.map((result, index) => (
                <li key={index}>
                  <a href={result.url} target="_blank" rel="noopener noreferrer">
                    {result.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}