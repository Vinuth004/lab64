import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './settings.css';
import Navbar from './Nav';
const UserSettings: React.FC = () => {
    const handleDeleteAccount = () => {
        if (window.confirm("Are you sure you want to delete your account?")) {
            // Code to delete account goes here
            window.alert("Account deleted successfully!");
        }
    };

    const handleLogout = () => {
        // Code to logout goes here
        window.alert("Logged out successfully!");
    };

    return (
        <div>
        <Navbar />
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h3>User Settings</h3>
                </div>
                <div className="card-body">
                    <form id="settings-form">
                        <div className="form-group">
                            <label htmlFor="username">Change Username:</label>
                            <input type="text" id="username" name="username" className="form-control" placeholder="Enter new username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Change Password:</label>
                            <input type="password" id="password" name="password" className="form-control" placeholder="Enter new password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Change Address:</label>
                            <input type="text" id="address" name="address" className="form-control" placeholder="Enter new address" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobile">Change Mobile Number:</label>
                            <input type="number" id="mobile" name="mobile" className="form-control" placeholder="Enter new mobile number" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Save Changes</button>
                    </form>
                    <hr />
                    <button className="btn btn-danger" onClick={handleDeleteAccount}>Delete Account</button>
                    <a href="#" className="btn btn-secondary mt-3" onClick={handleLogout}>Logout</a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default UserSettings;
