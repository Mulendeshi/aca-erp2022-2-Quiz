
import React from 'react';
import '../cssFiles/sideBar.css'; 
import topic1Image from '../images/Thor.jpg'; 
import topic2Image from '../images/Rocket and Groot.jpg'; 
import topic3Image from '../images/IronMan.jpg'; 
import topic4Image from '../images/Natasha.jpg';

interface SidebarProps {
    handleTopicClick: (topic: string) => void;
  }
const Sidebar: React.FC<SidebarProps> = ({handleTopicClick}) => {
  return (
    <aside className="sidebar">
      <h2>Select Character</h2>
      <div className="topic-list">
        <div className="topic-item" onClick={() => handleTopicClick('Topic 1')}>
          <img src={topic1Image} alt="Thor" />
          <p>Thor Odinson</p>
        </div>
        <div className="topic-item" onClick={() => handleTopicClick('Topic 2')}>
          <img src={topic2Image} alt="Rocket and Groot" />
          <p>Rocket and Groot</p>
        </div>
      </div>
      <div className="topic-list">
        <div className="topic-item" onClick={() => handleTopicClick('Topic 1')}>
          <img src={topic3Image} alt="Iron Man" />
          <p>Iron Man</p>
        </div>
        <div className="topic-item" onClick={() => handleTopicClick('Topic 2')}>
          <img src={topic4Image} alt="Natasha" />
          <p>Natasha</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
