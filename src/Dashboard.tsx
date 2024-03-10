import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Plot from 'react-plotly.js';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('user');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(8); // Number of rows per page
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const switchScreen = (screen:string) => {
    setCurrentScreen(screen);
    setIsOpen(false); // Close the menu when a screen is selected
  };

  // Sample data for demonstration
  const data = [
    { name: 'John', email: 'john@example.com' },
    { name: 'Jane', email: 'jane@example.com' },
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
    { name: 'Eve', email: 'eve@example.com' },
    { name: 'Alex', email: 'alex@example.com' },
    { name: 'Sophia', email: 'sophia@example.com' },
    { name: 'Michael', email: 'michael@example.com' },
    { name: 'Emily', email: 'emily@example.com' },
    { name: 'William', email: 'william@example.com' }
    // Add more sample data as needed
  ];

  // Filter data based on search term
  const filteredData = data.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the index of the first and last row of the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const paginate = (pageNumber:number) => setCurrentPage(pageNumber);

  return (
    <div className="app">
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={() => switchScreen('user')}>User Management</li>
          <li onClick={() => switchScreen('heir')}>Hierarchy Management</li>
          <li onClick={() => switchScreen('reports')}>Reports</li>
        </ul>
      </nav>
      <header>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </header>
      <main>
        {currentScreen === 'user' && (
          <div>
            <h1>User Management</h1>
            {/* Search input */}
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                  {/* Add more headers as needed */}
                </tr>
              </thead>
              <tbody>
                {/* Display current rows */}
                {currentRows.map((row, index) => (
                  <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>
                      <button>Edit</button>
                      <button>Delete</button>
                    </td>
                    {/* Add more columns as needed */}
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Pagination */}
            <div className="pagination">
              <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                Previous
              </button>
              <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastRow >= filteredData.length}>
                Next
              </button>
            </div>
          </div>
        )}
        {currentScreen === 'heir' && (
          <div>
          <h1>Heirarchy Management</h1>
          {/* Search input */}
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
                {/* Add more headers as needed */}
              </tr>
            </thead>
            <tbody>
              {/* Display current rows */}
              {currentRows.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                  {/* Add more columns as needed */}
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="pagination">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </button>
            <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastRow >= filteredData.length}>
              Next
            </button>
          </div>
        </div>
        )}
        {currentScreen === 'reports' && (
        <div>
      <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: 'scatter',
          mode: 'lines+markers',
          marker: {color: 'red'},
        },
        {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
      ]}
      layout={ {title: 'A Fancy Plot'} }
    />
    </div>
        )}
      </main>
    </div>
  );
}

export default App;
