import { useState } from "react";
import MainText from "./MainText";
import Toolbar from "./Toolbar";
import partA from "../Data/partA";
import swal from 'sweetalert'
import { Dialog, DialogContent } from '@mui/material';
import Body from './HTMLRender';

const DecisionLayout = (props) => {
  const [decisionStarted, startDecision] = useState(true);
  const [selected, updateSelected] = useState([]);
  const [feedback, updateFeedback] = useState([]);
  const [decisionData] = useState(partA)
  const [index,updateIndex] = useState(1);
  const [decisionEnded, endDecision] = useState(false)
  const [showAdvance, setAdvance] = useState(false)
  const [input, setInput] = useState([])
  const [open, setOpen] = useState(false)
  const [multipleFeedback, setMultipleFeedback] = useState(``)
  const [showMultipleFeedback, updateShowMultipleFeedback] = useState(false)
 
  // when hitting submit, add open text entry to local storage to save for later
    function handleInput(text){
     let data = input;
     localStorage.setItem(text, data);
     swal({
      title: `Your responses`,
      text: `${data}`,
    }).then(() => {
      advance();
    });
    
    
    }
 

  function advance() {

    setAdvance(false)
    // if we have data, add it here.
    // we need to get the object back, so search for it here.
    if(decisionData[index].end) {
      console.log("end")
      updateFeedback([])
      startDecision(false)
      endDecision(true)
      updateIndex(1)
      updateSelected([])
    } else {
      for (let i = 0; i < selected.length; i++) {
        if (selected[i].conditions){
          let condition = selected[i].conditions;
          let nextIndex = (parseInt(index) + 1).toString();
          updateFeedback([])
          if (condition.type !== "end") {
            updateIndex(nextIndex)
          } else {
            updateFeedback([])
            startDecision(false)
            endDecision(true)
            updateIndex(1)
            updateSelected([])
            }
        } 
        }
    }
 
    }
 
 
  function handleChange (event, option){
    let feedbackDisplay = [];
    if (option.feedback.length > 0) {
      feedbackDisplay.push(option.feedback);
    }
    let selected = [
      {
        text: event.target.value,
        conditions: option.conditions,
        feedback: option.feedback,
      },
    ];
    updateSelected(selected)
    setAdvance(true)
    updateFeedback(feedbackDisplay)
   
  };

  function handleMultipleChange(event, option){
    let choices = selected;
    let feedbackDisplay = feedback;
    if (option.feedback.length > 0) {
      feedbackDisplay.push(option.feedback);
    }
    choices.push({
      text: event.target.value,
      conditions: option.conditions,
      feedback: option.feedback,
    });
    updateSelected(selected)
    updateFeedback(feedbackDisplay)
  };
  function showFeedback(feedback){
    setMultipleFeedback(feedback);
    updateShowMultipleFeedback(true)
  }

  return (
    <div className="layout-page">
      <div className="flex-box flex-end">
     {/* <audio controls autoPlay src="https://chaplaincy-innovation-lab-lessons.s3.us-east-1.amazonaws.com/2025-01/sad-emotional-and-dramatic-piano-237661.mp3">
      </audio>  */}
      </div>
     
      <div className="flex-box flex-center">
        <div className="column-lg-10 column-md-12 column-sm-12">
          {props.activeScene.title !== null && (
            <h2>
              <span className="title">{props.activeScene.title}</span>
            </h2>
          )}
        </div>
      </div>
      {!decisionStarted && !decisionEnded && (
        <div>
        
          <div className="flex-box flex-center">
            <div className="column-lg-10 column-md-12 column-sm-12 text-spotlight text-blue">
              {props.activeScene.text.map((text, i) => {
                return <MainText className={`none`} text={text} key={i} />;
              })}
            </div>
        
            <div className="column-lg-10 column-md-12 column-sm-12">
              {props.activeScene.images && (
                <div className="flex-box flex-center image-div">
                  {props.activeScene.images.map((image, j) => {
                   return <img src={image.image} key={j} alt={image.alt}/>;
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="flex-box flex-center nav-buttons">
         
            <button className="button" onClick={() => startDecision(true)}>
              Start
            </button>
          </div>
        </div>
      )}
      <div className="flex-box flex-center">
        {decisionStarted && (
          <div className="column-lg-10 column-md-12 column-sm-12 text-spotlight text-blue">
            <MainText
              className={`none`}
              text={decisionData[index].question}
            />
            {decisionData[index].type === "choice" ? (<div>
             <div className="padding-sm">
             <p>Select the option below that you think is best:</p>
            </div>
            <div className="decision-area flex-box">
              {decisionData[index].options.map((option, i) => {
                return (
                  <div
                    key={i}
                    className="column-lg-4 column-md-4 column-sm-4"
                  >
                    <div className="answer-select">
                      {decisionData[index].multipleSelect && (
                        <input
                          type="checkbox"
                          value={option.text}
                          onChange={(event) =>
                            handleMultipleChange(event, option)
                          }
                          checked={selected.find(
                            (element) => element.text === option.text
                          )}
                        />
                      )}
                      {!decisionData[index].multipleSelect && (
                        <input
                          type="radio"
                          id={option.text}
                          name="choice"
                          value={option.text}
                          onChange={(event) =>
                            handleChange(event, option)
                          }
                          checked={selected.find(
                            (element) => element.text === option.text
                          )}
                        />
                      )}
                      <label className="label" htmlFor={option.text}>
                        {option.text}
                      </label>
                    </div>
                  </div>
                );
              })}
              <div className="feedback-div">
                {feedback.length > 0 && <h3>Feedback:</h3>}
                {feedback.map((feedback, i) => {
                  return (
                    <p key={i} className="true feedback">
                      {feedback}
                    </p>
                  );
                })}
                
              </div>
            </div>
            {decisionData[index].submit !== undefined && <div className="flex-box flex-end">{!showMultipleFeedback ? (<button className="button button-small" onClick={()=>showFeedback(decisionData[index].multipleFeedbackData)}>submit</button>):(<div>  <p className="true feedback">
                      {multipleFeedback}
                    </p> <div className="flex-box flex-end">
                {" "}
                <button
                  className="button button-small"
                  onClick={() => advance()}
                >
                  next
                </button>
              </div></div>) }</div>}
            {selected.length !== 0 && showAdvance && (
              <div className="flex-box flex-end">
                {" "}
                <button
                  className="button button-small"
                  onClick={() => advance()}
                >
                  next
                </button>
              </div>
            )}</div>):(<div>{decisionData[index].type === "open" ? (<div className="decision-area flex-box">
            {decisionData[index].options.map((option, i) => {
              return (
                <div
                  key={i}
                  className="flex-column flex-end input-area"
                >
                     <Body text={option.text} />
                  <input type="text" onChange={e => setInput(e.target.value)}/>
                  <div className="flex-box flex-end">
            <button className="button button-small"  onClick={e => handleInput(option.text)}>submit</button>
            </div>
                </div>
              );
            })}
            </div>):(  <div className="flex-box flex-end">
                {" "}
                <button
                  className="button button-small"
                  onClick={() => advance()}
                >
                  next
                </button>
              </div>)}
           
     
            </div>)}
           
            
          </div>
        )}
      </div>
      {decisionData[index].popUp !== undefined &&  <div className="flex-box flex-between nav-buttons">
             <button onClick={()=>setOpen(true)}><img  className="animate-float icon" src="https://chaplaincy-innovation-lab-lessons.s3.amazonaws.com/organizational/post-it.svg"  alt="learn more"/></button>
                
                <Dialog className="dialog-pop" open={open} onClose={()=>setOpen(false)}>
    
                    <DialogContent>
                        <div className="dialog-body">
                        <Body text={decisionData[index].popUpContent} />
                            </div>
                            <div className="flex-box flex-end ">
                            <button onClick={()=>setOpen(false)} className="button">close</button>
                            </div>
                     
                    </DialogContent>
                </Dialog>
                </div>}

      {!decisionStarted && decisionEnded &&(
        <div>
        
          <div className="flex-box flex-center">
            <div className="col-sm-12 col-lg-10 col-md-10">
       
              <div className="decision-feedback">
            <p>Consider the following questions as you reflect on the choices you made.</p>
           
<ul>
  <li>What went well in this situation? What cultural resources did the Native students have that allowed them to be the ones to be the voice of the unmet need in the entire student body?</li>
  <li>How would you feel to be invited to participate in this ceremony? How would that feeling change if you were Native, or if you were not? </li>
  <li>How would you accommodate students who were uncomfortable with the ceremony?</li>
  <li>What role did the specific location of the University of Arizona play as the 17th most diverse
medical school in 2023?</li>
        </ul>
            
              </div>
            </div>
          </div>
      
          <Toolbar activeScene={props.activeScene} updateLayoutNumber={props.updateLayoutNumber} lesson={props.lesson} updateScene={props.updateScene}/>
        </div>
      )}
    </div>
  );
};
export default DecisionLayout;

 


    
  

