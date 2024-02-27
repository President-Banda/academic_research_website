import React from 'react'

const ResearchComponent = () => {
  return (
    <div className="sm:grid-flow-row md:grid md:grid-cols-5">
      <div className='col-start-2 justify-center mb-5'>
        <div className='mb-5'>
            <h1 className='text-2xl font-medium'>
              Research
            </h1>
            <p>
              Research statement
            </p>
          </div>
      </div>

      <div className='row-start-2 col-start-2 justify-center mb-5'>
          <h1 className='text-xl font-medium'>
            Research topic one
          </h1>
          <h2 className='text-lg'>
            The opening intro to research title two
          </h2>
          <p>
            Research statement
          </p>
        </div>
    </div>
  )
}

export default ResearchComponent