import React from 'react'
import "./MyInput.sass"
const MyInput = (props: any) => {
  return (
    <input {...props} type="text" name='card_title' className='input_card_title' placeholder='Введите задание...'/>
  )
}

export default MyInput