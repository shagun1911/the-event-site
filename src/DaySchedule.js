import React, { useState } from "react";
import "./DaySchedule.css";

const DaySchedule = () => {
  const [selectedSchedule, setSelectedSchedule] = useState("junior");

  const handleScheduleChange = (schedule) => {
    setSelectedSchedule(schedule);
  };

  return (
    <section className="day-schedule">
      <h2>Day Schedule</h2>

      <div className="button-container">
        <button
          className={selectedSchedule === "junior" ? "active" : ""}
          onClick={() => handleScheduleChange("junior")}
        >
          Schedule for Junior
        </button>
        <button
          className={selectedSchedule === "senior" ? "active" : ""}
          onClick={() => handleScheduleChange("senior")}
        >
          Schedule for Senior
        </button>
      </div>

      {selectedSchedule === "junior" ? (
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Session</th>
              <th>Details</th>
              <th>Venue</th>
              <th>Responsible Team</th>
            </tr>
          </thead>
          <tbody>
            {/* Junior Schedule Content */}
            <tr>
              <td>8:00 AM - 9:00 AM</td>
              <td>Breakfast</td>
              <td>Morning meal to start the day.</td>
              <td>PG</td>
              <td>Catering Team of PG</td>
            </tr>
            <tr>
              <td>10:00 AM - 12:00 PM</td>
              <td>Project Time</td>
              <td>Research and Learn</td>
              <td>PG</td>
              <td>Moderation Team</td>
            </tr>
            <tr>
              <td>12:00 AM - 1:00 PM</td>
              <td>Lunch</td>
              <td>Lunch</td>
              <td>PG</td>
              <td>Catering Team of PG</td>
            </tr>
            <tr>
              <td>1:00 PM - 2:00 PM</td>
              <td>Travel Time</td>
              <td>From PG to Campus</td>
              <td>-</td>
              <td>Moderation Team</td>
            </tr>
            <tr>
              <td>2:00 PM - 2:10 PM</td>
              <td>Attendance</td>
              <td>Mandatory for All</td>
              <td>Training Hall</td>
              <td>Moderation Team</td>
            </tr>
            <tr>
              <td>2:10 PM - 4:10 PM</td>
              <td>Theory Session</td>
              <td>Theory Session by the Mentor</td>
              <td>Training Hall</td>
              <td>Moderation Team</td>
            </tr>
            <tr>
              <td>4:10 PM - 4:30 PM</td>
              <td>Tea Break</td>
              <td>Refreshments and Break</td>
              <td>Lounge Area</td>
              <td>Hospitality Team</td>
            </tr>
            <tr>
              <td>4:30 AM - 6:30 PM</td>
              <td>Workshop</td>
              <td>Hands-on training</td>
              <td>Training Hall</td>
              <td>Moderation Team</td>
            </tr>
            <tr>
              <td>7:30 PM - 8:30 PM</td>
              <td>Dinner Time</td>
              <td>Dinner</td>
              <td>PG</td>
              <td>Hospitality Team</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Session</th>
              <th>Details</th>
              <th>Venue</th>
              <th>Responsible Team</th>
            </tr>
          </thead>
          <tbody>
            {/* Senior Schedule Content */}
            <tr>
              <td>7:00 AM - 8:00 AM</td>
              <td>Breakfast</td>
              <td>Morning meal to start the day</td>
              <td>PG</td>
              <td>Catering Team of PG</td>
            </tr>
            <tr>
              <td>8:00 AM - 8:20 AM</td>
              <td>Travel Time</td>
              <td>From PG to Campus</td>
              <td>-</td>
              <td>Moderation Team</td>
            </tr>
            <tr>
              <td>8:30 AM - 8:40 AM</td>
              <td>Attendance</td>
              <td>Mandatory for All</td>
              <td>Training Hall</td>
              <td>Moderation Team</td>
            </tr>
            <tr>
              <td>8:40 AM - 10:40 AM</td>
              <td>Theory Session</td>
              <td>Theory Session by the Mentor</td>
              <td>Training Hall</td>
              <td>Moderation Team</td>
            </tr>
            <tr>
              <td>10:40 AM - 11:00 AM</td>
              <td>Tea Break</td>
              <td>Refreshments and Break</td>
              <td>Lounge Area</td>
              <td>Hospitality Team</td>
            </tr>
            <tr>
              <td>11:00 AM - 1:00 PM</td>
              <td>Workshop</td>
              <td>Hands-on training</td>
              <td>Training Hall</td>
              <td>Moderation Team</td>
            </tr>
            <tr>
              <td>1:30 PM - 2:30 PM</td>
              <td>Lunch</td>
              <td>Lunch</td>
              <td>PG</td>
              <td>Catering Team</td>
            </tr>
            <tr>
              <td>3:00 PM - 5:00 PM</td>
              <td>Project Time</td>
              <td>Research and Learn</td>
              <td>PG</td>
              <td>Moderation Team</td>
            </tr>
            <tr>
              <td>7:30 PM - 8:30 PM</td>
              <td>Dinner Time</td>
              <td>Dinner</td>
              <td>PG</td>
              <td>Hospitality Team</td>
            </tr>
          </tbody>
        </table>
      )}
    </section>
  );
};

export default DaySchedule;
