import { formatDateToTimeZone } from '../utils/date'
import { useDateTimeEditor } from './useDateTimeEditor'

interface DateTimeEditorProps {
  utcDateTime: string
  timeZone: string
}

const DateTimeEditor = ({ utcDateTime, timeZone }: DateTimeEditorProps) => {
  const { onChange, onSave } = useDateTimeEditor()
  return (
    <div style={{ display: 'flex', marginRight: '10px' }}>
      <input
        type="datetime-local"
        value={formatDateToTimeZone(utcDateTime, timeZone)}
        onChange={onChange}
      />
      <button onClick={onSave}>Save</button>
    </div>
  )
}

export default DateTimeEditor
