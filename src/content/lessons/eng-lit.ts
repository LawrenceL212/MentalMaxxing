import type { Lesson } from './types'

// AQA GCSE English Literature 8702. One lesson per topic in topics.ts.
// Your school chooses the set texts, so these lessons teach method with invented examples.
export const ENG_LIT: Record<string, Lesson> = {
  Shakespeare: {
    keyPoints: [
      'Paper 1 Section A is Shakespeare: 34 marks (30 for the essay plus 4 for spelling, punctuation and grammar). The exam is closed book.',
      'You get an extract printed on the paper and one question about it and the rest of the play.',
      'Use the play your class is studying; the method is the same for all of them.',
      "AO1 is your argument and quotations, AO2 is the writer's methods, AO3 is context, AO4 is accurate writing.",
      'Write about the extract first, then widen to the whole play.',
    ],
    steps: [
      {
        title: 'The task',
        text: "Paper 1 is 1 hour 45 minutes and you answer on one Shakespeare play and one 19th-century novel. For Shakespeare you are given a printed extract and a question that asks about a character or theme in the extract and in the play as a whole.\nAbout 50 minutes on this section is a sensible plan.",
      },
      {
        title: 'Decode the question',
        text: "Underline the key words: the character or theme, and the verb (explore, how does). Then underline any quotation you spot in the extract that fits.\nA question might be about how a character is shown as ambitious. Keep that single idea in front of you for the whole answer.",
      },
      {
        title: 'Plan an argument',
        text: "Write a one-sentence answer to the question, then 3 or 4 points that support it. Choose one or two from the extract and one or two from elsewhere in the play.\nPut them in an order that builds, such as showing a change over time.",
      },
      {
        title: 'Build a paragraph',
        text: "Use a PEEL-style shape: Point, Evidence, Explanation, Link back to the question.\nExample: Point: the king is presented as fearful. Evidence: a short quote showing him jumping at shadows. Explain: the verb suggests he is guilty and anxious. Link: this supports the idea that power has made him weak.",
      },
      {
        title: 'Zoom in on language',
        text: "Pick a key word from your quotation and say what it suggests. Think about imagery, verbs, repetition and sound.\nShakespeare's stage directions and the way a character speaks matter too: short broken lines can show panic, long speeches can show control.",
      },
      {
        title: 'Add context (AO3)',
        text: "AO3 rewards ideas about the time the play was written and performed, such as beliefs about power, family, fate or the supernatural. Weave it in; do not add a separate history lesson.\nExample: a Jacobean audience believed kings were chosen by God, so a murdered king would feel shocking.",
      },
      {
        title: 'Track the whole play',
        text: "Show how the idea changes: where it starts, the turning point and how it ends. Use phrases such as ‘at the start’, ‘by the end’ and ‘this contrasts with’.\nYou do not need to retell the plot. Choose moments that prove your point.",
      },
      {
        title: 'Finish with accuracy',
        text: "AO4 gives 4 marks for spelling, punctuation and vocabulary on the Shakespeare question only. Learn how to spell the character names and key terms in your play.\nSpend a couple of minutes at the end checking your writing.",
      },
    ],
    check: [
      {
        q: "How many marks is the Shakespeare section, and what are the 4 extra marks for?",
        a: "34 marks in total. The 4 extra are for spelling, punctuation and grammar (AO4).",
      },
      {
        q: "What does AO3 reward?",
        a: "Understanding of the context of the text, such as the period it was written in and the ideas of the time, linked to the question.",
      },
      {
        q: "What does PEEL stand for?",
        a: "Point, Evidence, Explain, Link.",
      },
      {
        q: "Is Shakespeare an open-book exam?",
        a: "No. The extract is printed, but you do not take the play in.",
      },
      {
        q: "Write a short link sentence for a paragraph about ambition.",
        a: "Sample: ‘Therefore Shakespeare shows that ambition without restraint leads to ruin.’",
      },
    ],
  },

  'The 19th-century novel': {
    keyPoints: [
      'Section B of Paper 1 is the 19th-century novel: 30 marks, answering one question on an extract and the whole novel.',
      'Section B has no marks for spelling and punctuation (AO4 is on Shakespeare and modern texts).',
      'Use the novel your class is studying.',
      'Analyse a short quotation closely, then link to the rest of the book.',
      "Context means the society and beliefs of the author's day, linked to your point.",
    ],
    steps: [
      {
        title: 'The task',
        text: "You answer one question on your novel, with a printed extract, and you must write about both the extract and the book as a whole. It is worth 30 marks, and you should spend around 50 minutes on it.\nThe objectives are AO1 (response and quotations), AO2 (writer's methods) and AO3 (context).",
      },
      {
        title: 'Read the extract actively',
        text: "Read it twice. Mark the speaker, the setting, and any change in mood. Note interesting words and images.\nThen write one line on how the extract fits the question, such as ‘this shows the character's fear of being poor.’",
      },
      {
        title: 'Analyse a quotation',
        text: "Choose a short phrase of three to eight words. Say what it means, what a single word suggests, and what it does to the reader.\nFrom a public-domain example: Dickens calls Scrooge ‘a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner’. The run of harsh verbs makes him seem like a predator grabbing everything.",
      },
      {
        title: 'Use narrative methods',
        text: "Think about who tells the story, how the setting reflects mood, and how the writer builds suspense or sympathy. Descriptions of weather or houses often hint at feelings.\nExample: fog and darkness might suggest secrets or confusion.",
      },
      {
        title: 'Track an idea',
        text: "Pick one idea in the question and follow it through the book: the start, a turning point and the end. This gives a sense of the whole novel.\nSay how it develops: ‘Initially cold, the character softens after the crisis in the middle of the book.’",
      },
      {
        title: 'Weave in context',
        text: "Victorian society had strict class divisions, harsh poverty and ideas about duty and reputation. Link context only when it explains the writer's message.\nExample: when a writer shows a poor child suffering, the audience's attitude to charity and the workhouse helps explain why.",
      },
      {
        title: 'Conclude clearly',
        text: "Finish by answering the question in one or two sentences. Say what the writer wants the reader to think or feel.\nAvoid new points in the conclusion.",
      },
    ],
    check: [
      {
        q: "How many marks is the 19th-century novel question?",
        a: "30 marks.",
      },
      {
        q: "Does this question have marks for spelling and punctuation?",
        a: "No. Those AO4 marks only apply to the Shakespeare and modern texts questions.",
      },
      {
        q: "What does AO2 look at?",
        a: "The writer's use of language, form and structure and their effects.",
      },
      {
        q: "Why choose short quotations?",
        a: "They let you zoom in on key words and explain their effect precisely.",
      },
      {
        q: "How can you show you have covered the whole novel?",
        a: "Refer to different points, such as beginning, middle and end, to show how the idea changes.",
      },
    ],
  },

  'Modern prose or drama': {
    keyPoints: [
      'Paper 2 Section A is modern prose or drama: 34 marks (30 plus 4 for spelling, punctuation and grammar).',
      'You choose one question from a choice on your studied text; there is no extract printed.',
      'Use the text your class is studying; the skills carry across texts.',
      'Plan with a clear thesis, then support it with quotations from across the text.',
      'Paper 2 is 2 hours 15 minutes in total, with three sections.',
    ],
    steps: [
      {
        title: 'The exam shape',
        text: "Paper 2 lasts 2 hours 15 minutes and has three sections: modern texts, the poetry anthology and unseen poetry. For modern texts you pick one essay question from two on your set text.\nSpend about 45 minutes on it.",
      },
      {
        title: 'Choose wisely',
        text: "Read both questions. Pick the one where you can name at least three moments or quotations straight away.\nThe questions usually ask about a character, a theme or a relationship, and how the writer presents it.",
      },
      {
        title: 'Plan an argument',
        text: "Write a thesis sentence that answers the question directly. Then plan 3 or 4 points in a logical order.\nExample thesis: ‘The writer presents family loyalty as both a comfort and a trap.’ Each paragraph proves part of that.",
      },
      {
        title: 'Learn key quotations',
        text: "You cannot take the book in, so learn short quotations: 8 to 12 across different parts of the text, covering main characters and themes.\nChoose flexible ones that you can use for several questions, and practise explaining single words.",
      },
      {
        title: 'Write analytically',
        text: "Use a PETAL-type structure: Point, Evidence, Technique, Analysis, Link. Name a method such as symbolism, dialogue, stage directions or narrative voice, and explain its effect.\nFor drama, think about how an audience sees and hears the scene, not only what the words are.",
      },
      {
        title: 'Weave in context',
        text: "AO3 asks you to use context that explains the writer's ideas, like social attitudes, the time of writing or the setting.\nOnly use context that helps answer the question, and attach it to a detail from the text.",
      },
      {
        title: 'Accuracy marks',
        text: "AO4 gives 4 marks for spelling, punctuation and grammar and range of vocabulary on this question. Spell names and key words correctly and use varied sentences.\nKeep paragraphs controlled and leave time to check.",
      },
    ],
    check: [
      {
        q: "How long is Paper 2 and how many sections does it have?",
        a: "2 hours 15 minutes, three sections.",
      },
      {
        q: "How many marks are on the modern texts question?",
        a: "34 marks: 30 for the essay and 4 for spelling, punctuation and grammar.",
      },
      {
        q: "Why learn quotations before the exam?",
        a: "The book is not available in the exam, and no extract is printed for this section.",
      },
      {
        q: "What does PETAL stand for?",
        a: "Point, Evidence, Technique, Analysis, Link.",
      },
      {
        q: "Write a thesis sentence about a character's guilt.",
        a: "Sample: ‘The writer presents the character's guilt as a growing burden that shapes every choice he makes.’",
      },
    ],
  },

  'Poetry anthology': {
    keyPoints: [
      'Paper 2 Section B is 30 marks: you compare one printed poem with another from the anthology cluster your school studies.',
      'You need to know the poems in your cluster well; the one you compare it with comes from your own memory.',
      'Compare ideas, methods and attitudes in every paragraph, not one poem then the other.',
      'Analyse form and structure as well as language.',
      'Use the poems your class is studying.',
    ],
    steps: [
      {
        title: 'The task',
        text: "One poem from your cluster is printed on the paper. You choose one other poem from the same cluster and compare how each presents the theme in the question. It is worth 30 marks, with no marks for spelling and punctuation in this section.\nA good plan is about 45 minutes.",
      },
      {
        title: 'Choose the partner poem',
        text: "In the first minutes, scan the question for its theme, then pick the poem that shares it but handles it differently. A contrast often gives more to say than a poem which is similar.\nPractise pairing poems before the exam.",
      },
      {
        title: 'Compare in every paragraph',
        text: "Structure by point, not by poem. Each paragraph covers one idea and refers to both poems, using comparing phrases.\nExample: ‘Both poets show anger, but the first uses short blunt lines whereas the second lets its anger flow in a single long sentence.’",
      },
      {
        title: 'Language and imagery',
        text: "Choose precise words and images. Think about what a metaphor suggests, what sounds create, and what tone the speaker has.\nExample: harsh sounds such as ‘crack’ and ‘crash’ can make a poem feel violent.",
      },
      {
        title: 'Form and structure',
        text: "Look at stanzas, line length, rhyme, rhythm, enjambment (a sentence running on past a line break) and the turn near the end.\nAsk why the poet chose that shape. A regular pattern may suggest control, a broken one may suggest chaos.",
      },
      {
        title: 'Add context',
        text: "AO3 context means the ideas, events or setting behind the poems. Use only what helps explain the poets' attitudes, and link it to a detail in the text.\nIt can be a historical event, a belief, or the poet's background, if relevant.",
      },
      {
        title: 'Conclude the comparison',
        text: "Finish by saying which poem presents the idea more powerfully, or how their final messages differ.\nKeep it short and linked to the question.",
      },
    ],
    check: [
      {
        q: "How many marks is the anthology question?",
        a: "30 marks.",
      },
      {
        q: "Which poem do you choose yourself?",
        a: "The second poem, from the same cluster as the printed one.",
      },
      {
        q: "Why compare by point rather than by poem?",
        a: "It keeps both poems in each paragraph, so you show clear comparison throughout.",
      },
      {
        q: "Give a comparing phrase.",
        a: "E.g. ‘whereas’, ‘similarly’, ‘in contrast’, ‘both poets’.",
      },
      {
        q: "What is enjambment?",
        a: "When a sentence runs on past the end of a line without a pause.",
      },
    ],
  },

  'Unseen poetry': {
    keyPoints: [
      'Paper 2 Section C has two unseen poems: Q1 is 24 marks on the first poem, Q2 is 8 marks comparing the two.',
      'You cannot revise the poems, so you revise the method.',
      'Q1 rewards your response to ideas, language, form and structure (AO1 and AO2).',
      'Q2 asks how the poets present similar or different ideas, using methods.',
      'About 45 minutes in total is a good plan for this section.',
    ],
    steps: [
      {
        title: 'The task',
        text: "You see two poems you have not studied. Q1 asks about the first and is worth 24 marks. Q2 asks you to compare the second with the first and is worth 8 marks.\nThere is no context to learn here, so it is all about reading closely.",
      },
      {
        title: 'Read for meaning',
        text: "Read the poem slowly twice. Ask who is speaking, to whom, and what happens. Give it a one-line summary before you analyse.\nDo not panic about difficult lines. Use the title and the rest of the poem to help.",
      },
      {
        title: 'Spot the shift',
        text: "Many poems turn in tone or idea partway through. Look for a change in punctuation, a new image or a change from past to present.\nSaying how and why the poem shifts is a sign of insight.",
      },
      {
        title: 'Zoom in on words',
        text: "Choose three or four striking images or words. Explain what each suggests and how it adds to the overall feeling.\nExample: ‘silver’ for a river might make it seem precious or cold, depending on the context.",
      },
      {
        title: 'Comment on form',
        text: "Look at the stanza shape, line length, rhyme and rhythm. Say what the structure does.\nExample: a poem of short lines might feel nervous or hurried.",
      },
      {
        title: 'Plan Q1 paragraphs',
        text: "Start with an overview of the poem's idea. Then take it in order: beginning, middle, end. In each part, give evidence and explain its effect.\nAim for a clear voice: ‘the poet suggests’, ‘this creates’.",
      },
      {
        title: 'Compare in Q2',
        text: "For 8 marks, keep it short. Choose two or three points of comparison, such as attitude, imagery, or structure, and give a quotation from each poem.\nUse linking words and write about similarities and differences. Leave a couple of minutes for this question.",
      },
    ],
    check: [
      {
        q: "How many marks are Q1 and Q2 of the unseen section?",
        a: "Q1 is 24 marks and Q2 is 8 marks.",
      },
      {
        q: "What is the best first step with an unseen poem?",
        a: "Read it slowly twice and summarise it in one line: who is speaking and what is happening.",
      },
      {
        q: "What is a 'turn' in a poem?",
        a: "A change of tone, mood or idea part-way through the poem.",
      },
      {
        q: "Is context (AO3) assessed on the unseen question?",
        a: "No. It is a close-reading task about language, form and structure.",
      },
      {
        q: "Write a Q2 comparison sentence.",
        a: "Sample: ‘Both poems use nature imagery, but the first suggests peace whereas the second hints at danger.’",
      },
    ],
  },
}
