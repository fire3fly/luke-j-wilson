// ---------------------------------------------------------------
// EDIT THIS FILE to change what the website says.
// Anything inside [BRACKETS] is a spot that needs his own words
// or a fact only he can confirm. On the live page, bracketed text
// shows up highlighted so nothing gets missed.
// When you replace a bracket, delete the brackets too.
//
// PRIVACY: the only contact detail on this site is his email.
// No phone, address, city, or links to other profiles.
// ---------------------------------------------------------------

export const site = {
  // Matches the byline on his scripts and essay. His resume and domain say "Lucius".
  name: "Luke J. Wilson",
  shortName: "Luke Wilson",
  initials: "LW", // shown in the little square next to his name in the menu
  role: "Writer and Editor",
  title: "Luke J. Wilson | Writer, Editor, and Screenwriter", // the title shown in the browser tab and on Google (keep under 65 characters)
  tagline:
    "Professional writer and editor since 2008. Screenwriter for almost thirty years.",
  description:
    "Luke J. Wilson is a writer, editor, and screenwriter offering content writing, copywriting, editing, proofreading, and ghostwriting. Contact him today.",
  email: "wil4568@hotmail.com",
  year: 2026,
};

export const hero = {
  // The big line under his name types itself through these, one at a time.
  roles: [
    "Content strategist",
    "Content writer",
    "Copywriter",
    "Editor and proofreader",
    "Ghostwriter",
    "Nonfiction writer",
    "Screenwriter",
  ],
  slugLine: "INT. HOME OFFICE - NIGHT",
  action:
    "A lamp burns. A cursor blinks. Clear, accurate words, written with the reader in mind.",
};

export const quickFacts = [
  { label: "Writing professionally", value: "Since 2008" },
  { label: "Screenwriting", value: "Almost 30 years" },
  { label: "Graduate degree", value: "MA, English Language and Nonfiction Writing" },
  { label: "Undergraduate degree", value: "BA, English Language and Creative Writing" },
];

// What he offers. Each one becomes a framed card. Add or remove cards freely.
export const services = {
  heading: "How I can help.",
  intro:
    "Whether you need words written, polished, or told in your voice, I write with the reader in mind and I get the details right.",
  items: [
    {
      title: "Content writing",
      text: "Articles, blog posts, and informational pieces on a wide range of subjects, from technical to lifestyle. Researched, accurate, and written for your audience.",
    },
    {
      title: "Copywriting and brand messaging",
      text: "Website copy, marketing content, and advertising copy that turns complex ideas into clear brand messaging. I connect the story to your business goals.",
    },
    {
      title: "Editing and proofreading",
      text: "A careful read for grammar, clarity, accuracy, consistency, and AP style, so your writing is ready for readers.",
    },
    {
      title: "Journalism and features",
      text: "Researched articles built around current topics and what readers care about.",
    },
    {
      title: "Ghostwriting",
      text: "Your ideas and your story, written in your voice, with you keeping the credit. Books, memoirs, and long-form pieces.",
    },
    {
      title: "Screenwriting",
      text: "Scripts and stories for almost thirty years. See the screenwriting section below.",
    },
  ],
  // Small tags under the cards. All come from his resume.
  skills: [
    "Research and fact-checking",
    "Content strategy",
    "Brand messaging",
    "AP style",
    "Copyediting and proofreading",
    "Creative writing",
    "Nonfiction writing",
    "Independent project management",
    "Microsoft Word",
    "Google Docs",
    "SharePoint",
  ],
};

// His portrait. Replace public/luke.jpg with a sharper photo any time (keep the same file name).
export const portrait = {
  src: "/luke.jpg",
  alt: "Luke Wilson smiling outdoors in a ball cap and glasses",
  caption: "Luke J. Wilson",
};

export const about = {
  heading: "Words are my work.",
  paragraphs: [
    "I am a content strategist and writer with an M.A. in English and Nonfiction Writing and a Certified Mass Marketing Qualification. I turn complex narratives into compelling brand messaging, marketing assets across channels, and audience-focused campaign strategy, bridging the story with your business goals to build engagement and strengthen your brand's position.",
    "I have been a professional writer and editor for clients since 2008. I write articles, website and marketing copy, and informational content, and I edit and proofread for grammar, clarity, accuracy, and consistency.",
    "My style is direct and economical, in natural language, with the reader always in mind. I am interested in people, their behavior, and their choices, and that shows in everything I write.",
    "I hold a Master of Arts in English Language and Nonfiction Writing and a Bachelor of Arts in English Language and Creative Writing, both from Southern New Hampshire University. I graduated cum laude from both and was honored by Sigma Tau Delta.",
    "I am also a screenwriter. I have been writing scripts and stories for almost thirty years, and I want to be an award-winning screenwriter. I write because I believe it is what I was meant to do.",
  ],
};

