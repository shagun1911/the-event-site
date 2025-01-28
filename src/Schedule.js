import React from "react";
import "./Schedule.css";

const Schedule = () => {
  return (
    <section className="training-schedule">
      <h2>Batch Wise Arrival and Departure Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th colSpan="2">On Campus Training</th>
            <th colSpan="2">Online Training</th>
          </tr>
          <tr>
            <th></th>
            <th>Event</th>
            <th>Details</th>
            <th>Event</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>30th January 2025</td>
            <td>Departing of the first Batch from designated points.</td>
            <td>First batch includes 180 teachers from Dehradun, Haridwar and Tehri.</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>31st January 2025</td>
            <td>Commencement of the training of the 1st batch.</td>
            <td>The training for the first batch starts in two batches of 90 participants each.</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>4th February 2025</td>
            <td>Conclusion of the training of the 1st batch.</td>
            <td>The training for the first batch concludes and participants are departed to the respective districts.</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>5th February 2025</td>
            <td>Departing of the second Batch from designated points.</td>
            <td>Second batch includes 180 teachers from Nainital, Almora and US Nagar.</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>6th February 2025</td>
            <td>Commencement of the training of the 2nd batch.</td>
            <td>The training for the second batch starts in two batches of 90 participants each.</td>
            <td>Commencement of the training of the 1st batch.</td>
            <td>The training for the first batch starts in two batches of 90 participants each.</td>
          </tr>
          <tr>
            <td>10th February 2025</td>
            <td>Conclusion of the training of the 2nd batch.</td>
            <td>The training for the second batch concludes and participants are departed to the respective districts.</td>
            <td>Conclusion of the training of the 1st batch.</td>
            <td>The training for the first batch concludes and participants are departed to the respective districts.</td>
          </tr>
          <tr>
            <td>11th February 2025</td>
            <td>Departing of the third Batch from designated points.</td>
            <td>Third batch includes 180 teachers from Rudraprayag, Uttarkashi and Pauri.</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>12th February 2025</td>
            <td>Commencement of the training of the 3rd batch.</td>
            <td>The training for the third batch starts in two batches of 90 participants each.</td>
            <td>Commencement of the training of the 2nd batch.</td>
            <td>The training for the second batch starts in two batches of 90 participants each.</td>
          </tr>
          <tr>
            <td>16th February 2025</td>
            <td>Conclusion of the training of the 3rd batch.</td>
            <td>The training for the third batch concludes and participants are departed to the respective districts.</td>
            <td>Conclusion of the training of the 2nd batch.</td>
            <td>The training for the second batch concludes and participants are departed to the respective districts.</td>
          </tr>
          <tr>
            <td>17th February 2025</td>
            <td>Departing of the fourth Batch from designated points.</td>
            <td>Fourth batch includes 180 teachers from Bageshwar, Pitthoragarh and Champawat.</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>18th February 2025</td>
            <td>Commencement of the training of the 4th batch.</td>
            <td>The training for the fourth batch starts in two batches of 90 participants each.</td>
            <td>Commencement of the training of the 3rd batch.</td>
            <td>The training for the third batch starts in two batches of 90 participants each.</td>
          </tr>
          <tr>
            <td>22nd February 2025</td>
            <td>Conclusion of the training of the 4th batch.</td>
            <td>The training for the fourth batch concludes and participants are departed to the respective districts.</td>
            <td>Conclusion of the training of the 3rd batch.</td>
            <td>The training for the third batch concludes and participants are departed to the respective districts.</td>
          </tr>
          <tr>
            <td>23rd February 2025</td>
            <td>Departing of the fifth Batch from designated points.</td>
            <td>Fifth batch includes 60 teachers from Chamoli.</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>24th February 2025</td>
            <td>Commencement of the training of the 5th batch.</td>
            <td>The training for the fifth batch starts in two batches of 30 participants each.</td>
            <td>Commencement of the training of the 4th batch.</td>
            <td>The training for the fourth batch starts in two batches of 90 participants each.</td>
          </tr>
          <tr>
            <td>28th February 2025</td>
            <td>Conclusion of the training of the 5th batch.</td>
            <td>The training for the fifth batch concludes and participants are departed to the respective districts.</td>
            <td>Conclusion of the training of the 4th batch.</td>
            <td>The training for the fourth batch concludes and participants are departed to the respective districts.</td>
          </tr>
          <tr>
            <td>2nd February 2025</td>
            <td>-</td>
            <td>-</td>
            <td>Commencement of the training of the 5th batch.</td>
            <td>The training for the fifth batch starts in two batches of 30 participants each.</td>
          </tr>
          <tr>
            <td>6th March 2025</td>
            <td>-</td>
            <td>-</td>
            <td>Conclusion of the training of the 5th batch.</td>
            <td>The training for the fifth batch concludes and participants are departed to the respective districts.</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Schedule;
