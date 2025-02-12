const partA = (
  // to do: create an "END" state - with a general reflection question.
 {
    "1": {
      question:
        `<p>You are a Navajo medical student in the University of Arizona program. Navajos hold many strong beliefs about death, including a taboo against touching a dead body. </p><p>The term is about to begin, and you are concerned about the requirement to work in the Gross Anatomy Lab.</p><p>What do you do?</p>`,
      options: [
        { text: `Push aside your concerns. You know that you need to complete this lab as part of your program.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This isn’t the best choice. Touching a dead body goes against strong beliefs you hold. What else can you do to explore your concerns?` },
        { text: `Talk your classmate Amanda, another Native student, about what she thinks about the requirement.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice in this situation. Talking to your classmate can help you figure out what to do to explore your concerns.` },
        {text: `Plan a demonstration to protest the requirement.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This isn’t the best choice at the moment. Try talking to your classmate first to see if you can develop a plan for exploring your concerns. You may find common ground before escalating the situation on your own.`}
        
      ],
      multipleSelect: false,
      type: "choice"
    }, 
    "2": {
      question: `<p><strong>You decide to talk to your Yaqui classmate, Amanda, about your concerns. Yaquis don’t have specific taboos about touching dead bodies, but Amanda shares that she feels uneasy about working with a dead body.</strong></p>
<aside>
      <p><b>Amanda:</b> “You shouldn’t have to touch the body at all.”</p>
     <p><b>You:</b> “But if I don’t touch the body, how can I pass the lab?” </p>
     <p><b>Amanda:</b> “I don’t know. Maybe there is another way.”</p>
     <p><b>You:</b> “I was talking with my mom about this the other night and she said that if the body was blessed first, it would be more acceptable to work with the body.”</p>
     <p><b>Amanda:</b> “Oh we should ask Prof. Gonzales if he’d be willing to do that. I bet he would.”</p>
     <p><b>You:</b> “You think he would?”</p>
     <p><b>Amanda:</b> "It's worth asking. He’s Yaqui and he’s an apprentice of a traditional medicine person. He’s performed ceremonies like this in the past. He’s the right person to ask.”</p>
     </aside>
     <p>What should you do next?</p>
      `, 
      options: [
        { text: `Email Dr. Gonzales to ask if he will perform a blessing ceremony.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice. Dr. Gonzales has experience performing this type of ceremony and can be an advocate and ally for your concerns.` },
        { text: `Wait it out and see what the lab instructor does.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This isn’t the best choice. The lab instructor has not indicated that he is planning to address your concerns, because he may not be aware of them yet. Seek guidance from Dr. Gonzales to help advocate for your needs.` },
        
      ],
      multipleSelect: false,
      type: "choice", 
  }, 
  "3": {
      question: `<p><strong>You and Amanda contact Dr. Gonzales, asking him to perform a blessing before the lab starts, to help you feel more comfortable. </strong></p><p>In your email, you asked Dr. Gonzales if his blessings could explore a physical memorial for the deceased, prayer, honoring of the native belief system regarding the Seven Sacred Directions, emotional guidance in preparation for undergoing encounters with death, and/or granting permission for interacting with the dead body.</p><p>He wrote back that he’d be happy to perform a blessing and it could include all of those elements, but he was concerned about causing concerns with others in the medical school, and the lab instructor. </p><p>He wrote, “Would it be okay if I perform a private blessing for just you and Amanda? I’m not sure how the medical school would respond if we made this event public.”</p>`,
      options: [
        {text: `<p><b>What do you think about his response?</b></p><ul><li>Should Dr. Gonzales consider opening this blessing up to the public, or at least the rest of the lab students? Why or why not?</li><li>Who might Dr. Gonzales have to consult before performing the blessing? </li><li>What are the risks of offering the blessing, or the risks of not offering it?</li></ul><br/> `, conditions: {type: null, command: '', index: null}, feedback: ``},

      ],
      multipleSelect: false, 
      type: "open", 
     
  },
  "4": {
    question: `<p><strong>While there are good reasons for making the blessing offering public, you decided that having a private blessing would be acceptable, and would help you feel more comfortable participating in the Gross Anatomy Lab.</strong></p>
    <p>The blessing was focused on you and Amanda, and the donor body. The three foci were each blessed individually, centered around inviting positive energy into the experience and cleansing negative energy. But word got out and other students also wanted to attend a similar ceremony.</p><p>As Dr. Gonzales put it, “Other students heard about this blessing and asked for similar blessings. Through the ceremony, students learn to respect and thank the willed body donors. It is also a way to clear the students of negative energy and replace it with positive energy as they start their second year of medical school.”</p>`,
    options: [],
    multipleSelect: false, 
    type: "none", 
    end: true,
   },
"5": {
  question: `<p>Earlier that year, the Medical Humanities Program, which seeks to instill humanitarian
beliefs into the curriculum of upcoming physicians, had just started a tree planting ceremony to honor people who died and donated their bodies to science. Each year medical students – all of whom take anatomy classes – would plant a tree in a memorial garden.</p><p>Dr. Gonzales joined forces with the Medical Humanities Program and together they created the Tree Blessing Ceremony, which combines a traditional Native American blessing ceremony and a tree planting to honor those who have passed away and donated their bodies to science. He was given permission by his Yaqui elders to perform blessings for medical students – something he tells the participants, because it is important for the audience to know.</p>

`,
options: [
  {text: `What are you feeling right now? How are your feelings impacting your work?`, conditions: {type: null, command: '', index: null}, feedback: ``}
],
  multipleSelect: false, 
  type: "none",
  end: true

  },
 
  
}
)
export default partA;