import React, { useState } from "react";
import "./appoint.css";
import Navbar from "./Nav";
const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const appointmentsPerPage = 2;

  const appointments = [
    { date: "March 15, 2024", time: "10:00 AM - 11:00 AM" },
    { date: "March 20, 2024", time: "2:00 PM - 3:00 PM" },
    { date: "March 20, 2024", time: "2:00 PM - 3:00 PM" }
    // Add more appointments as needed
  ];

  const filteredAppointments = appointments.filter((appointment) =>
    appointment.date.toLowerCase().includes(searchText.toLowerCase())
  );

  const totalPages = Math.ceil(filteredAppointments.length / appointmentsPerPage);

  const showPage = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div>
      <Navbar/>
    <div className="container">
      <h1>Appointments</h1>
      <button className="btn invert">Add +</button>
      <h2>Appointment List</h2>
      <hr />
      <input
        type="text"
        className="searchBar"
        placeholder="Search your appointments"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div id="appointments">
        {filteredAppointments
          .slice((currentPage - 1) * appointmentsPerPage, currentPage * appointmentsPerPage)
          .map((appointment, index) => (
            <div className="appointment" key={index}>
              <p>
                <strong>Appointment Date:</strong> {appointment.date}
              </p>
              <p>
                <strong>Time:</strong> {appointment.time}
              </p>
              <div className="buttons">
                <button className="btn lil">Cancel</button>
                <button className="btn">Pay</button>
              </div>
            </div>
          ))}
      </div>
      <div className="pagination">
        <button className="btn invert" onClick={handlePrevPage}>
          &laquo; Prev
        </button>
        <button className="btn invert" onClick={handleNextPage}>
          Next &raquo;
        </button>
      </div>
    </div>
    </div>
  );
};

export default App;
