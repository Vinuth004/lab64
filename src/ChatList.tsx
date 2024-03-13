import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './chatlist.css';

const ChatList: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value.toLowerCase());
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <br />
          <h1>Feedbacks/Help calls</h1>
          <hr />
          <hr />
          <div id="searchBarWrapper" className="">
            <input
              type="text"
              className="form-control search-bar"
              placeholder="Search..."
              id="searchInput"
              value={searchText}
              onChange={handleSearch}
            />
          </div>
          <hr />
          <ul className="chat-list" id="chatList">
            {/* Chat items */}
            <li className="chat-item">
              <h5>Sender Name 1</h5>
              <p>Sent Time: 12:34 PM</p>
              <p>Message Content Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li className="chat-item">
              <h5>Sender Name 2</h5>
              <p>Sent Time: 1:45 PM</p>
              <p>Message Content Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </li>
            <li className="chat-item">
              <h5>Sender Name 3</h5>
              <p>Sent Time: 2:30 PM</p>
              <p>Message Content Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </li>
            <li className="chat-item">
              <h5>Sender Name 3</h5>
              <p>Sent Time: 2:30 PM</p>
              <p>Message Content Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </li>
            <li className="chat-item">
              <h5>Sender Name 3</h5>
              <p>Sent Time: 2:30 PM</p>
              <p>Message Content Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </li>
            <li className="chat-item">
              <h5>Sender Name 3</h5>
              <p>Sent Time: 2:30 PM</p>
              <p>Message Content Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
