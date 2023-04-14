import moment from "moment/moment";
import { useState } from "react";
import "./App.css";
import Calendar from "./pages/Calendar";

function App() {
  const [newDate, seNewtDate] = useState(new Date());

  return (
    <div className="App">
      <div className="calender-heading">
        Date Props Calendar
        <hr className="hr" />
      </div>
      <div className="current-date">
        Current Calendar Date: {moment(newDate).format("ll")}
      </div>
      <Calendar date={newDate} seNewtDate={seNewtDate} />

      <div className="date-example">
        Date Prop's Examples:
        <div>new Date("2022-03-25")</div>
        <div> new Date("2021-04-15")</div>
        <div> new Date("2014-08-14")</div>
      </div>
      <div className="discription">
        Copy an example and paste into Calendar props Or You can click on the
        date then date Change
      </div>
    </div>
  );
}

export default App;
