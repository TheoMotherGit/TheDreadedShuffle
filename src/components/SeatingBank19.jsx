import { useState } from 'react'

import '../styles/SeatingBank19.scss'

function SeatingBank19() {
  const [seating, setSeating] = useState(0)

  return (
    <div className='seating-bank-19-container'>

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

export default SeatingBank19
