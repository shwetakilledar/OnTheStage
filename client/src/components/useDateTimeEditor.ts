import { ChangeEvent, useState } from 'react'
import { DateTimeEditorProps } from './DateTimeEditor'
import { formatCurrentDateTimeToUTC, formatDateToTimeZone } from '../utils/date'
import moment from 'moment-timezone'

export const useDateTimeEditor = ({
  utcDateTime,
  timeZone,
}: DateTimeEditorProps) => {
  const defaultTime = formatDateToTimeZone(utcDateTime, timeZone)
  const [date, setDate] = useState(defaultTime)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
  }

  const onSave = () => {
    if (!date) {
      alert('Please enter date')
      return
    }

    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    let dateToUtc = formatCurrentDateTimeToUTC(date, userTimeZone)

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
        setDate(date)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return { defaultTime, onChange, onSave }
}
