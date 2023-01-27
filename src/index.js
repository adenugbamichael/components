import React from "react"
import ReactDOM from "react-dom/client"
import { faker } from "@faker-js/faker"

const App = () => {
  return (
    <div className='ui container comments'>
      <div className='comment'>
        <a href='/' className='avatar'>
          <img alt='avatar' src={faker.image.avatar()} />
        </a>
        <div className='content'>
          <a href='/' className='autho r'>
            Sam
          </a>
          <div className='metadata'>
            <span className='date'>Today at 6:00P.M</span>
          </div>
          <div className='text'>Nice blog post!</div>
        </div>
      </div>
      <div className='comment'>
        <a href='/' className='avatar'>
          <img alt='avatar' src={faker.image.avatar()} />
        </a>
        <div className='content'>
          <a href='/' className='autho r'>
            Sam
          </a>
          <div className='metadata'>
            <span className='date'>Today at 6:00P.M</span>
          </div>
          <div className='text'>Nice blog post!</div>
        </div>
      </div>
      <div className='comment'>
        <a href='/' className='avatar'>
          <img alt='avatar' src={faker.image.avatar()} />
        </a>
        <div className='content'>
          <a href='/' className='autho r'>
            Sam
          </a>
          <div className='metadata'>
            <span className='date'>Today at 6:00P.M</span>
          </div>
          <div className='text'>Nice blog post!</div>
        </div>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// https://semantic-ui.com/
