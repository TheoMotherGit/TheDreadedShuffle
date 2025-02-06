import { useState } from 'react'

import '../styles/SeatingBank4.scss'

function SeatingBank4() {
  const [seating, setSeating] = useState(0)

  return (
    <div className='seating-bank-4-container'>

      <div className='seat seat-1'>
        <p>NAME</p>
      </div>

      <div className='seat seat-2'>
        <p>NAME</p>
      </div>

      <div className='seat seat-3'>
        <p>NAME</p>
      </div>

      <div className='seat seat-4'>
        <p>NAME</p>
      </div>   

      <div className='seat seat-5'>
        <p>NAME</p>
      </div>

      <div className='seat seat-6'>
        <p>NAME</p>
      </div>

      <div className='seat seat-7'>
        <p>NAME</p>
      </div>

    </div>
  )
}

export default SeatingBank4
