import React from 'react';
import DatePicker  from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react';

function DateDrop() {
  const [selectedDate, setSelectedDate] =  useState(null);
  return (
    <div className='mt-1 ' >
         <DatePicker className='bg-purple-300 pt-1 rounded-lg placeholder: checkin' selected = {selectedDate}
         onChange = {date => setSelectedDate(date)}
        />
         <h1 className='semibold text-sm mt-1'> Checkin Date</h1>
    </div>
  )
}

export default DateDrop