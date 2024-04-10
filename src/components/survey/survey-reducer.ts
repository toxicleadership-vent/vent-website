export interface QuestionsState {
  questions: {
    q1: number
    q2: number
    q3: number
    q4: number
    q5: number
    q6: number
    q7: number
    q8: number
    q9: number
    q10: number
    summary: number
  }
}

export enum QuestionActionKinds {
  SAVE_QUESTION = 'SAVE_QUESTION',
  SHOW_ADDITIONAL_QUESTIONS = 'SHOW_ADDITIONAL_QUESTIONS',
  SAVE_INFO = 'SAVE_INFO',
  SAVE_FEEDBACK = 'SAVE_FEEDBACK',
}

export type QuestionsActions =
  | SaveQuestionAction
  | SaveAdditionalQuestions
  | SaveFeedback
  | SaveInfo

interface SaveAdditionalQuestions {
  type: QuestionActionKinds.SHOW_ADDITIONAL_QUESTIONS
  payload: { showAdditionalQuestions: boolean }
}

interface SaveFeedback {
  type: QuestionActionKinds.SAVE_FEEDBACK
  payload: Record<string, string | boolean>
}
interface SaveInfo {
  type: QuestionActionKinds.SAVE_INFO
  payload: Record<string, any>
}

interface SaveQuestionAction {
  type: QuestionActionKinds.SAVE_QUESTION
  payload: Record<string, number>
}

export const initialState = {
  questions: {
    q1: 0,
    q2: 0,
    q3: 0,
    q4: 0,
    q5: 0,
    q6: 0,
    q7: 0,
    q8: 0,
    q9: 0,
    q10: 0,
    summary: 0,
  },
  info: {
    age: undefined,
    ethnic: undefined,
    orientation: undefined,
    migrant: undefined,
    location: undefined,
    education: undefined,
  },
  feedback: { like: false, text: '' },
}

export function reducer(state: QuestionsState, action: QuestionsActions) {
  const { type, payload } = action

  switch (type) {
    case QuestionActionKinds.SAVE_QUESTION:
      return {
        ...state,
        questions: {
          ...state.questions,
          ...payload,
          summary: state.questions.summary + Object.values(payload)[0],
        },
      }
    case QuestionActionKinds.SAVE_INFO:
      return {
        ...state,
        info: { ...payload },
      }
    case QuestionActionKinds.SAVE_FEEDBACK:
      return { ...state, feedback: { ...payload } }
    default:
      return state
  }
}
