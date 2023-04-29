import { ChangeEvent, useState } from 'react'
import {
  formatCurrentDateTimeToUTC,
  formatDateTimeWithoutHour,
} from '../utils/date'
import moment from 'moment-timezone'

export const useDateTimeEditor = () => {
  const [date, setDate] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
  }

  const onSave = () => {
    if (!date) {
      alert('Please enter date')
      return
    }

    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    let dateToUtc = formatCurrentDateTimeToUTC(
      date,
      userTimeZone,
      formatDateTimeWithoutHour,
    )

    if (!moment(dateToUtc).isValid()) {
      alert('Invalid date')
      return
    }

    const payload = { Date: dateToUtc }

    fetch('/api/savePerformance', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        console.log(response.status)
        // for now setting it to empty string
        setDate('')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return { onChange, onSave }
}
