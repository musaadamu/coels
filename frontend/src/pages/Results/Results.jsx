// import React, { useEffect, useState } from 'react';
// import './Results.css';

// export default function Results() {
//   const [results, setResults] = useState([]);
//   const [file, setFile] = useState(null);
//   const [course, setCourse] = useState('');
//   const [uploadMessage, setUploadMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   // Fetch results on component mount
//   useEffect(() => {
//     const fetchResults = async () => {
//       setLoading(true); // Start loading
//       try {
//         const response = await fetch('/api/results'); // Endpoint to fetch results
//         const data = await response.json();
        
//         if (Array.isArray(data)) {
//           setResults(data);
//         } else {
//           setResults([]);
//           console.error('Expected an array but got:', data);
//         }
//       } catch (error) {
//         console.error('Error fetching results:', error);
//       } finally {
//         setLoading(false); // End loading
//       }
//     };

//     fetchResults();
//   }, []);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleCourseChange = (e) => {
//     setCourse(e.target.value);
//   };

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('course', course);

//     setLoading(true); // Start loading
//     try {
//       const response = await fetch('/api/upload-results', {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await response.json();
//       setUploadMessage(data.message);

//       // Re-fetch results after upload if successful
//       if (data.success) {
//         const updatedResultsResponse = await fetch('/api/results');
//         const updatedResults = await updatedResultsResponse.json();
//         setResults(updatedResults);
//       }
//     } catch (error) {
//       console.error('Error uploading results:', error);
//       setUploadMessage('Error uploading file.');
//     } finally {
//       setLoading(false); // End loading
//     }
//   };

//   return (
//     <div className="results-page-container">
//       <header className="results-header">
//         <h1>Results Page</h1>
//         <h2>College of Education and Legal Studies</h2>
//       </header>

//       <main className="results-content">
//         <form className="upload-form" onSubmit={handleUpload}>
//           <div className="form-group">
//             <label htmlFor="course">Select Course:</label>
//             <select id="course" value={course} onChange={handleCourseChange} required>
//               <option value="">Select</option>
//               <option value="Course 1">Course 1</option>
//               <option value="Course 2">Course 2</option>
//               <option value="Course 3">Course 3</option>
//               <option value="Course 4">Course 4</option>
//               <option value="Course 5">Course 5</option>
//               <option value="Course 6">Course 6</option>
//               <option value="Course 7">Course 7</option>
//               <option value="Course 8">Course 8</option>
//               <option value="Course 9">Course 9</option>
//               <option value="Course 10">Course 10</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="file">Upload Results File:</label>
//             <input
//               type="file"
//               id="file"
//               onChange={handleFileChange}
//               required
//             />
//           </div>
//           <button type="submit" className="submit-button" disabled={loading}>
//             {loading ? 'Uploading...' : 'Upload Results'}
//           </button>
//           {uploadMessage && <p className="upload-message">{uploadMessage}</p>}
//         </form>

//         <div className="results-list">
//           <h2>Uploaded Results</h2>
//           {loading ? (
//             <p>Loading results...</p>
//           ) : results.length === 0 ? (
//             <p>No results available.</p>
//           ) : (
//             <table>
//               <thead>
//                 <tr>
//                   <th>Course</th>
//                   <th>File</th>
//                   <th>Uploaded At</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {results.map((result, index) => (
//                   <tr key={index}>
//                     <td>{result.course}</td>
//                     <td>
//                       <a href={result.fileUrl} target="_blank" rel="noopener noreferrer">
//                         View File
//                       </a>
//                     </td>
//                     <td>{new Date(result.uploadedAt).toLocaleString()}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import './Results.css';

export default function Results() {
  const [results, setResults] = useState([]);
  const [file, setFile] = useState(null);
  const [course, setCourse] = useState('');
  const [uploadMessage, setUploadMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch results on component mount
  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/results'); // Endpoint to fetch results
        const data = await response.json();

        if (Array.isArray(data)) {
          setResults(data);
        } else {
          setResults([]);
          console.error('Expected an array but got:', data);
        }
      } catch (error) {
        console.error('Error fetching results:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('course', course);

    setLoading(true);
    try {
      const response = await fetch('/api/upload-results', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setUploadMessage(data.message);

      // Re-fetch results after upload if successful
      if (data.success) {
        const updatedResultsResponse = await fetch('/api/results');
        const updatedResults = await updatedResultsResponse.json();
        setResults(updatedResults);
      }
    } catch (error) {
      console.error('Error uploading results:', error);
      setUploadMessage('Error uploading file.');
    } finally {
      setLoading(false);
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
            <label htmlFor="course">Select Course:</label>
            <select id="course" value={course} onChange={handleCourseChange} required>
              <option value="">Select</option>
              <option value="Course 1">Course 1</option>
              <option value="Course 2">Course 2</option>
              <option value="Course 3">Course 3</option>
              <option value="Course 4">Course 4</option>
              <option value="Course 5">Course 5</option>
              <option value="Course 6">Course 6</option>
              <option value="Course 7">Course 7</option>
              <option value="Course 8">Course 8</option>
              <option value="Course 9">Course 9</option>
              <option value="Course 10">Course 10</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="file">Upload Results File:</label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              required
            />
          </div>
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Uploading...' : 'Upload Results'}
          </button>
          {uploadMessage && <p className="upload-message">{uploadMessage}</p>}
        </form>

        <div className="results-list">
          <h2>Uploaded Results</h2>
          {loading ? (
            <p>Loading results...</p>
          ) : results.length === 0 ? (
            <p>No results available.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>File</th>
                  <th>Uploaded At</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <tr key={index}>
                    <td>{result.course}</td>
                    <td>
                      <a href={result.fileUrl} target="_blank" rel="noopener noreferrer">
                        View File
                      </a>
                    </td>
                    <td>{new Date(result.uploadedAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}