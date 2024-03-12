import React from 'react';
import './new_app.css'
import Navbar from './Nav';
class AppointmentForm extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1>New Appointment</h1>
                <hr />
                <br />
                <form id="appointmentForm">
                    <label htmlFor="date">Select Date:</label>
                    <input type="date" id="date" name="date" required />

                    <label htmlFor="time">Select Time:</label>
                    <input type="time" id="time" name="time" required />

                    <label htmlFor="clinicalTest">Select Clinical Test:</label>
                    <select id="clinicalTest" name="clinicalTest" required>
                        <option value="">Select...</option>
                        <option value="bloodTest">Blood Test</option>
                        <option value="urineTest">Urine Test</option>
                        <option value="xray">X-ray</option>
                        {/* Add more options as needed */}
                    </select>

                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" required></textarea>

                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default AppointmentForm;
