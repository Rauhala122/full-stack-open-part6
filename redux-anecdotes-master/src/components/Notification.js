import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const notification = props.notification
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const showAnecdote = () => {
    if (notification === "") {
      return (
        <div>

        </div>
      )
    } else {
      return (
        <div style={style}>
          {notification}
        </div>
      )
    }
  }

  return (
    showAnecdote()
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification
