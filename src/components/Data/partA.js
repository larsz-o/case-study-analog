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
  
   },
"4": {
  question: `

`,
options: [],
  multipleSelect: false, 
  type: "none",
  },
 "5": {
  question: `<p>Relief personnel are helping families find local lodging and arrange meals and other necessities, including transportation of victims’ remains. The spiritual care volunteers have been divided into two groups: one group will be available to families with a confirmed loss, and the other will assist families with victims in local hospitals. While the on-site supervisor will ultimately decide where volunteers are assigned, she does ask if there are any preferences.</p>
  <p>The report the supervisor distributed includes a list of organizations known to be responding. It includes several local churches that have brought supplies like toiletries and clothing for traveling families. You make note of this information and then turn to the on-site supervisor to mention your preference for assignment. Because of your regular job in a county hospital, you feel better suited to help families with injured loved ones in local hospitals. The supervisor affirms your preference and assigns you to a multidisciplinary team to meet with a specific family. The team includes a mental health expert and a nurse.</p>
  <p>Together the team will be driven to a local hospital the next morning, which has not been announced as a site for caring for victims.</p>

`,
options: [],
  multipleSelect: false, 
  type: "none",
  },
  "6": {
    question: `<p>The next morning, on the way to the hospital, the route takes the team within a block of the scene of the shooting. It has been taped off by law enforcement, with FBI, state, and local police vehicles still blocking traffic past the club. On a street light post near the barricades, people have already begun leaving flowers, candles with religious imagery, and handmade memorial posters.</p><p>the route takes the team within a block of the scene of the shooting. It has been taped off by law enforcement, with FBI, state, and local police vehicles still blocking traffic past the club. On a street light post near the barricades, people have already begun leaving flowers, candles with religious imagery, and handmade memorial posters.</p>
  `,
  options: [],
    multipleSelect: false, 
    type: "none",
    },
}
)
export default partA;