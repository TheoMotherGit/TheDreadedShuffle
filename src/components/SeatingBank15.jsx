import { useState } from 'react'

import '../styles/SeatingBank15.scss'

function SeatingBank15() {
  const [seating, setSeating] = useState(0)

  return (
    <div className='seating-bank-15-container'>

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

    </div>
  )
}

export default SeatingBank15
