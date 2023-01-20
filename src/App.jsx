import './style.css'
import womanOnDesktop from './images/illustration-woman-online-desktop.svg';
import boxOver from './images/illustration-box-desktop.svg'
import arrow from './images/icon-arrow-down.svg'
import { useState } from 'react';

const App = () => {

    const [expandedView, setExpandedView] = useState(-1);

    const questions = [
        {
          id: 1,
          question: 'How many team members can I invite?',
          answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
        },
        {
          id: 2,
          question: 'What is the maximum file upload size?',
          answer: 'No more than 2GB. All files in your account must fit your allotted storage space.'
        },
        {
          id: 3,
          question: 'How do I reset my password?',
          answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
        },
        {
          id: 4,
          question: 'Can I cancel my subscription?',
          answer: "Yes! Send us a message and we'll process your request no questions asked."
        },
        {
          id: 5,
          question: 'Do you provide additional support?',
          answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
        }
      ];

      const renderedQuestions = questions.map((showData, index) => { 
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
                        <div className = 'ques'><span style={{ fontWeight: isExpanded ? "bold" : "normal"}}>{showData.question}</span> <img src={arrow} alt="arrow" style={{transform: isExpanded ? 'rotate(180deg)':'', transition: '0.3s ease-in-out'}} /></div>
                        {isExpanded && <div className="ans">{showData.answer}</div>}
                      </div>
                    </div> 
                     )}}
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
                <div className='bg-ques-child quest' ><h1>FAQ</h1> {renderedQuestions} </div> 
            </div>
        </div>    
    )
}

export default App;