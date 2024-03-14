import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Nav';
import './chatlist.css';
import { Modal, Button } from 'react-bootstrap';

const TestList: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedChatItem, setSelectedChatItem] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const openModal = (item: any) => {
    setSelectedChatItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const chatItems = [
    { id: 1, name: "Test 1", time: "12:00 - 13:00", note: "Note 1" },
    { id: 2, name: "Test 2", time: "14:00 - 15:00", note: "Note 2" }
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
            <h1>Tests Reports</h1>
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
                  <p>Time - {item.time}</p>
                  <p>Note - {item.note}</p>
                  <div>
                    <button className='primary' onClick={() => openModal(item)}>Edit</button>
                    <button className='primary GAP'>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Test</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedChatItem && (
            <>
            <label htmlFor="">Name :</label>
            <br />
            <br />
            <input type="text" value={selectedChatItem.name} />
            <hr />
            <label htmlFor="">Time :</label>
            <br />
            <br />
            <input type="text" value={selectedChatItem.time} />
            <hr />
            <label htmlFor="">Note :</label>
            <br />
            <br />
            <input type="text" value={selectedChatItem.note} />
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button className="primary">
            Save Changes
          </button>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TestList;
