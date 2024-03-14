import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import { ArrowLeft } from 'react-bootstrap-icons';

const Navbar: React.FC = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Navigate back one step in history
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">
                <img src="logo.png" alt="Logo" />
            </a>
                        <button className="nav-link btn btn-link bg-primary" onClick={goBack}><ArrowLeft />Back</button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <a className="nav-link" href="/">Appointments</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/tests">Test Reports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/billing">Billing Reports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/feedback">Feedbacks/Help</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/settings">Settings</a>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
