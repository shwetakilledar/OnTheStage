import { ChangeEvent, useState } from 'react'
import { DateTimeEditorProps } from './DateTimeEditor'
import { formatCurrentDateTimeToUTC, formatDateToTimeZone } from '../utils/date'
import moment from 'moment-timezone'

interface useDateTimeEditorProps {
  utcDateTime: string
}

export const useDateTimeEditor = ({ utcDateTime }: useDateTimeEditorProps) => {
  const [date, setDate] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
  }

  const onSave = () => {
    let dateToUtc
    if (!date) {
      dateToUtc = utcDateTime
    } else {
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
      dateToUtc = formatCurrentDateTimeToUTC(date, userTimeZone)
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
