import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Head from './head'

const Profile = () => {
  const { user } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div
          id="title"
          className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10"
        >
          Profile
          <div id="user"> {user} </div>
        </div>
        <div>
          <Link to="/dashboard">
            Go to Root
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

Profile.propTypes = {}

export default Profile