export const journey = [
  {
    title: "Writer and editor",
    place: "Independent, remote",
    dates: "2008 to present",
    summary:
      "Articles, blog posts, and website copy on a wide range of subjects. Research, fact-checking, and careful editing, managed independently.",
  },
  {
    title: "Content creator for online publications",
    place: "Remote",
    dates: "2017 to 2018",
    summary:
      "Researched and wrote original articles on current topics and audience interests, then edited and proofread them.",
  },
  {
    title: "Master of Arts, English Language and Nonfiction Writing",
    place: "Southern New Hampshire University",
    dates: "2019",
    summary: "Graduated cum laude with a 3.6 GPA. Honoree of Sigma Tau Delta.",
  },
  {
    title: "Bachelor of Arts, English Language and Creative Writing",
    place: "Southern New Hampshire University",
    dates: "2017",
    summary: "Graduated cum laude with a 3.5 GPA. Honoree of Sigma Tau Delta.",
  },
  {
    title: "Screenwriter and storyteller",
    place: "Independent",
    dates: "Almost 30 years",
    summary:
      "Screenplays, creative prose, nonfiction, and poetry.",
  },
];

// Short, warm line shown near the end of the About section.
export const awayFromThePage = {
  heading: "Away from the Page",
  text: "Family, Books, Cats, and Laughter",
};

// The three framed posters (they also float in the top corner of the hero).
export const craft = {
  heading: "How I work.",
  intro: "Purposeful writing, with the reader in mind.",
  pillars: [
    {
      title: "Clarity",
      text: "Direct, economical, natural language. I write so readers understand it the first time.",
    },
    {
      title: "Accuracy",
      text: "I research each topic, check the facts, and proofread for grammar, consistency, and AP style.",
    },
    {
      title: "Voice",
      text: "I adapt my writing style to your specifications and editorial guidelines, so the work sounds like you.",
    },
  ],
};

export const education = {
  heading: "Trained in the craft.",
  degrees: [
    {
      degree: "Master of Arts",
      field: "English Language and Nonfiction Writing",
      school: "Southern New Hampshire University",
      year: "2019, cum laude",
    },
    {
      degree: "Bachelor of Arts",
      field: "English Language and Creative Writing",
      school: "Southern New Hampshire University",
      year: "2017, cum laude",
    },
  ],
  // Shown as two more framed boxes, right after the degrees.
  honors: [
    {
      degree: "Honoree",
      field: "Sigma Tau Delta",
      school: "International English Honor Society",
      year: "",
    },
    {
      degree: "Certificate",
      field: "Certified Mass Marketing Qualification",
      school: "California Institute of Advertising, Communications & Marketing",
      year: "2023",
    },
  ],
};

// Add or remove projects here. Copy one block to make another.
export const scripts = {
  heading: "Screenwriting and selected work.",
  intro:
    "Screenwriting is my long-term passion, and I am working toward becoming an award-winning screenwriter. Here is a taste of the work.",
  projects: [
    {
      title: "No Turning Back",
      format: "Feature",
      genre: "Action-thriller",
      logline:
        "A retired Black assassin has 48 hours to save her kidnapped niece and avenge her sister's murder before a ruthless human trafficking ring sells her into a life from which no one returns.",
    },
    {
      title: "The In-Between (The Bottoms)",
      format: "TV Pilot",
      genre: "Crime drama",
      logline:
        "When her cousin is murdered, Kali Lambert, the first woman to rise to the top of Michigan's most powerful Black crime family, vows to find the killers, associates of the rival DeLucca crime family, while balancing her need for revenge against the fragile peace that could collapse and tear the city apart.",
    },
    {
      title: "Experiencing America Through the Eyes of the Black Writer",
      format: "Essay",
      genre: "Nonfiction",
      logline:
        "From Olaudah Equiano to the Harlem Renaissance, how Black writers showed readers a world they had not seen, and why that knowledge so often leads to change.",
    },
  ],
};

export const contact = {
  heading: "Let's work together.",
  intro:
    "If you need a writer or editor for content, copy, features, or a book, tell me about your project and I will get back to you. If you are a producer, manager, agent, or fellow writer looking for a new screenwriting voice, I would love to hear from you too.",
  links: [
    { label: "Email", value: "wil4568@hotmail.com", href: "mailto:wil4568@hotmail.com" },
  ],
};
