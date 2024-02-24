import React from 'react'

const Container = ({ children }) => {
  return (
    <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        { children }
    </div>
  )
}

export default Container