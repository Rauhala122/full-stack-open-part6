import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAnecdote, addVote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const Anecdotes = (props) => {
  const filter = useSelector(state => state.filter)
  const anecdotes = useSelector(state => state.anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase())))
  const dispatch = useDispatch()

  anecdotes.sort((a, b) => -(a.votes - b.votes))

  const vote = (id) => {
    var noti;
    const votedAnecdote = anecdotes.find(a => a.id === id)
    const newAnecdote = {...votedAnecdote, votes: votedAnecdote.votes += 1}
    dispatch(addVote(newAnecdote))
    dispatch(notificationChange(`You voted anecdote "${votedAnecdote.content}"`, 5))
  }

  const clear = (noti) => {
    clearTimeout(noti)
    console.log(noti)
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Anecdotes
