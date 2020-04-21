import React, {useEffect} from 'react'
import {
  addVote, addAnecdote
} from './reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import NewAnecdote from './components/AnecdoteForm'
import Anecdotes from './components/Anecdotes'
import Notification from './components/Notification'
import Filter from './components/Filter'
import anecdoteService from './services/anecdotes'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <Anecdotes />
      <NewAnecdote />
    </div>
  )
}

export default App
