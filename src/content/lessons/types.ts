/** One original lesson per spec topic. Written for this app (not copied from any site) and kept to what the exam board's specification asks for. */
export interface LessonStep {
  /** Short heading, 2 to 6 words. */
  title: string
  /** 2 to 5 short sentences in plain English. Use \n for a line break. Show a worked example where the topic has one. */
  text: string
}

export interface Lesson {
  /** 3 to 6 one-line key points (used as the Key points panel when the topic has no hand-written notes). */
  keyPoints: string[]
  /** 4 to 7 steps, taught in order. */
  steps: LessonStep[]
  /** 3 to 5 questions with short model answers, shown at the end of the lesson. */
  check: { q: string; a: string }[]
}
