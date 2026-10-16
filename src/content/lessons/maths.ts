import type { Lesson } from './types'

// Edexcel 1MA1. One lesson per topic in topics.ts.
export const MATHS: Record<string, Lesson> = {
  Probability: {
    keyPoints: [
      'Probability runs from 0 (impossible) to 1 (certain). The probabilities of all the outcomes add up to 1.',
      'P(not A) = 1 − P(A).',
      'Independent events: P(A and B) = P(A) × P(B). Mutually exclusive events: P(A or B) = P(A) + P(B).',
      'Tree diagrams: multiply along the branches, add between the ends you want.',
      'Without replacement, the numbers change after each pick.',
    ],
    steps: [
      {
        title: 'The probability scale',
        text: 'A probability is a number from 0 to 1. 0 means it cannot happen, 1 means it is certain, and 0.5 means even chance. You can write it as a fraction, a decimal or a percentage.\nFor equally likely outcomes: probability = number of ways it can happen ÷ total number of outcomes. A fair dice shows a prime number (2, 3 or 5) with probability 3/6 = 1/2.',
      },
      {
        title: 'Outcomes add up to 1',
        text: 'Every possible outcome together has probability 1. So the chance something does not happen is 1 minus the chance it does.\nExample: the chance of rain is 0.3, so the chance of no rain is 1 − 0.3 = 0.7.\nIf a table of probabilities has a missing value, subtract the rest from 1.',
      },
      {
        title: 'Listing outcomes',
        text: 'To avoid missing any, list them in order. For two coins: HH, HT, TH, TT, so four outcomes, and P(one head and one tail) = 2/4 = 1/2.\nFor two dice, draw a 6 by 6 grid. There are 36 outcomes, and P(total 7) = 6/36 = 1/6.',
      },
      {
        title: 'Relative frequency',
        text: 'When outcomes are not equally likely (a biased dice), use experiments. Relative frequency = number of times it happened ÷ number of trials.\nMore trials give a better estimate. Expected number of times = probability × number of trials.\nExample: P(6) estimated as 0.2. In 150 rolls, expect 0.2 × 150 = 30 sixes.',
      },
      {
        title: 'And, or: the two rules',
        text: 'Independent events do not affect each other. For "A and B", multiply: P(A and B) = P(A) × P(B).\nMutually exclusive events cannot both happen. For "A or B", add: P(A or B) = P(A) + P(B).\nExample: a spinner has P(red) = 0.4. Spinning red twice in a row is 0.4 × 0.4 = 0.16.',
      },
      {
        title: 'Tree diagrams',
        text: 'Draw a branch for each outcome, writing the probability on it. Branches from one point add to 1.\nMultiply along the branches to get the chance of a path. Add the paths that give the result you want.\nSelecting without replacement changes the second set of probabilities: with 3 red and 2 blue counters, P(red then red) = 3/5 × 2/4 = 6/20 = 3/10.',
      },
      {
        title: 'Venn diagrams and sets',
        text: 'A Venn diagram shows how outcomes overlap. Fill in the overlap first, then the rest of each circle, then outside both circles.\nTo find a probability, divide the number in the region you want by the total. Notation: A ∩ B means in both, A ∪ B means in either, A′ means not A.',
      },
    ],
    check: [
      { q: 'The probability of winning a game is 0.35. What is the probability of not winning?', a: '1 − 0.35 = 0.65.' },
      { q: 'A bag has 4 red and 6 blue counters. Two are taken out without replacement. Find P(both red).', a: '4/10 × 3/9 = 12/90 = 2/15.' },
      { q: 'A biased coin lands on heads with probability 0.6. It is flipped 200 times. How many heads do you expect?', a: '0.6 × 200 = 120.' },
      { q: 'Two events are independent with P(A) = 0.5 and P(B) = 0.2. Find P(A and B).', a: '0.5 × 0.2 = 0.1.' },
    ],
  },
}
