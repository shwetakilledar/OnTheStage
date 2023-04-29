import "./styles.css";
import DateTimeEditor from "./components/DateTimeEditor";

export default function App() {
  return (
    <div className="App">
      <DateTimeEditor
        utcDateTime="2023-05-14 02:00:00"
        timeZone="America/Los_Angeles"
      />
    </div>
  );
}
