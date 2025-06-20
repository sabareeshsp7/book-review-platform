"use client"

import type React from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import type { RootState } from "../store"
import { User, Mail, Calendar } from "lucide-react"

const UserProfilePage: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth)
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(user?.name || "")
  const [email, setEmail] = useState(user?.email || "")

  if (!user) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Please log in to view your profile.</p>
      </div>
    )
  }

  const handleSave = () => {
    // TODO: Implement profile update
    setIsEditing(false)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <User className="h-8 w-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-lg text-gray-900">{user.name}</p>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Mail className="h-8 w-8 text-green-600" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-lg text-gray-900">{user.email}</p>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <Calendar className="h-8 w-8 text-purple-600" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
              <p className="text-lg text-gray-900">January 2024</p>
            </div>
          </div>

          {isEditing && (
            <div className="flex space-x-4 pt-4">
              <button onClick={handleSave} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                Save Changes
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      {/* User Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-blue-600">12</h3>
          <p className="text-gray-600">Reviews Written</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-green-600">8</h3>
          <p className="text-gray-600">Books Read</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold text-purple-600">4.2</h3>
          <p className="text-gray-600">Average Rating</p>
        </div>
      </div>
    </div>
  )
}

export default UserProfilePage
