import { useState } from 'react';
import './App.css';
import Header from './Components/HeaderComponent';
//import logo from './Components/avglogo.png'
import Sidebar from './Components/sideBar';
import MainCont from './Components/MainContent';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './myPages/Home'; // Import the Home component
import Synopsis from './myPages/Synopsis'; // Import the Synopsis component
import Cast from './myPages/Cast'; // Import the Cast component
import Gallery from './myPages/Gallery'; // Import the Gallery component
import Trailer from './myPages/Trailer'; // Import the Trailer component



const App: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>('');

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="App">
        <Header></Header>
        <div className='content-container'>
        <Sidebar handleTopicClick={handleTopicClick} />
        {/* <Route path="/"  Component={Home} />
        <Route path="/synopsis" Component={Synopsis} />
          <Route path="/cast" Component={Cast} />
          <Route path="/gallery" Component={Gallery} />
          <Route path="/trailer" Component={Trailer} /> */}
        <MainCont selectedTopic={selectedTopic} />
        </div>
    </div>
  );
}

export default App;
