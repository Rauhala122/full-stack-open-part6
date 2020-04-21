import React from 'react'
import { useDispatch, connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const NewAnecdote = (props) => {

  const generateId = () =>
    Number((Math.random() * 1000000).toFixed(0))
  const dispatch = useDispatch()
  const add = async (event) => {
    clearTimeout()
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ""
    props.notificationChange("New anecdote added", 5)
    props.addAnecdote(content)
  }
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={add}>
        <div><input name="anecdote"/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default connect(
  null,
  { notificationChange,
    addAnecdote
  }
)(NewAnecdote)
