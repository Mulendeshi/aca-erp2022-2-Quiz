import React from "react";
import '../cssFiles/MainContent.css';
import topic1Image from '../images/Thor.jpg';
import topic2Image from '../images/Rocket and Groot.jpg';

interface MainContentProps {
    selectedTopic: string;
  }
const MainContent: React.FC<MainContentProps> = ({selectedTopic}) => {

    return (
        <main className="main-content">
            <div className="topic-image">
               {/* <img src={topic1Image} alt="Thor Odinson" />*/}
            </div>
            <div>
                <h3>
                    Thor Odinson
                </h3>
                <p>
                    He is the God of Thunder
                </p>
            </div>

        </main>
    )
}
export default MainContent;