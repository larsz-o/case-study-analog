const partA = (
  // to do: create an "END" state - with a general reflection question.
 {
    "1": {
      question:
        `<p>You were always exhausted and almost always had a headache first thing in the morning. Well-accustomed to a beer with dinner in the evenings, after a week or so, you realized you were drinking much more than usual – your beer with dinner had turned into four or five or even six before bed.</p><p>Headaches were hangovers, and you were exhausted from the alcohol preventing deep sleep. Your spouse mentioned a few times that you were constantly shuffling and turning in bed.</p><p>What would you do next in this situation? </p>`,
      options: [
        { text: `Try not to worry too much - everyone around you drinks, it can’t be that big of a deal.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not the best choice. You are experiencing a significant change in behavior that has negative impacts on your health. Try figuring out what might be causing this.` },
        { text: `Ask your spouse to help you limit your drinking.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This isn’t a terrible choice, but it doesn’t address the underlying cause of your sudden change in behavior. Try figuring out what might be causing this. ` },
        {text: `Spend time reflecting on what might have caused this change of behavior and mood.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice. Your sudden change in behavior may be linked to the recent trauma you witnessed. `}
        
      ],
      multipleSelect: false,
      type: "choice"
    }, 
    "2": {
      question: `<p><strong>“I don’t want to be drinking so much,” you mutter to yourself in the car on the way to work. “I don’t get it though. What’s going on?”</strong></p><p>Your days often included tense interactions, so it required a bit of thought to identify any one of them that might be causing problems sleeping and pushing you to feel like you needed to drink more in the evenings.</p><p>“I’ve just been so stressed out all month,” you think. “Why?”</p><p>You run through the catalog of reports you filed, conversations you had had, and so on, until you realize with certainty what was troubling you: you had found the body of the child during the welfare check. You had felt sad the rest of the day after the welfare check, but you hadn’t mentioned it to anyone else.</p>`, 
      options: [],
      multipleSelect: false,
      type: "none", 
  }, 
  "3": {
    question: `<p>Your colleagues never come to you with their problems and you never mentioned any of yours to them. You had grown up knowing that you leave home problems at home and work problems at work; it wasn’t anyone’s job to listen to you complain or whine. Your spouse told you many times early in your marriage that you could talk to them if you had a rough day at work, but you didn’t want them to have to deal with some of the things you saw on the job.<p><p>Whenever you had to respond to a distressing call at work, you reminded yourself that this is what you had signed up for. You knew your commanding officer felt the same way: while he always gave his officers a slap on the back and a handshake when they made a tough arrest, he didn’t want to hear about on-the-job difficulties.</p><p>Another officer had once mentioned in passing that he started seeing a therapist after he had to fire his weapon on the job. A week later, he had been reassigned to a desk.</p><p>You feel angry when you think about telling anyone how you were feeling about the incident. You had seen lots of bad things over your career with the police department; there was no reason this time should be any different.</p><p>Knowing your work environment and own history, what would you typically do next?</p>`,
    options: [{ text: `Try to let it go like you always do.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is most likely how you would act. You are afraid of being reassigned to desk duty if you seek out help. You will try to cope with this on your own.` },{ text: `Seek out help from your commanding officer.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not how you would likely act. You are afraid of the stigma and being reassigned to desk duty if you seek out help from your commanding officer.` }, {text: `Seek out help from someone trained to do so.`,conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not how you would likely act. You fear being stigmatized for reaching out for help, and you are not a religious person, so you wouldn’t contact the department’s chaplain.`  }
    ],
    multipleSelect: false, 
    type: "choice", 

   },
   "4": {
    question: `
  <p><strong>“Nothing is different this time - I need to just let this go,” you say to yourself.</strong></p>
  <p>But two weeks go by, and nothing improves.</p><p>Eventually, you begin having so much difficulty waking up and getting out of bed that you report for duty late three days in a row.</p><p>You start noticing that your spouse is becoming more tense in the mornings when you are leaving for work every day. You start feeling tense any time you have to respond to a call anywhere near the house where you had found the child.</p><p>Up until this point, you had never been late to work - you were always coming in 30 minutes early. Your commanding officer notices that something is wrong, so he calls you into his office.</p><p>“I don’t know what your deal is, but something isn’t working. You need to get yourself right or I’m going to park you somewhere inside without a car and a gun,” he says. </p>`,
  options: [],
    multipleSelect: false, 
    type: "none",
    popUp: true,
    popUpContent: `<p>Police officers often encounter very difficult circumstances and situations.</p><p>What are some reasons that some situations might be more difficult than others, even if they could all be described as tragic, catastrophic, or traumatic?</p>`
    },
   "5": {
    question: `<p>“Great,” you sigh to yourself. “Now what?”</p><p>You head back to your desk and open your email. You consider emailing your coworker who started seeing the therapist and got reassigned to seek out advice, but then you notice an email from Chaplain Rogers, who coordinates programs for police across the state. The email invited officers to a post-critical incident seminar that was coming up in a few weeks. </p><p>You really don’t want to go to a therapist and risk getting reassigned. Plus, you don’t have any real problems - this drinking thing was new. But, could this seminar help?</p><p>“Anything to get me back on track and out from under my commander,” you think. </p>`,
  options: [],
    multipleSelect: false, 
    type: "none",
    },
    "6": {
      question: `<p>You register for the seminar, but you aren’t sure what to expect.</p><p>It is a total of three days. You tell your commanding officer that you’ll be taking the time to work on getting your head straight. Experts in psychology, counseling, trauma, and spiritual care were there, offering a series of sessions for emergency responders who came from across the state.</p><p>The seminar, which Chaplain Rogers is coordinating and hosting, includes opportunities to share and process stories from critical incidents, with:<ul><li> gentle facilitation by Chaplain Rogers</li><li>therapeutic massage</li><li>presentations on fear and coping mechanisms</li><li>and other sessions to help participants contextualize their experiences and learn healthy strategies to process past and future incidents</li></ul></p>`,
    options: [],
      multipleSelect: false, 
      type: "none",
      },
      "7": {
        question: `<p>The seminar also includes optional times set aside for communal prayer, meditation, or a variety of spiritual practices, through which Chaplain Rogers guides participants if they choose to attend. You don’t consider yourself to be a religious person, but you know Chaplain Rogers isn’t the kind of person to demand people pray or go to church and so you decide to check one of the services out.</p><p>As Chaplain Rogers began with a simple grounding practice to help attendees focus, you suddenly feel angry, but you don’t know why. You try focusing on what Chaplain Rogers is saying but your mind keeps coming back to the image of the dead child. </p>
      `,
      options: [{ text: `What might be making you mad at this moment?`, conditions: {type: null, command: "NEXT", index: null}, feedback: `` }],
        multipleSelect: false, 
        type: "open",
        },
        "8": {
      question: `<p>You don’t know who you were mad at – you don’t really pray, so how could you be mad at God? Did it make sense to be mad at the world? As Chaplain Rogers gets the other participants started on a silent journaling exercise, he comes over and sits down next to you.</p><p>“Thanks for coming,” he says quietly. “I’m glad you’re here.” You give a sort of nod and notice you felt a bit less angry. You began the journaling exercise and, by the end of the service, at least felt grateful to Chaplain Rogers, alongside your anger.</p>
    `,
    options: [],
      multipleSelect: false, 
      type: "none",
      },
      "9": {
        question: `<p>After the seminar, you notice things are getting easier. You were able to meet others who had also had traumatic experiences, and you feel less lonely. You aren’t as anxious all the time, although you still struggle to fall asleep at night. You don’t have a hard time stopping after one or two beers in the evening. Once you had seen others struggling with similar problems and learned that there was real science behind why you were feeling how you feel, you feel more confident in your ability to cope with the memories of the welfare check in healthier ways.</p><p>In fact, things get better enough that your commander pulls you back into his office again one day. He sticks out his hand to shake and says, “I don’t know what you did to deal with whatever it was, but it’s like night and day. Glad you’re back with us.” He slaps you on the back and sends you back to work.</p><p>Things continue to improve for several weeks. You feel so much better that you decide to quit drinking altogether and soon find you are asleep within a few minutes of going to bed every night. Your spouse is happier, too, since you quit tossing and turning at night. Your new workout regimen seems to be helping, as well. A few months go by, and you stop thinking of yourself as improving – you are just “normal” again.</p>`,
      options: [{ text: `How does your commanding officer’s response to your change in behavior make you feel?`, conditions: {type: null, command: "NEXT", index: null}, feedback: `` }],
        multipleSelect: false, 
        type: "open",
        },
        "9": {
          question: `<p>Wrapping up your shift one evening, you are driving down a two-lane county road when you notice the car in front of you start to shake from side to side, and then see the car begin to swerve gently. Suspecting an intoxicated or otherwise distracted driver, you call in the incident, request support, and turn on your lights and siren. Another officer reports being nearby and that they will respond.</p><p>The car ahead speeds up, and you follow for several minutes. The vehicle continues to sway gently from side to side but never slows down. After a few minutes the car starts veering to the right, then jerks back to the left and crosses the road into oncoming traffic. Barely missing cars traveling in the other direction, the car speeds off the road and onto the shoulder.</p><p>It slams into a tree and nearly spins all the way around it. The airbags deploy, but by the time you stop your own vehicle – blocking traffic on the road – you can see that the driver is injured and slumped horizontally across the front seat. You call in an update on the pursuit and run to the crashed car.</p>`,
        options: [],
          multipleSelect: false, 
          type: "none",
          },
          "10": {
            question: `<p>You are still talking into your radio when you notice an infant car seat in the back of the car. You hear a baby crying and see the driver stirring awake and attempting to talk. You feel lightheaded as your colleague’s car comes to a halt a dozen yards away. You forcefully shake yourself out of a daze and successfully finish responding to the wreck. The infant is physically unharmed; the driver, who is severely intoxicated, has broken a wrist and suffered some cuts, but would otherwise be okay.</p><p>When you sign off at the end of your shift, you suddenly feel nauseous as you were leaving the building. You manage to make it to the restroom before vomiting. This time, you know what was going on: seeing the infant in the car, even though the child had not been injured, took you right back to the day you had found the body of the other child.</p>`,
            options: [{ text: `Consider quitting your job to do something less stressful.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This might be a choice for you in the future, but you have a better option right now. Who can you reach out to for help?` },{ text: `Call Chaplain Rogers to seek support.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice in this situation. Chaplain Rogers was able to provide you with support in the past. He may be able to help you again now.` }, {text: `Stop at the bar on the way home.`,conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not a good choice. Drinking has been a negative coping mechanism for you in the past. Who can you reach out to for help?`  }
            ],
            multipleSelect: false, 
            type: "choice", 
        
           },
           "11": {
            question: `<p><strong>The next morning, you call in sick. Your next call is to Chaplain Rogers, who coordinated the post-critical incident seminar and left his card with all the attendees.</strong></p><p>“Hi, Chaplain,” you say. “I think I need to talk to you.”</p>`,
          options: [],
            multipleSelect: false, 
            type: "none",
            end: true
            },
}
)
export default partA;