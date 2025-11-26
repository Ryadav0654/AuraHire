import React, { ChangeEventHandler } from 'react'
import Input from './Input'

const JobForm = () => {
  return (
    <div>
        <form action="submit" method="post">
            {/* <Input className='' onchange={(e: ChangeEventHandler<HTMLInputElement>) => {
                e.target.value
            }}/> */}
        </form>
    </div>
  )
}

export default JobForm