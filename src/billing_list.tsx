import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Nav';
import './chatlist.css';
import {  Button } from 'react-bootstrap';

const Billlist: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');


  const chatItems = [
    { id: 1, name: "Payment 1", time: "2023/12/01 12:30", note: "Note 1" },
    { id: 2, name: "Payment 2", time: "2023/12/25 14:30", note: "Note 2" }
  ];

  // Filter chat items based on search query
  const filteredChatItems = chatItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <br />
            <h1>Payment Reports</h1>
            <hr />
            <hr />
            <div id="searchBarWrapper" className="">
              <input
                type="text"
                className="form-control search-bar"
                placeholder="Search..."
                id="searchInput"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <hr />
            <ul className="chat-list" id="chatList">
              {filteredChatItems.map((item) => (
                <li className="chat-item" key={item.id}>
                  <h5>{item.name}</h5>
                  <p>Date Time - {item.time}</p>
                  <p>Payment - {item.note}</p>
                  <div>
                    <Button  variant='danger'>Delete</Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Billlist;
