import { ChangeEvent, useState } from 'react'
import { DateTimeEditorProps } from './DateTimeEditor'
import { formatCurrentDateTimeToUTC, formatDateToTimeZone } from '../utils/date'
import moment from 'moment-timezone'

export const useDateTimeEditor = ({
  utcDateTime,
  timeZone,
}: DateTimeEditorProps) => {
  const [date, setDate] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
  }

  const onSave = () => {
    let dateToUtc
    if (!date) {
      dateToUtc = utcDateTime
    } else {
      dateToUtc = formatCurrentDateTimeToUTC(date, timeZone)
    }

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
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return { onChange, onSave }
}
