import { formatDateToTimeZone } from '../utils/date'
import { useDateTimeEditor } from './useDateTimeEditor'

export interface DateTimeEditorProps {
  utcDateTime: string
  timeZone: string
}

const DateTimeEditor = ({ utcDateTime, timeZone }: DateTimeEditorProps) => {
  const { defaultTime, onChange, onSave } = useDateTimeEditor({
    utcDateTime,
    timeZone,
  })
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="datetime-local"
        value={defaultTime}
        onChange={onChange}
        style={{ marginRight: '10px' }}
      />
      <span style={{ fontSize: '12px', marginRight: '10px' }}>{timeZone}</span>
      <button onClick={onSave}>Save</button>
    </div>
  )
}

export default DateTimeEditor
