

import Toolbar from './Toolbar';
import Body from '../Layouts/HTMLRender'
import { useState, useEffect } from 'react';
import MainText from "./MainText";
import swal from 'sweetalert'
import { Dialog, DialogContent } from '@mui/material';

const PartII = (props) => {
    const partB = (
        {
            "1": {
      question: `
    <p>Walking down a long hallway by yourself, you notice a disheveled man walking toward you from the other direction. To avoid awkwardness, you acknowledge him with a small nod and smile, but notice his eyes narrow to read your badge. You keep walking until you hear him address you.</p>
    <p>“Where are you from?” he asks.</p><p>You slow down and look behind you. “I’m sorry?”</p><p>“Your badge says spiritual care. Where are you from? Why are you here? Who sent you?”</p><p>Not expecting any questions from a stranger, you’re caught off guard but begin to explain in a
    general way. “I volunteer when things like –”</p><p>The man interrupts you and is clearly very agitated. “You’re with those people protesting at the club! I saw your signs! How did you get in here? My son is upstairs barely alive and you people think you have the right to judge him! We don’t need your religion!”</p><p>You notice a small group of people round the corner into the hallway behind the man. You’re 
    nervous that the man might become aggressive, but you feel a bit safer now that others are in the hallway.</p><p>How do you respond?</p>`,
    options: [{ text: `“I’m just here to help, sir.”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This isn’t a terrible choice, but there is a better one. This father is agitated and perceives you as a threat. Address the hatefulness of the protestors to make him feel safe and seen.` },{ text: `Continue walking - you are afraid of getting into an altercation with him. `, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not the best choice. While you always want to protect your physical safety, you can show him that you are non-threatening to him by addressing the hatefulness of the protestors to make him feel safe and seen.` },{ text: `“I saw those signs. I’m not with that group. I think what they are saying is wrong and hateful, too.”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice. By acknowledging the root of his agitation, you may be able to create a connection with him and offer your support.` },],
      multipleSelect: false, 
      type: "choice",
      },
     "2": {
      question: `<p><strong>You slightly open your arms in a non-threatening gesture of openness and say, “I saw those signs. I’m not with that group. I think what they are saying is wrong and hateful, too. I’m here to help however I can, and I’m happy to explain why spiritual care volunteers are here, if you like.”</strong></p><p>The man’s face reddens and his eyes begin to water. You patiently wait for a response.</p>
    
    `,
    options: [],
      multipleSelect: false, 
      type: "none",
      },
      "3": {
        question: `<p>Instead of engaging in a conversation, the man turns and walks away quickly. You had thought something similar might happen after you had seen the protestors on the way to the hospital. After seeing the man turn the corner at the end of the hallway, you use the restroom and then return to the multidisciplinary team.</p><p>A little while later, you are in a small nurses’ office/conference room with the family to which you had been assigned: the parents of one of the victims, as well as the victim’s younger sister. The victim, who had come out of surgery just a few hours before, is sleeping in his room.</p><p>All three family members look exhausted. The father sits with his arms crossed, staring out the window. You have just finished introducing herself and explaining your role on the multidisciplinary team. The family seems reluctant to talk.</p>
      `,
      options: [],
        multipleSelect: false, 
        type: "none",
        },
        "4": {
          question: `<p>You begin by saying, “I know you have already had to deal with more than anyone would ever
    expect. This is all so much to process. You don’t have to talk with me and we don’t have to do anything. But I am here for your family –”</p><p>The father interrupts, very angry. “I don’t know why he was there. He told us he was coming here with some of his friends but we just thought it was, you know, a weekend trip or something. We didn’t know he’d be at a club like that one.” </p><p>The victim’s mother gives her husband a sharp look. It’s clear to you there is some sort of conflict in play.</p><p>“What?” the father asks his wife. “If he hadn’t been there, he wouldn’t have gotten shot, and we wouldn’t be here.”</p><p>The victim’s mother begins to speak when her daughter says loudly “Way to be supportive, Dad. He could be dead like one of those other people and here you are complaining. Why can’t you just be grateful? I can tell why he was so scared to come out to you a few years ago.”</p><p>Before the argument can get worse, the victim’s mother puts her hands up and says quietly, “Please, you two. Please just stop.” She looks at you, closes her eyes in exhaustion, and says, “We have all been supportive of my son. My husband had a hard time when he came out because he didn’t understand. He loves and accepts our son, but he thinks all of this could have been avoided.”</p><p>“Because it could have been if he hadn’t been there!” yells her husband, crying now. The victim’s mother and sister begin crying quietly.</p><p>What do you do next?</p>
        `,
        options: [{ text: `“I understand that you must have a lot of questions and anger. Do you think God would put your son in this situation that you couldn’t handle, though?”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not a good choice. It projects a theology onto the family, and you should focus on the family’s current needs, which are around concerns for their injured loved one and the complicated dynamics at play. Try asking a question to learn more.` },{ text: `“This is an incredibly difficult situation. I don’t think it helps to try to place blame right now, though.”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not the best choice. While you affirm the family’s pain, you also shut them down. Try asking a question to learn more. ` },{ text: `“I can tell you all love him very much. I think it would help if I knew a little more about him. What can you tell me about your son?”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice. You affirm the family’s pain and the complicated dynamics at play, while asking a question to try to learn more about their loved one and the best ways you can support them.` },],
          multipleSelect: false, 
          type: "choice",
          },
          "5": {
        question: `<p><strong>You pause before saying anything else. “I can tell you all love him very much. I think it would help if I knew a little more about him. What can you tell me about your son?”</strong></p><p>By choosing not to engage with the family’s dispute directly, you try to help the family direct their attention toward supporting the victim rather than arguing between themselves. They are able to open up about their love for their son and brother and you provide them a sliver of peace on a very difficult day. </p>
      `,
      options: [],
        multipleSelect: false, 
        type: "none",
        end: true
        },
        }
    )
    const [started, startDecision] = useState(true)
    const [ended, endDecision] = useState(false)
    const [decisionData] = useState(partB)
    const [index, updateIndex] = useState(2);
    const [showAdvance, setAdvance] = useState(false)
    const [feedback, updateFeedback] = useState([]);
    const [selected, updateSelected] = useState([]);
    const [multipleFeedback, setMultipleFeedback] = useState(` `)
    const [showMultipleFeedback, updateShowMultipleFeedback] = useState(false)
    const [input, setInput] = useState([])
    const [open, setOpen] = useState(false)
   
    useEffect(() => {
        console.log(decisionData)
    }, [decisionData])

    function handleInput(text) {
        let data = input;
        localStorage.setItem(text, data);
        swal({
            title: `Keep reflecting on these responses as you progress through this scenario.`,
            text: `${data}`,
        }).then(() => {
            advance();
        });
    }
    function advance() {

        setAdvance(false)
        // if we have data, add it here.
        // we need to get the object back, so search for it here.
        if (decisionData[index].end) {
            updateFeedback([])
            startDecision(false)
            endDecision(true)
            updateIndex(1)
            updateSelected([])
        } else {
            for (let i = 0; i < selected.length; i++) {
                if (selected[i].conditions) {
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
    function handleChange(event, option) {
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

 
    function showFeedback(feedback) {
        setMultipleFeedback(feedback);
        updateShowMultipleFeedback(true)
    }
    return (
        <div className="layout-page">
            <div className="flex-box flex-center">
                    <div className="column-lg-10 column-md-12 column-sm-12 text-spotlight text-blue">
                        <MainText
                            className={`none`}
                            text={decisionData[index].question}
                        />
                        {JSON.stringify(decisionData)}
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
                            {decisionData[index].submit !== undefined && <div className="flex-box flex-end">{!showMultipleFeedback ? (<button className="button button-small" onClick={() => showFeedback(decisionData[index].multipleFeedbackData)}>submit</button>) : (<div>  <p className="true feedback">
                                {multipleFeedback}
                            </p> <div className="flex-box flex-end">
                                    {" "}
                                    <button
                                        className="button button-small"
                                        onClick={() => advance()}
                                    >
                                        next
                                    </button>
                                </div></div>)}</div>}
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
                            )}</div>) : (<div>{decisionData[index].type === "open" ? (<div className="decision-area flex-box">
                                {decisionData[index].options.map((option, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="flex-column flex-end input-area"
                                        >
                                            <Body text={option.text} />
                                            <input type="text" onChange={e => setInput(e.target.value)} />
                                            <div className="flex-box flex-end">
                                                <button className="button button-small" onClick={e => handleInput(option.text)}>submit</button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>) : (<div className="flex-box flex-end">
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
                
            </div>
            {decisionData[index].popUp !== undefined && <div className="flex-box flex-between nav-buttons">
                <button onClick={() => setOpen(true)}><img className="animate-float icon" src="https://chaplaincy-innovation-lab-lessons.s3.amazonaws.com/organizational/post-it.svg" alt="learn more" /></button>

                <Dialog className="dialog-pop" open={open} onClose={() => setOpen(false)}>

                    <DialogContent>
                        <div className="dialog-body">
                            <Body text={decisionData[index].popUpContent} />
                        </div>
                        <div className="flex-box flex-end ">
                            <button onClick={() => setOpen(false)} className="button">close</button>
                        </div>

                    </DialogContent>
                </Dialog>
            </div>}

            {!started && ended && (
                <div>

                    <div className="flex-box flex-center">
                        <div className="col-sm-12 col-lg-10 col-md-10">

                            <div className="decision-feedback">
                                <p>Consider the following questions as you reflect on the choices you made.</p>

                                <ul>
                                    <li>Some religious organizations respond to disaster sites with general humanitarian aid, like food and clothing, while also bringing religious literature or offering religious services. Is this ever appropriate? Is there an appropriate way to overtly integrate religious belief with disaster assistance? How should volunteers like the chaplain navigate the presence of such organizations?</li>
                                    <li>Many people have suffered religious trauma or other harm committed by individuals or communities in the name of ideology or religious belief. How can chaplains – who are often perceived to be religious leaders – be mindful of this and “get ahead” of objections to spiritual care because of this past trauma? </li>
                                    <li>How can chaplains remain as a calm, non-anxious presence when a situation is volatile due to intragroup dynamics?</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <Toolbar activeScene={props.activeScene} updateLayoutNumber={props.updateLayoutNumber} lesson={props.lesson} updateScene={props.updateScene} />
                </div>
            )}
        </div>

    );

}

export default PartII;