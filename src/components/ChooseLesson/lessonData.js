const lessonData = {

  2: {
    checkpoint: false,
    last: false,
    checkpoints: [],
    images: [
      {image: 'https://chaplaincy-innovation-lab-lessons.s3.us-east-1.amazonaws.com/2025-01/gettyimages-886134986-640x640.jpg', alt: 'Police and parademics respond to a call', order: 0}
    ],
    layoutNumber: 1,
    navigation: [
      { available_scene: "4", current_scene: "2", previous_scene: "1",text: "Continue" },
    ],
    scene_number: "2",
    sidebar: false,
    sidebarImages: [],
    sidebarVideos: [],
    sidebarText: [``],
    text: [
      `<p>You are Officer Jones, a 17-year veteran of the Central City Police Department. Recently, you responded to a request for a welfare check - a typical call in your role.</p><p>However, the call ended up being less than typical. It resulted in finding the bodies of a young woman and her eight-month-old son in their home after a neighbor had not seen them for several weeks. A brief investigation had determined the event was a murder and a death by suicide.</p><p>You were the one who found the child.</p>
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
      {image: 'https://chaplaincy-innovation-lab-lessons.s3.us-east-1.amazonaws.com/2025-01/pexels-edgard-5628406.jpg', alt: 'You noticed you were waking up feeling awful.', order: 0}
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
      `<p>You had been exposed to the bodies of deceased adults many times over the course of your long career with the police department. You had never become numb to the experience, but you generally knew what to expect and how to process the event. At first, this incident seemed to fit into that framework: tragic, but part of your job.</p>The team making the welfare check had made the appropriate calls, handled the scene appropriately, and moved on to the rest of their jobs.<p></p><p>A few days later, however, you noticed you were waking up feeling awful.</p>`,
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
      { available_scene: "10", current_scene: "8", previous_scene: "4",text: "Continue" },
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
    navigation: [{available_scene: "10", current_scene: "10", previous_scene: "11",text: "End Lesson" }],
    scene_number: "10",
    sidebar: false,
    sidebarImages: [],
    sidebarVideos: [],
    sidebarText: [],
    text: [
      `<p>You’ve completed this case study lesson. You explored how people who work in stressful professions are at increased risk of experiencing trauma on the job and about how chaplains can serve these people, even if they don’t identify as religious. </p><p>You took the perspective of someone who was in need of care, and got a glimpse into their concerns when choosing to seek out help on the job - or not. </p>`
    ],
    title: "Lesson complete",
    videos: [],
    audio: [],
  },
};

export default lessonData;