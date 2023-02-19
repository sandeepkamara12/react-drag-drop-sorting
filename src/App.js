import './App.css';
import { useState } from 'react';

function App() {
  let clonedUsers = [];
  let dragStartIndex;

  const initialValue = [
    { name: 'sandeep', sort: Math.random() },
    { name: 'deepak', sort: Math.random() },
    { name: 'anshdeep', sort: Math.random() },
    { name: 'shilpa', sort: Math.random() },
  ];
  const [users, setUsers] = useState(initialValue);


  function dragStart(index) {
    dragStartIndex = index;
  }
  function dragEnter(e) {
    e.target.classList.add('over');
  }
  function dragLeave(e) {
    e.target.classList.remove('over');
  }
  function dragOver(e) {
    // e.target.classList.add('over');
    e.preventDefault();
  }
  function dragDrop(e, index) {
    // e.target.classList.remove('over');
    const dragEndIndex = index;
    swapItems(dragStartIndex, dragEndIndex);
    e.target.classList.remove('over');
  }
  function swapItems(fromIndex, toIndex) {
    clonedUsers = [...users];
    const dragItemContent = clonedUsers[fromIndex];
    clonedUsers.splice(fromIndex, 1);
    clonedUsers.splice(toIndex, 0, dragItemContent);
    setUsers(clonedUsers);
  }

  return (
    <div className="App">
      <ul className="draggable-list" id="draggable-list">
        {
          users.map((user, index) => (
            <li key={index} data-index={index} onDragEnter={(e) => dragEnter(e)} onDragLeave={(e) => dragLeave(e)} onDragOver={dragOver} onDrop={(e) => dragDrop(e, index)}>
              <span className='number'>{index + 1}</span>
              <div className="draggable" draggable="true" onDragStart={() => dragStart(index)}>
                <span className="person-name">{user.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '15px' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
