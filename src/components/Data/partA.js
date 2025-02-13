const partA = (
  // to do: create an "END" state - with a general reflection question.
 {
    "1": {
      question:
        `<p><b>The next day</b></p><p>The next morning at work, you get a text message from a coordinator at the relief organization, asking you to set up time to complete a volunteer pre-deployment mental health screening.</p><p>This confirms that the organization is involved with the shooting response; it also confirms that the event is sufficiently traumatic to warrant advance discussion with responding volunteers. You text back that you could complete the screening by phone as soon as possible.</p><p>Within hours, you receive the pre-screening phone call, which includes questions on whether you’ve experienced loss or other trauma and are prepared to handle on-the-ground conditions. </p><p>What is your reaction to those questions?</p>`,
      options: [
        { text: `You think: these questions are intense and invasive. Why do they need to know about my experiences with loss and trauma for me to be able to do my job?`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This isn’t the best choice. While it’s not wrong to question the purpose of the questions, as a spiritual care provider, you should be aware of how past experiences of loss and trauma may impact your ability to help others. These are valid questions in this context.` },
        { text: `You answer the questions as asked.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice. As a spiritual care provider, you should be aware of how past experiences of loss and trauma may impact your ability to help others. These are valid questions in this context.` },
        {text: `You answer the questions, but downplay some of your experiences, as you don’t want to be disqualified from participating.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is a bad choice. You should be honest about your experiences of loss and trauma as they may impact your ability to help those who are currently experiencing tremendous grief. Your experiences may aid your ability to serve others, too - but the organization wants to be able to accurately screen you.`}
        
      ],
      multipleSelect: false,
      type: "choice"
    }, 
    "2": {
      question: `<p><strong>The pre-screening determines that you are within acceptable parameters for recent trauma, grief and loss set by this disaster relief operation. </strong></p><p>You are cleared to deploy.</p><p>Another text message soon arrives, asking you to confirm your availability. This comes as little surprise, as the morning’s news had reported multiple fatalities from the shooting, although neither the attacker nor the victims had yet been identified. You reply that you’re still available and are told to keep an eye out for an email with further instructions.</p><p>When you break for lunch, you find the email waiting for you and take the first step
prescribed by calling the organization’s travel agency to book a hotel near the site of the shooting. The agent lets you know that a response center has been set up in a convention hall about a mile from the site of the shooting. 
</p><p>You tell the agent that you’ll arrive the next morning. You also let your work supervisor know that you’ve been activated to respond, an arrangement that has worked well since you began volunteering to provide spiritual care in disasters. You’ll be gone the following Monday to Friday.</p>
      `, 
      options: [
        { text: `<p><b>Reflect</b></p><p>What experiences in a chaplain's own life and career might come up in the pre-screening questions? What might make a chaplain hesistant to respond to a violent, traumatic disaster?</p>`, conditions: {type: null, command: "NEXT", index: null}, feedback: `` },
      ],
      multipleSelect: false,
      type: "open", 
      end: true
  }, 
  "3": {
    question: `<p>The next morning, you drive to the convention hall and find the response center, where your temporary supervisor is located. You notice that multiple large rooms have been commandeered to support victims and families. You assume this means the shooting was on a larger scale than you initially thought.</p><p>Your supervisor completes a brief intake process by checking your badge and handing you a packet of logistical information: the details of your hotel, other organizations responding to the site, and contact information for various entities involved in the process. The supervisor lets you know that a meeting of the spiritual care response team will happen in about an hour.<p><p>As you wait, how do you prepare yourself?`,
    options: [{ text: `You find a newspaper or website to see what information is publicly available.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice. Spiritual care volunteers support victims and families in whatever way they need. You have an opportunity to indicate where you think you can provide the best support, so it can be helpful to try to find out more information about what happened. ` },{ text: `You start asking other volunteers for more information.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This isn’t a bad choice, but the other volunteers may not have accurate information about the situation.` },{ text: `You sit patiently and wait for your supervisor to share more information.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This isn’t a good choice. You should start to prepare yourself for the range of situations people might be in - people who have family members who were killed, or people who were shot and injured, for instance. Use this time to start to mentally prepare for what you might expect.` },
    ],
    multipleSelect: false, 
    type: "choice", 
    end: true
   },
   "4": {
    question: `
  <p>Walking down a long hallway by yourself, you notice a disheveled man walking toward you from the other direction. To avoid awkwardness, you acknowledge him with a small nod and smile, but notice his eyes narrow to read your badge. You keep walking until you hear him address you.</p>
  <p>“Where are you from?” he asks.</p><p>You slow down and look behind you. “I’m sorry?”</p><p>“Your badge says spiritual care. Where are you from? Why are you here? Who sent you?”</p><p>Not expecting any questions from a stranger, you’re caught off guard but begin to explain in a
  general way. “I volunteer when things like –”</p><p>The man interrupts you and is clearly very agitated. “You’re with those people protesting at the club! I saw your signs! How did you get in here? My son is upstairs barely alive and you people think you have the right to judge him! We don’t need your religion!”</p><p>You notice a small group of people round the corner into the hallway behind the man. You’re 
  nervous that the man might become aggressive, but you feel a bit safer now that others are in the hallway.</p><p>How do you respond?</p>`,
  options: [{ text: `“I’m just here to help, sir.”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This isn’t a terrible choice, but there is a better one. This father is agitated and perceives you as a threat. Address the hatefulness of the protestors to make him feel safe and seen.` },{ text: `Continue walking - you are afraid of getting into an altercation with him. `, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not the best choice. While you always want to protect your physical safety, you can show him that you are non-threatening to him by addressing the hatefulness of the protestors to make him feel safe and seen.` },{ text: `“I saw those signs. I’m not with that group. I think what they are saying is wrong and hateful, too.”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice. By acknowledging the root of his agitation, you may be able to create a connection with him and offer your support.` },],
    multipleSelect: false, 
    type: "choice",
    },
   "5": {
    question: `<p><strong>You slightly open your arms in a non-threatening gesture of openness and say, “I saw those signs. I’m not with that group. I think what they are saying is wrong and hateful, too. I’m here to help however I can, and I’m happy to explain why spiritual care volunteers are here, if you like.”</strong></p><p>The man’s face reddens and his eyes begin to water. You patiently wait for a response.</p>
  
  `,
  options: [],
    multipleSelect: false, 
    type: "none",
    },
    "6": {
      question: `<p>Instead of engaging in a conversation, the man turns and walks away quickly. You had thought something similar might happen after you had seen the protestors on the way to the hospital. After seeing the man turn the corner at the end of the hallway, you use the restroom and then return to the multidisciplinary team.</p><p>A little while later, you are in a small nurses’ office/conference room with the family to which you had been assigned: the parents of one of the victims, as well as the victim’s younger sister. The victim, who had come out of surgery just a few hours before, is sleeping in his room.</p><p>All three family members look exhausted. The father sits with his arms crossed, staring out the window. You have just finished introducing herself and explaining your role on the multidisciplinary team. The family seems reluctant to talk.</p>
    `,
    options: [],
      multipleSelect: false, 
      type: "none",
      },
      "7": {
        question: `<p>You begin by saying, “I know you have already had to deal with more than anyone would ever
  expect. This is all so much to process. You don’t have to talk with me and we don’t have to do anything. But I am here for your family –”</p><p>The father interrupts, very angry. “I don’t know why he was there. He told us he was coming here with some of his friends but we just thought it was, you know, a weekend trip or something. We didn’t know he’d be at a club like that one.” </p><p>The victim’s mother gives her husband a sharp look. It’s clear to you there is some sort of conflict in play.</p><p>“What?” the father asks his wife. “If he hadn’t been there, he wouldn’t have gotten shot, and we wouldn’t be here.”</p><p>The victim’s mother begins to speak when her daughter says loudly “Way to be supportive, Dad. He could be dead like one of those other people and here you are complaining. Why can’t you just be grateful? I can tell why he was so scared to come out to you a few years ago.”</p><p>Before the argument can get worse, the victim’s mother puts her hands up and says quietly, “Please, you two. Please just stop.” She looks at you, closes her eyes in exhaustion, and says, “We have all been supportive of my son. My husband had a hard time when he came out because he didn’t understand. He loves and accepts our son, but he thinks all of this could have been avoided.”</p><p>“Because it could have been if he hadn’t been there!” yells her husband, crying now. The victim’s mother and sister begin crying quietly.</p><p>What do you do next?</p>
      `,
      options: [{ text: `“I understand that you must have a lot of questions and anger. Do you think God would put your son in this situation that you couldn’t handle, though?”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not a good choice. It projects a theology onto the family, and you should focus on the family’s current needs, which are around concerns for their injured loved one and the complicated dynamics at play. Try asking a question to learn more.` },{ text: `“This is an incredibly difficult situation. I don’t think it helps to try to place blame right now, though.”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not the best choice. While you affirm the family’s pain, you also shut them down. Try asking a question to learn more. ` },{ text: `“I can tell you all love him very much. I think it would help if I knew a little more about him. What can you tell me about your son?”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice. You affirm the family’s pain and the complicated dynamics at play, while asking a question to try to learn more about their loved one and the best ways you can support them.` },],
        multipleSelect: false, 
        type: "choice",
        },
        "8": {
      question: `<p><strong>You pause before saying anything else. “I can tell you all love him very much. I think it would help if I knew a little more about him. What can you tell me about your son?”</strong></p><p>By choosing not to engage with the family’s dispute directly, you try to help the family direct their attention toward supporting the victim rather than arguing between themselves. They are able to open up about their love for their son and brother and you provide them a sliver of peace on a very difficult day. </p>
    `,
    options: [],
      multipleSelect: false, 
      type: "none",
      end: true
      },
}
)
export default partA;