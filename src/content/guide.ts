import type { IconName } from '../ui/Icon'

export interface GuideStep {
  icon: IconName
  title: string
  body: string
  points?: string[]
}

/** Shown as the quick tutorial on first run and as the Help page. Keep it short and plain. */
export const GUIDE: GuideStep[] = [
  {
    icon: 'target',
    title: 'What this app is for',
    body: 'MentalMaxxing tells you what to revise today, so you never waste time deciding. You write your answers on paper, like in the real exam. The app schedules everything and shows you how much you are improving.',
  },
  {
    icon: 'home',
    title: 'Your daily plan',
    body: 'Open the app and the big card at the top is your next mission. Do it, come back, and the next one appears. A normal day is three missions and about 20 minutes. Missed a day? No penalty. Just carry on.',
  },
  {
    icon: 'cards',
    title: 'The Queue: how a card works',
    body: 'The Queue brings back each card just before you would forget it. That gap is what builds memory.',
    points: [
      'Read the question and write your answer on paper.',
      'Rate how sure you are, 1 to 5, before you look.',
      'Reveal the answer and check your paper.',
      'Tell the app how it went: Again, Hard, Good or Easy.',
    ],
  },
  {
    icon: 'check',
    title: 'Rate yourself honestly',
    body: 'The rating decides when you see the card again. Being honest beats feeling good.',
    points: [
      'Again: you missed it. It comes back in 10 minutes.',
      'Hard: you got there with effort. It returns soon.',
      'Good: you knew it. It returns after a few days.',
      'Easy: no effort. It returns much later. If it was not really easy, you will be told it came back too soon.',
    ],
  },
  {
    icon: 'brain',
    title: 'The other missions',
    body: 'Between card sessions the app picks one of these for you.',
    points: [
      'Brain Dump: write everything you remember about a topic from memory, then check what you missed.',
      'Prove It: explain an idea out loud in 90 seconds with your notes closed. Where you stall is where to study.',
      'Past paper: in the last 14 days before an exam, you practise real questions and record your marks.',
    ],
  },
  {
    icon: 'chart',
    title: 'Track your progress',
    body: 'Progress shows how much you recall each week, which subjects are strongest, and when you felt sure but were wrong. In Settings you can add your own cards and your own revision links for any subject.',
  },
]

export const FAQ: { q: string; a: string }[] = [
  { q: 'Why can I only reveal after rating how sure I am?', a: 'Guessing how well you know something before you check is one of the best memory exercises there is. It also lets the app spot when you feel sure but are wrong.' },
  { q: 'Why does the app tell me a card "came back too soon"?', a: 'You pressed Easy, so it will be spaced further out next time. Nothing is wrong.' },
  { q: 'Where do I get cards?', a: 'A few examples come built in. Add your own in Settings under My cards. Cards for a subject only appear if you picked that subject.' },
  { q: 'How does the Brain Dump photo check work?', a: 'Take a photo of what you wrote (or type it). The app reads the words on your phone, with no AI service and no upload, and compares them with the key points for that topic. It lists the points you missed. It matches words, so it can be wrong about an idea: you get the last word on every point, with \"I did write this\" and \"Not quite\" buttons, and the rating follows your calls. Where your words match but a number differs it asks you to check. Messy handwriting may need a quick fix in the text box; a flat, well-lit shot with dark pen works best.' },
  { q: 'Does it follow what my school is teaching?', a: 'Yes. In Study, paste anything from class (an organiser, notes, what you did this term) under "Where are you in class?" and the app matches it to the course and marks those topics as covered. Adding an organiser to a topic marks it too, and you can always tick "We have covered this" yourself. The Study list is your whole course in school order: the school does not publish its teaching sequence, so use the arrows to match your class and press "We\'re up to here" on the topic you are on. The app then revises those topics first and starts with a Learn mission for the newest one. It reads text only; photos and PDFs are not read yet.' },
  { q: 'How do I add my knowledge organiser?', a: 'Open the topic in Study. Paste the text, add a link, or upload a photo or PDF (it stays on this device). If you write each fact as "term: definition", one per line, the app makes flashcards from it.' },
  { q: 'What does the app tell me to study?', a: 'Each day it gives you a short plan: Learn a topic your class just covered, the Queue of cards due, then a Brain Dump or Prove It on the topic you are most foggy on. After each one you check yourself against your organiser or the key points.' },
  { q: 'Is my progress saved?', a: 'Yes. It is stored on this device straight away. When you are signed in it is also saved to your account, so it follows you to your phone or computer.' },
  { q: 'Can I use it offline?', a: 'Yes. Reviews made offline are kept and synced when you are back online.' },
]

export const SHORTCUTS: { keys: string; does: string }[] = [
  { keys: '1 to 5', does: 'Rate how sure you are, before revealing' },
  { keys: 'Space or Enter', does: 'Reveal the answer' },
  { keys: '1, 2, 3, 4', does: 'Again, Hard, Good, Easy' },
  { keys: 'Esc', does: 'Leave a session' },
]

export const INSTALL: { device: string; steps: string }[] = [
  { device: 'iPhone or iPad (Safari)', steps: 'Tap Share, then Add to Home Screen.' },
  { device: 'Android (Chrome)', steps: 'Tap the menu, then Install app.' },
  { device: 'Computer (Chrome or Edge)', steps: 'Click the install icon at the right of the address bar.' },
]
