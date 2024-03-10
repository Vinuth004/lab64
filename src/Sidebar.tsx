import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './Sidebar.css';

interface SidebarProps {
  activeOption: string;
  handleOptionClick: (option: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeOption, handleOptionClick }) => {
  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logging out...");
  };

  return (
    <div id="sidebar">
      <div className="sidebar-header">
        <img src="https://clipart-library.com/img/685525.png" alt="Logo" className="logo" />
      </div>
      <label>
        Welcome, Ushanzz
      </label>
      <hr />
      <ListGroup variant="flush">
        <ListGroup.Item
          action
          onClick={() => handleOptionClick('User Management')}
          active={activeOption === 'User Management'}
        >
          User Management
        </ListGroup.Item>
        <ListGroup.Item
          action
          onClick={() => handleOptionClick('Hierarchy Management')}
          active={activeOption === 'Hierarchy Management'}
        >
          Hierarchy Management
        </ListGroup.Item>
        <ListGroup.Item
          action
          onClick={() => handleOptionClick('Reports')}
          active={activeOption === 'Reports'}
        >
          Reports
        </ListGroup.Item>
        <hr />
        <ListGroup.Item
          action
          onClick={handleLogout}
        >
          Logout
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
