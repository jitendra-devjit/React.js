import React from 'react'

const Card = ({username,description,visitesite="Read more"}) => {


  return (
    <div className="flex items-center justify-center min-h-80 bg-sky-300 overflow-hidden mb-1.5">
        <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src="src/cat1.jpeg"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
            <p className="text-gray-400">
              {description}
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            {visitesite}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card;