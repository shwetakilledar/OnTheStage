import { formatDateToTimeZone } from '../utils/date'
import { useDateTimeEditor } from './useDateTimeEditor'

export interface DateTimeEditorProps {
  utcDateTime: string
  timeZone: string
}

const DateTimeEditor = ({ utcDateTime, timeZone }: DateTimeEditorProps) => {
  const { onChange, onSave } = useDateTimeEditor({
    utcDateTime,
  })
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="datetime-local"
        defaultValue={formatDateToTimeZone(utcDateTime, timeZone)}
        onChange={onChange}
        style={{ marginRight: '10px' }}
      />
      <span style={{ fontSize: '12px', marginRight: '10px' }}>{timeZone}</span>
      <button onClick={onSave}>Save</button>
    </div>
  )
}

export default DateTimeEditor
