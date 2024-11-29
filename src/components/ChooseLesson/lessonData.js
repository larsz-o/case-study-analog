const lessonData = {

  2: {
    checkpoint: false,
    last: false,
    checkpoints: [],
    images: [
      {image: 'https://chaplaincy-innovation-lab-lessons.s3.us-east-1.amazonaws.com/2025-01/pager-911.jpg', alt: '911 page', order: 0}
    ],
    layoutNumber: 1,
    navigation: [
      { available_scene: "4", current_scene: "2", previous_scene: "1",text: "Continue" },
    ],
    scene_number: "2",
    sidebar: false,
    sidebarImages: [],
    sidebarVideos: [],
    sidebarText: [`<p>This number is from 2024. Learn more about the <a href="https://www.bop.gov/about/statistics/population_statistics.jsp" target="_blank" rel="noopener noreferrer">current federal prison population</a>.</p>`],
    text: [
      `<p>When the 911 page came through to you, a police chaplain, you thought it could only be one of two things: a national emergency, like a terrorist attack, or a police officer in trouble or dead. You call the number on your pager and the police chief tells you to be in a specific place to be picked up by a police captain. No details. </p>
      <p>A few minutes later, Jack Martin, the captain, comes by and to pick you up. Only then does he let you know it was a suicide. Phillip, a fifteen year veteran of the force, husband and father died by suicide a few hours earlier with a single gunshot to the head. You get in Martin’s car to drive to Phillip’s house - it’s time to notify his wife Camile. Command staff were simultaneously gathering at the department staff to notify the rest of the police department once Camile was notified.</p>
`
    ],
    title: null,
    videos: [],
    audio: [],
  },
  
  4: {
    checkpoint: false,
    last: false,
    checkpoints: [], 
    images: [
      {alt: 'Federal Prison interior', image: 'https://chaplaincy-innovation-lab-lessons.s3.us-east-1.amazonaws.com/2025-01/Century-Prison-412.jpg', order: 0}
    ],
    layoutNumber: 4,
    navigation: [
      { available_scene: "5", current_scene: "4", previous_scene: "2",text: "Continue" },
    ],
    scene_number: "4",
    sidebar: false,
    sidebarImages: [],
    sidebarVideos: [],
    sidebarText: [],
    text: [
      `<p>On the way over, you begin to prepare yourself for making the death notification. Captain Martin remarks, “This is always an awful thing to have to do. I’m hoping your presence can help Camile.”</p><p>You take a deep breath and remember your role as a person of peace and calm in the midst of this painful event. You knew Phillip well from your work at the police department and had met Camile a few times over the years. </p>`,
    ],
    title: null,
    videos: [],
    audio: [],
  },
  5: {
    checkpoint: false,
    last: false,
    checkpoints: [], 
    images: [
      {alt: 'Making a death notification', image: 'https://chaplaincy-innovation-lab-lessons.s3.us-east-1.amazonaws.com/2025-01/how-to-make-a-death-notification.webp', order: 0}
    ],
    layoutNumber: 1,
    navigation: [
      { available_scene: "8", current_scene: "4", previous_scene: "2",text: "Continue" },
    ],
    scene_number: "4",
    sidebar: false,
    sidebarImages: [],
    sidebarVideos: [],
    sidebarText: [],
    text: [
      `<p>Captain Martin pulls onto Phillip and Camile’s street, and parks his car a few houses away. Another command officer was already there, parked in the same spot, out of sight of the front door. It is always a bad sign when command staff and the chaplain come to an officer’s home, and they did not want the family to anticipate what was going to happen to help minimize the trauma. 
</p><p>Together the captains and chaplain walk to the front door. Camile, Phillip’s wife, answers. When she sees the three of you at her doorstep, she begins to shake. </p>`,
    ],
    title: null,
    videos: [],
    audio: [],
  },
       
  8: {
    checkpoint: false,
    last: false,
    checkpoints: [{
      alt: null,
      answer: false,
      content_type: 5,
      data:
        ``,
      order: 0,
      question_type: 2,
      scene_number: "8",
      sidebar: false,
    }],
    images: [],
    layoutNumber: 9,
    navigation: [
      { available_scene: "10", current_scene: "8", previous_scene: "5",text: "Continue" },
    ],
    scene_number: "8",
    sidebar: false,
    sidebarImages: [],
    sidebarVideos: [],
    sidebarText: [],
    text: [],
    title: null,
    videos: [],
    audio: [],
  },
  
  10: {
    checkpoint: false,
    last: true,
    checkpoints: [],
    images: [],
    layoutNumber: 6,
    navigation: [{available_scene: "10", current_scene: "10", previous_scene: "7",text: "End Lesson" }],
    scene_number: "10",
    sidebar: false,
    sidebarImages: [],
    sidebarVideos: [],
    sidebarText: [],
    text: [
      `<p>You’ve completed this case study lesson. In this situation, you considered how to support a family before, during, and after the delivery of a death notification. You offered your continued empathetic presence, used discretion when sharing details about the death, and created a support plan which involved other religious leaders. </p>`
    ],
    title: "Lesson complete",
    videos: [],
    audio: [],
  },
};

export default lessonData;