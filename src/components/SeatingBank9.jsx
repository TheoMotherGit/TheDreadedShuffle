import { useState } from 'react'

import '../styles/SeatingBank9.scss'

function SeatingBank9() {
  const [seating, setSeating] = useState(0)

  return (
    <div className='seating-bank-9-container'>

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

      <div className='seat seat-8'>
        <p>NAME</p>
      </div>                                                                            
                                                                           
    </div>
  )
}

export default SeatingBank9
