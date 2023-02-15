import './style.css'
import FAQquestions from './components/Question'; 
import womanOnDesktop from './images/illustration-woman-online-desktop.svg';
import boxOver from './images/illustration-box-desktop.svg'
import arrow from './images/icon-arrow-down.svg'
import { useState } from 'react';

const App = () => {

      const [expandedView, setExpandedView] = useState(-1);

      const renderedQuestions = FAQquestions().map((showData, index) => { 
      const isExpanded = index === expandedView;
      const handleClick = () => {
        if (expandedView == index) {
          setExpandedView(-1);
        } else {
          setExpandedView(index);
        }
        
      }

      { return (
                  <div key={showData.id}>
                    <div onClick = {handleClick} className='q-a'>
                      <div className = 'ques'>
                        <span style={{ fontWeight: isExpanded ? "bold" : "normal"}}>
                          {showData.question}
                        </span> 
                        <img src={arrow} alt="arrow" style={{transform: isExpanded ? 'rotate(180deg)':'', transition: '0.3s ease-in-out'}} />
                      </div>
                      {isExpanded && <div className="ans">{showData.answer}</div>}
                    </div>
                  </div> 
                )
      }
    }
  )



  return (
      <div className='card'>
          <div className='bg-ques'>
              <div className='bg-ques-child img' >
                  <div className='women-desktop'>
                      <img src={womanOnDesktop} alt="women"/>
                  </div>
                  <div className='box'>
                      <img src={boxOver} alt="box" />
                  </div>
              </div>
              <div className='bg-ques-child quest' >
                <h1>FAQ</h1> 
                {renderedQuestions} 
              </div> 
          </div>
      </div>    
    )
};

export default App;