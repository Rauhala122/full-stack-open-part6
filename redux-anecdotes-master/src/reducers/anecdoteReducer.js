import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {

  switch (action.type) {
    case "ADD_VOTE":
        const id = action.data.id
        return state.map(anecdote => anecdote.id !== id ? anecdote : action.data)
    case "ADD_ANECDOTE":
      return [...state, action.data]
    case "INIT_ANECDOTES":
      return action.data
    default:

  }

  return state
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes
    })
  }
}

export const addVote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.replace(anecdote)
    dispatch({
      type: "ADD_VOTE",
      data: newAnecdote
    })
  }
}

export const addAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: "ADD_ANECDOTE",
      data: newAnecdote
    })
  }
}

export default anecdoteReducer
