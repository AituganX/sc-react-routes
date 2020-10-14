import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div
          id="title"
          className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10"
        >
          Dashboard
        </div>
        <div>
          <Link to="/dashboard/profile/f2aff656-4441-4eb8-9421-96dc51afb5a2">
            Go to Profile
          </Link>
        </div>
        <div>
          <Link to="/dashboard/main">
            Go to Main
          </Link>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
