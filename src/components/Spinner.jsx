import React from 'react'

function Spinner() {
  return (
    <div className='flex flex-col justify-center items-center gap-y-6 h-[100vh]'>
        <div className='loader'></div>
        <div>Loading...</div>
    </div>
  )
}

export default Spinner