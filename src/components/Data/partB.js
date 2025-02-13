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
export default partB;