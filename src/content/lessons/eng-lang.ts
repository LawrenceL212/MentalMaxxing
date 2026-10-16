import type { Lesson } from './types'

// AQA GCSE English Language 8700. One lesson per topic in topics.ts. All examples are invented for this app.
export const ENG_LANG: Record<string, Lesson> = {
  'Paper 1: Reading fiction': {
    keyPoints: [
      'Paper 1 is 1 hour 45 minutes, 80 marks, half of your English Language grade. Section A (reading) is 40 marks.',
      'Q1 (4 marks): list four things. Q2 (8): language. Q3 (8): structure. Q4 (20): evaluate a statement.',
      'Spend about 15 minutes reading the source before you write anything.',
      'Always tie a quotation to an effect on the reader, not just a label like ‘metaphor’.',
      'For structure (Q3), talk about the shape of the whole extract: where the focus moves and why.',
    ],
    steps: [
      {
        title: 'The paper at a glance',
        text: "You get one fiction extract from the 20th or 21st century and five questions. Section A is the reading: Q1 is 4 marks, Q2 is 8, Q3 is 8 and Q4 is 20, making 40. Section B is the writing task (next lesson).\nThe exam is 1 hour 45 minutes. A sensible plan is about 15 minutes reading, 45 minutes on Section A and 45 minutes on Section B.",
      },
      {
        title: 'Read it twice',
        text: "Read the whole extract once for the story: who, where, what is happening. Then skim again with a pen, marking moments where the mood shifts or a detail feels odd.\nDo not skip the first read to save time. Every question depends on understanding the extract as a whole.",
      },
      {
        title: 'Q1: four quick facts',
        text: "You are told which lines to use. Pick four true things that are stated in them and write each as a short, clear point.\nExample: ‘The kitchen smelt of burnt toast.’ is a fact. Do not explain or add opinions. It is only 4 marks, so keep it to a few minutes.",
      },
      {
        title: 'Q2: language, step by step',
        text: "Choose a short quotation, then say what it makes the reader picture or feel. Zoom in on one key word or technique.\nExample: ‘the corridor swallowed her footsteps’ makes the building seem alive and hungry, which builds unease. The verb ‘swallowed’ does the work.\nTwo or three well-explored quotations beat six quick ones.",
      },
      {
        title: 'Q3: structure',
        text: "Structure means how the writer arranges the extract, not the language of single lines. Think about the opening, shifts of focus, changes in pace, flashbacks, and the ending.\nExample: a zoom from a wide view of a town down to one small figure draws our attention to that person. Always say why the writer did it.",
      },
      {
        title: 'Q4: judge the statement',
        text: "You are given a statement about the extract and asked how far you agree. It is worth 20 marks, the biggest reading question, so give it the most time.\nPlan three or four points. Decide your line (mostly agree, partly agree) and back it with quotations from across the part of the text you are given. Comment on the writer's methods and the effect on the reader.",
      },
      {
        title: 'How marks are given',
        text: "The reading questions are marked in levels, from a basic response up to a detailed, convincing one. Higher levels reward clear explanation, well-chosen evidence and insight into the writer's choices.\nThe assessment objectives behind it are AO1 (find and understand information), AO2 (language and structure) and AO4 (evaluate). Aim to be precise and perceptive, not just to list features.",
      },
    ],
    check: [
      {
        q: "How many marks is Section A of Paper 1 worth, and what is the mark for Q4?",
        a: "Section A is 40 marks, and Q4 is 20 marks.",
      },
      {
        q: "What does Q3 ask you to write about?",
        a: "Structure: how the writer organises the extract, such as shifts of focus, pace changes and the ending, and why.",
      },
      {
        q: "Rewrite this so it explains an effect: ‘The writer uses a simile.’",
        a: "Sample: ‘The simile comparing the silence to a held breath makes the moment feel tense, as if something is about to happen.’",
      },
      {
        q: "Why should you read the whole extract before answering Q1?",
        a: "You need to understand the story and the lines you are told to use sit inside it. A rushed read leads to errors across all questions.",
      },
      {
        q: "Give one good way to start a Q4 answer.",
        a: "State your view briefly, for example ‘I mostly agree because the writer builds tension throughout’, then back it up with a quotation and an effect.",
      },
    ],
  },

  'Paper 1: Creative writing': {
    keyPoints: [
      'Q5 is 40 marks: 24 for content and organisation, 16 for technical accuracy (spelling, punctuation, grammar, vocabulary).',
      'You choose descriptive or narrative writing, based on a picture or a short prompt.',
      'Plan for about 5 minutes, then write for about 35 and check for 5.',
      'Show, do not tell: use one clear setting or moment and pick strong detail.',
      'Vary your sentences and paragraphs on purpose to control pace.',
    ],
    steps: [
      {
        title: 'What Q5 asks',
        text: "You choose between two tasks. Both are worth 40 marks in total. One is a description, the other is a story, and you may be given a picture as a starting point.\nAbout 45 minutes is the usual advice, including a short plan.",
      },
      {
        title: 'Choose and plan fast',
        text: "Pick the task where an idea comes to you quickly. Jot down a tiny plan: setting, one focus, and an ending image or twist. Five minutes is enough.\nA narrow focus wins. One tense scene told well is better than a whole day rushed through.",
      },
      {
        title: 'Describe with the senses',
        text: "Use sight, sound, smell, touch and taste, not just what things look like. Pick unusual but fitting details.\nExample: instead of ‘The beach was empty and cold’, try ‘Gulls stitched the grey sky above a beach no one had touched since morning.’ Notice the verb and the precise detail.",
      },
      {
        title: 'Control the structure',
        text: "Decide how your piece moves. A description might zoom from wide view to a tiny detail. A story might open mid-moment, build, then end with a change.\nStart new paragraphs for shifts in time, place, speaker or mood. Aim for a few well-built paragraphs, not many tiny ones.",
      },
      {
        title: 'Vary sentences for effect',
        text: "A short sentence after longer ones creates a jolt. A long sentence with commas can carry a rush of feeling.\nExample: ‘The wind pulled at her coat, tugged her hair, and tried to carry her off the pier. She held on.’ Mix openings too, so not every sentence begins with ‘I’ or ‘The’.",
      },
      {
        title: 'Choose words carefully',
        text: "Aim for ambitious but accurate vocabulary. If you are not sure how to spell a word, choose a different one rather than guessing.\nUse figurative language sparingly. One fresh image beats a pile of clichés such as ‘as white as snow’.",
      },
      {
        title: 'Check for technical marks',
        text: "The 16 technical marks reward accurate spelling, punctuation, grammar and a range of sentence forms. Leave about 5 minutes to read through.\nHunt for missing full stops, comma splices, wrong apostrophes and tense slips. Fix them neatly.",
      },
    ],
    check: [
      {
        q: "How are the 40 marks for Q5 split?",
        a: "24 for content and organisation, 16 for technical accuracy.",
      },
      {
        q: "Why is a narrow focus a good idea?",
        a: "It lets you develop detail and control the writing, rather than rushing through a long plot.",
      },
      {
        q: "Improve this: ‘It was a scary house.’",
        a: "Sample: ‘The house leaned over the lane, every window dark and blank as a closed eye.’",
      },
      {
        q: "When should you start a new paragraph?",
        a: "When there is a shift in time, place, speaker, focus or mood.",
      },
      {
        q: "Name two ways to vary your sentences.",
        a: "Use a short sentence after long ones; begin sentences with different word types such as a verb, an adverb or a phrase.",
      },
    ],
  },

  'Paper 2: Reading non-fiction': {
    keyPoints: [
      'Paper 2 is 1 hour 45 minutes, 80 marks. Reading is 40 marks across four questions: 4, 8, 12 and 16.',
      'You get two sources: one from the 19th century and one from the 20th or 21st century, linked by a theme.',
      'Q1: pick four true statements. Q2: summarise differences. Q3: language of one source. Q4: compare perspectives.',
      'For Q2 and Q4, write about both sources and link them with comparison words.',
      'Perspective means how a writer feels about the subject, and how you can tell.',
    ],
    steps: [
      {
        title: 'Know the layout',
        text: "There are two non-fiction sources on the same topic, one older and one modern. Section A has four questions worth 4, 8, 12 and 16 marks. Section B is one 40-mark writing task.\nThe total time is 1 hour 45 minutes, so aim for around 15 minutes of reading and 45 minutes for the questions.",
      },
      {
        title: 'Q1: true or false',
        text: "You are given a list of eight statements and must shade the four that are true. This question is worth 4 marks.\nCheck each one against the lines named in the question. Watch out for statements that are almost right but change one word.",
      },
      {
        title: 'Q2: differences',
        text: "You write a short summary of how the two sources differ on a given point. It is worth 8 marks.\nUse an inference, not only a copied quotation. Example: Source A suggests the traveller found the city exciting, whereas Source B implies the writer felt trapped there. Link each point with ‘whereas’ or ‘in contrast’.",
      },
      {
        title: 'Q3: language of one source',
        text: "You analyse how one source uses language to achieve an effect. It is worth 12 marks, so go deeper than Paper 1 Q2.\nSelect precise quotations and comment on word choices, tone and techniques such as rhetorical questions, lists and emotive vocabulary. Explain what each does to the reader.",
      },
      {
        title: 'Q4: compare perspectives',
        text: "Compare the writers' viewpoints and the methods they use to show them. It is worth 16 marks.\nPick two or three points of comparison, such as attitude to a place, or tone. For each, give a short quotation from each source and explain the difference. Remember both sources need equal attention.",
      },
      {
        title: 'Old texts, new texts',
        text: "The 19th-century source may use longer sentences and older vocabulary. Read slowly and look for the main message.\nDo not be put off by unfamiliar words; use context to work out meaning. You are marked on your understanding, not on historical knowledge.",
      },
      {
        title: 'How marks are given',
        text: "The longer reading questions are marked in levels, with higher levels rewarding clear comparison, precise evidence and convincing explanation. The objectives behind these questions are AO1, AO2 and AO3 (comparing writers' ideas and perspectives).\nPractise timing: do not spend 20 minutes on a 4-mark question.",
      },
    ],
    check: [
      {
        q: "How many marks are the four reading questions on Paper 2?",
        a: "4, 8, 12 and 16, making 40 marks.",
      },
      {
        q: "What kind of texts appear on Paper 2?",
        a: "Two non-fiction sources on a linked theme, one from the 19th century and one from the 20th or 21st century.",
      },
      {
        q: "What should Q2 focus on?",
        a: "Differences between the two sources on the point named in the question, supported by inferences.",
      },
      {
        q: "Write a linking sentence for a Q4 comparison.",
        a: "Sample: ‘Whereas Source A sees the town as welcoming, Source B presents it as hostile.’",
      },
      {
        q: "What is a writer's perspective?",
        a: "Their attitude or viewpoint about the subject, shown through tone and word choices.",
      },
    ],
  },

  'Paper 2: Writing to present a viewpoint': {
    keyPoints: [
      'Q5 is 40 marks: 24 for content and organisation, 16 for technical accuracy.',
      'You write something like an article, letter, speech or report that argues a point of view.',
      'Know your audience and form before you start: it decides tone and layout.',
      'Plan 3 to 5 clear paragraphs, each with one main idea and a strong opening sentence.',
      'Use persuasive devices on purpose, not in every sentence.',
    ],
    steps: [
      {
        title: 'Read the task closely',
        text: "The task gives a statement or topic and tells you the form (such as a speech or an article) and the audience. Underline all three.\nA letter to a head teacher needs a different tone from a blog for teenagers. Match language and layout to the form.",
      },
      {
        title: 'Take a clear stance',
        text: "Decide what you think and stick to it. A strong, focused opinion is easier to organise than a vague one.\nYou do not have to believe it yourself. Choose the side that gives you the best ideas and examples.",
      },
      {
        title: 'Plan your paragraphs',
        text: "Jot down 3 to 5 main points in a sensible order. Put a strong point first, a surprising point in the middle, and finish with a powerful one.\nPlan an opening that hooks the reader and an ending that returns to your main idea.",
      },
      {
        title: 'Build persuasive paragraphs',
        text: "Start each paragraph with a clear topic sentence. Then back it up with an example, a fact, or a short anecdote, and explain why it matters.\nExample: ‘Schools should start later. Teenagers' body clocks run late, so a 9 a.m. start asks them to learn while still half asleep.’",
      },
      {
        title: 'Use devices wisely',
        text: "Rhetorical questions, lists of three, direct address (‘you’) and contrast can all work well. Use each only where it helps your point.\nOverdoing them sounds forced. Mix emotional appeal with logic and a calm, confident tone.",
      },
      {
        title: 'Structure and openers',
        text: "Link paragraphs with connectives and ideas, not just ‘Firstly, secondly’. Try phrases like ‘Yet there is a bigger problem’ or ‘Consider what happens next’.\nVary the length and shape of paragraphs and sentences so the piece feels alive.",
      },
      {
        title: 'Finish and check',
        text: "End with a memorable close, not a repeat of the opening. Leave 5 minutes to proofread.\nCheck spelling, punctuation, apostrophes and that your sentences are complete. These are the 16 technical marks.",
      },
    ],
    check: [
      {
        q: "How are the marks for Paper 2 Q5 divided?",
        a: "24 for content and organisation, 16 for technical accuracy.",
      },
      {
        q: "What three things should you underline in the task?",
        a: "The form (e.g. speech), the audience and the topic or statement.",
      },
      {
        q: "Why plan before writing?",
        a: "It gives you a clear order of ideas, a strong opening and ending, and better organised paragraphs.",
      },
      {
        q: "Write an opening line for an article arguing homework should be shorter.",
        a: "Sample: ‘Imagine finishing school at four and still being chained to a desk at nine.’",
      },
      {
        q: "Name two persuasive devices and say when to use them.",
        a: "E.g. rhetorical questions to make the reader think, and a list of three to build emphasis. Use them where they support a key point.",
      },
    ],
  },

  'Spelling, punctuation and grammar': {
    keyPoints: [
      'Technical accuracy is worth 16 marks on each Q5 writing task, and in total about a fifth of the whole qualification.',
      'Use full stops, capital letters and commas correctly before trying fancy punctuation.',
      'Show range: colons, semi-colons, dashes, brackets and a mix of sentence types.',
      'Paragraph for a reason: new time, place, speaker or idea.',
      'Spell the words you use accurately, and swap risky words for ones you can spell.',
    ],
    steps: [
      {
        title: 'Why it matters',
        text: "Each writing question (Paper 1 Q5 and Paper 2 Q5) has 16 marks for technical accuracy. That covers sentence structure, punctuation, spelling and vocabulary.\nA good idea with messy sentences loses marks, so treat accuracy as part of your plan.",
      },
      {
        title: 'Sentence boundaries',
        text: "Every sentence needs a capital letter, a full stop (or ? or !) and a complete idea. The most common mistake is the comma splice, where two full sentences are joined with just a comma.\nWrong: ‘It was late, we went home.’ Fix it with a full stop, a semi-colon, or a connective: ‘It was late, so we went home.’",
      },
      {
        title: 'Commas and apostrophes',
        text: "Use commas in lists, after openers like ‘Slowly,’ and around extra information.\nApostrophes show missing letters (don't) or belonging (the dog's lead, the dogs' lead). They are never used for plain plurals: ‘three dog's’ is wrong. Remember its (belonging) and it's (it is).",
      },
      {
        title: 'Range of punctuation',
        text: "Once the basics are secure, add a colon to introduce a list or explanation, a semi-colon to link two closely related sentences, and dashes or brackets for asides.\nExample: ‘The room was silent; nobody dared to speak.’ Use them correctly or not at all.",
      },
      {
        title: 'Sentence variety',
        text: "Combine simple sentences, compound sentences (with ‘and’, ‘but’, ‘so’) and complex sentences (with ‘because’, ‘although’, ‘while’). Add the odd very short one for impact.\nStart some sentences with an -ing word, an adverb or a prepositional phrase: ‘Trembling, she opened the door.’",
      },
      {
        title: 'Paragraphs and flow',
        text: "Begin a new paragraph when time, place, speaker or topic changes. Aim for a deliberate structure, not a wall of text or a stream of one-line paragraphs.\nLink ideas with connectives such as ‘however’, ‘meanwhile’ and ‘as a result’.",
      },
      {
        title: 'Spelling strategies',
        text: "Learn the usual troublemakers: there/their/they're, to/too/two, your/you're, of/have (could have, not could of).\nBreak long words into chunks, and keep a list of words you misspell. If unsure in the exam, swap in a simpler word you can spell.",
      },
      {
        title: 'Proofread properly',
        text: "Set aside five minutes. Read slowly, pointing at each word, so you see what is written rather than what you meant.\nLook for missing capitals, run-on sentences, apostrophes and tense changes. Neat corrections are fine.",
      },
    ],
    check: [
      {
        q: "How many marks for technical accuracy on each Q5 writing task?",
        a: "16 marks.",
      },
      {
        q: "Fix this comma splice: ‘I was tired, I kept walking.’",
        a: "Sample: ‘I was tired, but I kept walking.’ or ‘I was tired; I kept walking.’",
      },
      {
        q: "Choose the correct word: (Their / There / They're) going to the park.",
        a: "They're (they are).",
      },
      {
        q: "When should you start a new paragraph?",
        a: "When the time, place, speaker or topic changes.",
      },
      {
        q: "Correct: ‘The cats bowl was empty.’ (one cat)",
        a: "‘The cat's bowl was empty.’",
      },
    ],
  },
}
