const partA = (
  // to do: create an "END" state - with a general reflection question.
 {
    "1": {
      question:
        `<p>You say, “Camile, I’m a chaplain with the police department. This is Captain Martin and Captain Rogers…”</p><p>What do you say next?</p>`,
      options: [
        { text: `“I’m so sorry. There has been an accident and your husband is dead.”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not a good choice. You can tell that Camile is already nervous by your presence, so you should not deliver this news on her doorstep. Also, Phillip’s death was not an accident, so this is an inappropriate way to describe it.` },
        { text: `“We need you to come down to the station to talk.” `, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not a good choice. Camile does not need to be brought to the police station to be notified of the death of her husband. ` },
        {text: `“May we come inside?”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice. Camile should be notified of the death inside her home, especially as you can tell she is nervous. Once inside, ask her to sit down to avoid the risk of fainting.`}
        
      ],
      multipleSelect: false,
      type: "choice"
    }, 
    "2": {
      question: `<p><strong>You ask if you can come in and Camile shows you to the living room.</strong></p>

      <p>You sit beside her on the couch, with Captain Martin on the other side. The command staff take a seat on a chair across from you.</p>
     <p>You turn to Camile and ask if anyone else is home with her.</p>
     <p>No, it’s just me here. My kids are at school and my husband is at work. What is going on? Is everyone okay?” </p>
     <p>What do you say next?</p>
      `, 
      options: [
        { text: `“I’m afraid we have some difficult news to deliver. Phillip is dead. He shot himself in the head.”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not the best choice. While it is direct and succinct, it may be too much for Camille to process all at once. Give her time to learn about how Phillip died after she has had a moment to take in the news. ` },
        { text: `Captain Martin, please tell Camille why we’re here.”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not the best choice. You should deliver the news to Camille. ` },
        { text: `“I’m so sorry to have to share that your husband has died from a gunshot wound to the head. The captains will provide more information when you’re ready for it.” `, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice. You give Camille time to process the news of her husband’s death before sharing more specific details about the cause of death.` },
      ],
      multipleSelect: false,
      type: "choice", 
  }, 
  "3": {
      question: `<p><strong>You tell Camille that you are sorry to tell her that her husband has died from a gunshot wound to the head. Then you say that the Captains will add some information about what happened, what is happening and will answer any questions she might have, i.e., where his body is and who is with it.</strong></p><p>“Take the time you need to catch your breath and process this information,” you say, holding Camille’s hand.</p><p>Camille is not handling the news well. She is crying and asking what hospital Phillip is in. “When will he be able to come home?” she wails. </p>`,
      options: [
        { text: `Offer to stay to help make phone calls to family and others who can help.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice. Camille could use support at this time. You can offer your presence to her by helping her with these difficult tasks during her time of need. ` },
        { text: `Give Camille space and leave the home.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This isn’t the best choice. Camille is in a state of shock and could use your support. ` },
        { text: `Ask Camille to share stories about Phillip.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `his is a bad choice. Camille is in a state of shock and is not ready to share stories about Phillip. ` },
      ],
      multipleSelect: false, 
      type: "choice", 
     
  },
  "4": {
    question: `<p><strong>You offer to stay and make phone calls to family and others who can help. </strong></p>
    <p>Family members and friends soon arrive to be present, and you go with one of the Captains to pick up the older children from school. You drive them back to their house and with their mother, gave them the death notification. </p><p>For the older children, you tell them their father died from a gunshot wound. You make clear he is dead, while speaking with compassion and care with words, tone, and body language. You are attentive, make eye contact, hold yourself in an open and empathetic way, and nod as they speak to convey you hear what they were saying and feeling. You leave it to Camile to share with the children any details about it being a death by suicide.</p><p>Soon it is getting dark. You’ve been with the family for eight to ten hours, offering presence, comfort, and care. It is important for people to not be alone immediately after an initial notification. The family begins to process the news - referring to Phillip in the past tense, and making initial arrangements. You help Camile make some calls to the funeral home, coroner and agency’s family liaison officer (FLO) who is the go between the agency and the family of the deceased officer, ensuring that needs are met and benefits accessed. The FLO also works with you on funeral arrangements. The house is full with family, friends, fellow officers, and religious leaders, who you collaborate with -  splitting time sitting and praying with the family.</p>
    <p>What do you do next?</p>`,
    options: [{text: `Offer to stay the night on the couch.`,conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not the best choice. The house is full and the family seems to be processing the news. You are likely not needed to stay overnight.` }, {text: `Ask Camille if you can do anything else to help before you leave for the night.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice. See if Camille needs anything else before leaving for the night.`}, {text: 'Tell everyone to leave to give the family space. ',conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not the best choice. Camille and the family may still need support. `}],
    multipleSelect: false, 
    type: "choice", 
   },
"5": {
  question: `<p><strong>You ask Camille if you can do anything else to help before you leave for the night. </strong></p><p>She asks if you could inform Phillip’s coworkers. You return to the police department to be with officers and the non-sworn staff in shock and grief. You meet up with fellow chaplains to plan for how they would be present and provide care that night and in the days ahead. This includes dividing up responsibilities between chaplains, including who would follow up with command staff, officers/staff who were particularly close with this officer, the family, and work with the FLO. </p> 

`,
  multipleSelect: false, 
  type: "none",

  },
 
  "6": {
  question: `<p>In the days that followed, Philip’s family was cared for by friends, family and the religious leader of their local congregation. You and other police chaplains offer care and comfort to other officers during the funeral service.</p> <p>You listen to anyone affected who wants to talk, offering clergy confidentiality in those conversations, and provide continued follow up care to the department, family, and friends. </p><p>Officers are often more aware of and sensitive to their own mortality and vulnerabilities after a fellow officer dies by suicide, so you provide some suicide prevention training. There is often a short window after a suicide in which officers are open to receiving tools for coping with stress, normalizing their emotions, and feeling safe to share.  </p><p>Once the immediate events pass, you check in with your fellow chaplains to see how they are doing and to debrief and discuss next steps. Eventually you take time off to reflect on how you were impacted and would recover. </p>
`,
  multipleSelect: false, 
  type: "none",
  end: true

  },
}
)
export default partA;