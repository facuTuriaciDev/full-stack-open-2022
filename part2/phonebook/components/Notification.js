const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={message.includes('|ERROR|') ? 'error' : 'success'}>
      {message}
    </div>
  )
}

export default Notification