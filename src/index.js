import React from "react"
import ReactDOM from "react-dom/client"
import { faker } from "@faker-js/faker"
import CommentDetail from "./CommentDetails"
import ApprovalCard from "./ApprovalCard"

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          author='Sam'
          timeAgo='Today at 4:45PM'
          content='I like the writing!'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Alex'
          timeAgo='Today at 2:00AM'
          content='Nice blog post!'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Jane'
          timeAgo='Yesterday at 5:00PM'
          content='I like the subject!'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
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
