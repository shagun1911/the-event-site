import React, { useState } from "react";
import "./Schedule.css";

const Schedule = () => {
  const [activeBatch, setActiveBatch] = useState("batch1");

  const handleBatchChange = (batch) => {
    setActiveBatch(batch);
  };

  const batch1Schedule = [
    {
      date: "09.12.24",
      day: "Day 1",
      slot: "I",
      time: "08:40 AM onwards",
      topic: "Registration",
      resourcePerson: "",
    },
    {
      date: "09.12.24",
      day: "Day 1",
      slot: "II",
      time: "09:30 AM to 10:00 AM",
      topic: "Inaugural Session",
      resourcePerson: "",
    },
    {
      date: "09.12.24",
      day: "Day 1",
      slot: "III",
      time: "10:30 AM to 11:30 AM",
      topic: "CPD: Inspire future leaders",
      resourcePerson: "Prof. M.M. Gore (MNNIT Allahabad)",
    },
    {
      date: "09.12.24",
      day: "Day 1",
      slot: "IV",
      time: "11:30 AM to 12:45 PM",
      topic: "Orientation Session",
      resourcePerson: "Organising Team",
    },
    {
      date: "09.12.24",
      day: "Day 1",
      slot: "V",
      time: "02:00 PM to 03:30 PM",
      topic: "CPD: Connect, Collaborate & Contribute",
      resourcePerson: "Mr. Ankur Malhotra (Director, Triniti Chandigarh)",
    },
    {
      date: "09.12.24",
      day: "Day 1",
      slot: "VI",
      time: "03:45 PM to 05:15 PM",
      topic: "SEL: Emotional Design Thinking",
      resourcePerson: "Dr. Tripti Singh (MNNIT Allahabad)",
    },

    {
      date: "10.12.24",
      day: "Day 2",
      slot: "I",
      time: "09:30 AM to 11:00 AM",
      topic: "CBL: Making students future ready",
      resourcePerson: "Prof. Mayank Pandey (HoD, CSE, MNNIT Allahabad)",
    },
    {
      date: "10.12.24",
      day: "Day 2",
      slot: "II",
      time: "11:15 AM to 12:45 PM",
      topic: "ITP: Maths and AI",
      resourcePerson: "Dr. Anugrah Srivastava, Bennett University",
    },
    {
      date: "10.12.24",
      day: "Day 2",
      slot: "III",
      time: "12:45 PM to 01:15 PM",
      topic:
        "Interactive Panel Discussion with Faculty of Department of Mathematics",
      resourcePerson: "MNNIT Allahabad",
    },
    {
      date: "10.12.24",
      day: "Day 2",
      slot: "IV",
      time: "02:00 PM to 03:30 PM",
      topic: "Overview of NEP 2020",
      resourcePerson: "Prof. L.K. Mishra [Dean Academics; MNNIT Allahabad]",
    },
    {
      date: "10.12.24",
      day: "Day 2",
      slot: "V",
      time: "03:45 PM to 05:15 PM",
      topic: "CBL: Traditional vs Competitive Mathematics",
      resourcePerson: "Prof. Mukesh Kumar (MNNIT Allahabad)",
    },

    {
      date: "11.12.24",
      day: "Day 3",
      slot: "I",
      time: "09:30 AM to 11:00 AM",
      topic: "CBL: Multiple Intelligence-based classroom",
      resourcePerson: "Ms. Sharanya Eshwaran (Pentad Academy, Bangalore)",
    },
    {
      date: "11.12.24",
      day: "Day 3",
      slot: "II",
      time: "11:15 AM to 12:45 PM",
      topic: "ITP: Medha AI",
      resourcePerson: "Mr. Ravi Suthar (CoGrad)",
    },
    {
      date: "11.12.24",
      day: "Day 3",
      slot: "III",
      time: "02:00 PM to 03:30 PM",
      topic: "ITP: Make your class SMART",
      resourcePerson: "Mr. Ravi Suthar (CoGrad)",
    },
    {
      date: "11.12.24",
      day: "Day 3",
      slot: "IV",
      time: "03:45 PM to 05:15 PM",
      topic: "CPD: School-to-College Transitions",
      resourcePerson: "Dr. Pramod Yadav (MNNIT Allahabad)",
    },
    {
      date: "11.12.24",
      day: "Day 3",
      slot: "V",
      time: "05:15 PM to 08:00 PM",
      topic: "Visit to Sangam, Prayagraj",
      resourcePerson: "",
    },

    {
      date: "12.12.24",
      day: "Day 4",
      slot: "I",
      time: "09:30 AM to 11:00 AM",
      topic: "CPD: Being Always Relevant",
      resourcePerson: "Prof. Tanuj Nandan (HoD, SMS, MNNIT Allahabad)",
    },
    {
      date: "12.12.24",
      day: "Day 4",
      slot: "II",
      time: "11:15 AM to 12:45 PM",
      topic: "CBL: Differentiated Instruction for mixed classroom",
      resourcePerson: "Ms. Sharanya Eshwaran (Pentad Academy, Bangalore)",
    },
    {
      date: "12.12.24",
      day: "Day 4",
      slot: "III",
      time: "02:00 PM to 03:30 PM",
      topic: "Activity & Presentation Session of All Groups",
      resourcePerson: "",
    },
    {
      date: "12.12.24",
      day: "Day 4",
      slot: "IV",
      time: "03:45 PM to 05:15 PM",
      topic: "CBL: Best Tools for New Pedagogy",
      resourcePerson: "Ms. Sharanya Eshwaran (Pentad Academy, Bangalore)",
    },

    {
      date: "13.12.24",
      day: "Day 5",
      slot: "I",
      time: "09:30 AM to 11:00 AM",
      topic: "ITP: Workshop",
      resourcePerson: "Prof. G.P. Sahu (MNNIT Allahabad)",
    },
    {
      date: "13.12.24",
      day: "Day 5",
      slot: "II",
      time: "11:15 AM to 12:45 PM",
      topic: "SEL: Getting the Fundamentals Right",
      resourcePerson:
        "Mr. Avinash Bansal & Ms. Chelsea Dean (Co-Founder, Tomo Club)",
    },
    {
      date: "13.12.24",
      day: "Day 5",
      slot: "III",
      time: "02:00 PM to 03:30 PM",
      topic: "SEL: Making the Classroom Inclusive",
      resourcePerson:
        "Mr. Avinash Bansal & Ms. Chelsea Dean (Co-Founder, Tomo Club)",
    },
    {
      date: "13.12.24",
      day: "Day 5",
      slot: "IV",
      time: "03:45 PM to 04:30 PM",
      topic: "SEL: Sustainable Practices",
      resourcePerson:
        "Mr. Avinash Bansal & Ms. Chelsea Dean (Co-Founder, Tomo Club)",
    },
    {
      date: "13.12.24",
      day: "Day 5",
      slot: "V",
      time: "04:30 PM to 05:30 PM",
      topic: "Closing Ceremony & Certificate Distribution",
      resourcePerson: "",
    },
  ];
  const batch2Schedule = [
    {
      date: "16.12.24",
      day: "Day 1",
      slot: "I",
      time: "08:40 AM onwards",
      topic: "Registration",
      resourcePerson: "",
    },
    {
      date: "16.12.24",
      day: "Day 1",
      slot: "II",
      time: "09:30 AM to 09:45 AM",
      topic: "Deep Lightning & Welcome Session",
      resourcePerson: "",
    },
    {
      date: "16.12.24",
      day: "Day 1",
      slot: "III",
      time: "09:45 AM to 11:15 AM",
      topic: "CPD: Inspire Future Leaders",
      resourcePerson: "Prof. Madhav Manoj Gore (MNNIT Allahabad)",
    },
    {
      date: "16.12.24",
      day: "Day 1",
      slot: "IV",
      time: "11:15 AM to 11:30 AM",
      topic: "Tea Break",
      resourcePerson: "",
    },
    {
      date: "16.12.24",
      day: "Day 1",
      slot: "V",
      time: "11:30 AM to 12:45 PM",
      topic: "Orientation Session",
      resourcePerson: "Organisation Team (Dr. Shivesh Sharma, Dr. Sameer Srivastava & Mr. Himanshu Chaurasia)",
    },
    {
      date: "16.12.24",
      day: "Day 1",
      slot: "VI",
      time: "12:45 PM to 02:00 PM",
      topic: "Lunch Break",
      resourcePerson: "",
    },
    {
      date: "16.12.24",
      day: "Day 1",
      slot: "VII",
      time: "02:00 PM to 03:30 PM",
      topic: "CBL: Multiple Intelligence-based Classroom",
      resourcePerson: "Miss. Sharanya Eshwaran (Pentad Academy, Bangalore)",
    },
    {
      date: "16.12.24",
      day: "Day 1",
      slot: "VIII",
      time: "03:30 PM to 03:45 PM",
      topic: "Tea Break",
      resourcePerson: "",
    },
    {
      date: "16.12.24",
      day: "Day 1",
      slot: "IX",
      time: "03:45 PM to 05:15 PM",
      topic: "SEL: Emotional Design Thinking",
      resourcePerson: "Dr. Tripti Singh (MNNIT Allahabad)",
    },
    {
    date: "16.12.24",
    day: "Day 1",
    slot: "X",
    time: "05:15 PM to 05:45 PM",
    topic: "Daily feedback session",
    resourcePerson: "-",
  },
    {
      date: "17.12.24",
      day: "Day 2",
      slot: "I",
      time: "09:30 AM to 11:00 AM",
      topic: "CBL: Making Students Future Ready",
      resourcePerson: "Prof. Mayank Pandey (HoD, CSE, MNNIT Allahabad)",
    },
    {
      date: "17.12.24",
      day: "Day 2",
      slot: "II",
      time: "11:00 AM to 11:15 AM",
      topic: "Tea Break",
      resourcePerson: "",
    },
    {
      date: "17.12.24",
      day: "Day 2",
      slot: "III",
      time: "11:15 AM to 12:45 PM",
      topic: "CBL: Differentiated Instructions for Mixed Classroom",
      resourcePerson: "Miss. Sharanya Eshwaran (Pentad Academy, Bangalore)",
    },
    {
      date: "17.12.24",
      day: "Day 2",
      slot: "IV",
      time: "12:45 PM to 02:00 PM",
      topic: "Lunch Break",
      resourcePerson: "",
    },
    {
      date: "17.12.24",
      day: "Day 2",
      slot: "V",
      time: "02:00 PM to 03:30 PM",
      topic: "CBL: Multiple Intelligence-based Classroom",
      resourcePerson: "Miss. Sharanya Eshwaran (Pentad Academy, Bangalore)",
    },
    {
      date: "17.12.24",
      day: "Day 2",
      slot: "VI",
      time: "03:30 PM to 03:45 PM",
      topic: "Tea Break",
      resourcePerson: "",
    },
    {
      date: "17.12.24",
      day: "Day 2",
      slot: "VII",
      time: "03:45 PM to 05:15 PM",
      topic: "Visit and Interaction with Faculty of Department of CS",
      resourcePerson: "MNNIT Allahabad",
    },
    {
      date: "17.12.24",
      day: "Day 2",
      slot: "VIII",
      time: "05:15 PM to 05:45 PM",
      topic: "Daily feedback session",
      resourcePerson: "-",
    },
    {
      date: "18.12.24",
      day: "Day 3",
      slot: "I",
      time: "09:30 AM to 11:00 AM",
      topic: "SEL: Mental Well-being",
      resourcePerson: "Prof. Rajeev Srivastava (MNNIT Allahabad)",
    },
    {
      date: "18.12.24",
      day: "Day 3",
      slot: "II",
      time: "11:00 AM to 11:15 AM",
      topic: "Tea Break",
      resourcePerson: "",
    },
    {
      date: "18.12.24",
      day: "Day 3",
      slot: "III",
      time: "11:15 AM to 12:45 PM",
      topic: "Overview of NEP-2020",
      resourcePerson: "Prof. L.K. Mishra (Dean, Academics, MNNIT Allahabad)",
    },
    {
      date: "18.12.24",
      day: "Day 3",
      slot: "IV",
      time: "12:45 PM to 02:00 PM",
      topic: "Lunch Break",
      resourcePerson: "",
    },
    {
      date: "18.12.24",
      day: "Day 3",
      slot: "V",
      time: "02:00 PM to 03:30 PM",
      topic: "SEL: Getting the Fundamentals Right",
      resourcePerson: "Chelsea Dean (Co-Founder, Tomo Club)",
    },
    {
      date: "18.12.24",
      day: "Day 3",
      slot: "VI",
      time: "03:30 PM to 03:45 PM",
      topic: "Tea Break",
      resourcePerson: "",
    },
    {
      date: "18.12.24",
      day: "Day 3",
      slot: "VII",
      time: "03:45 PM to 05:15 PM",
      topic: "SEL: Making the Classroom Inclusive & Sustainable Practices",
      resourcePerson: "Chelsea Dean (Co-Founder, Tomo Club)",
    },
    {
      date: "18.12.24",
      day: "Day 1",
      slot: "VIII",
      time: "05:15 PM to 05:45 PM",
      topic: "Daily feedback session",
      resourcePerson: "-",
    },
    {
      date: "18.12.24",
      day: "Day 3",
      slot: "IX",
      time: "05:45 PM to 08:00 PM",
      topic: "Visit to sangam prayag raj",
      resourcePerson: "-",
    },
    {
      date: "19.12.24",
      day: "Day 4",
      slot: "I",
      time: "09:30 AM to 11:00 AM",
      topic: "ITP: Workshop",
      resourcePerson: "Prof. G.P. Sahu (MNNIT Allahabad)",
    },
    {
      date: "19.12.24",
      day: "Day 4",
      slot: "II",
      time: "11:00 AM to 11:15 AM",
      topic: "Tea Break",
      resourcePerson: "",
    },
    {
      date: "19.12.24",
      day: "Day 4",
      slot: "III",
      time: "11:15 AM to 12:45 PM",
      topic: "ITP: Workshop",
      resourcePerson: "Prof. G.P. Sahu (MNNIT Allahabad)",
    },
    {
      date: "19.12.24",
      day: "Day 4",
      slot: "IV",
      time: "12:45 PM to 02:00 PM",
      topic: "Lunch Break",
      resourcePerson: "",
    },
    {
      date: "19.12.24",
      day: "Day 4",
      slot: "V",
      time: "02:00 PM to 03:30 PM",
      topic: "CBL: AI",
      resourcePerson: "Prof. A.K. Singh (MNNIT Allahabad)",
    },
    {
      date: "19.12.24",
      day: "Day 4",
      slot: "VI",
      time: "03:30 PM to 03:45 PM",
      topic: "Tea Break",
      resourcePerson: "",
    },
    {
      date: "19.12.24",
      day: "Day 4",
      slot: "VII",
      time: "03:45 PM to 05:15 PM",
      topic: "Activity & Presentation Session of All Groups",
      resourcePerson: "",
    },
    {
      date: "19.12.24",
      day: "Day 4",
      slot: "VIII",
      time: "05:15 PM to 05:45 PM",
      topic: "Daily feedback session",
      resourcePerson: "-",
    },
    {
      date: "20.12.24",
      day: "Day 5",
      slot: "I",
      time: "09:30 AM to 11:00 AM",
      topic: "ITP: Make your class SMART",
      resourcePerson: "Mr. Ravi Suthar (CoGrad)",
    },
    {
      date: "20.12.24",
      day: "Day 5",
      slot: "II",
      time: "11:00 AM to 11:15 AM",
      topic: "Tea Break",
      resourcePerson: "",
    },
    {
      date: "20.12.24",
      day: "Day 5",
      slot: "III",
      time: "11:15 AM to 12:45 PM",
      topic: "SEL: Analytical Thinking and Problem-solving",
      resourcePerson: "Prof. Geetika (MNNIT Allahabad)",
    },
    {
      date: "20.12.24",
      day: "Day 5",
      slot: "IV",
      time: "12:45 PM to 02:00 PM",
      topic: "Lunch Break",
      resourcePerson: "",
    },
    {
      date: "20.12.24",
      day: "Day 5",
      slot: "V",
      time: "02:00 PM to 03:30 PM",
      topic: "Workshop: Development of Effective Teaching Methods",
      resourcePerson: "Prof. P.K. Mishra (MNNIT Allahabad)",
    },
    {
      date: "20.12.24",
      day: "Day 5",
      slot: "VI",
      time: "03:30 PM to 03:45 PM",
      topic: "Tea Break",
      resourcePerson: "",
    },
    {
      date: "20.12.24",
      day: "Day 5",
      slot: "VII",
      time: "03:45 PM to 05:15 PM",
      topic: "Closing & Certificate Distribution Ceremony",
      resourcePerson: "",
    },
    {
      date: "20.12.24",
      day: "Day 5",
      slot: "VIII",
      time: "05:15 PM to 05:45 PM",
      topic: "Daily feedback session",
      resourcePerson: "-",
    },
  ];
  

 
  return (
    <section id="schedule">
      <div className="schedule-container">
        <h2 className="schedule-heading">Schedule</h2>
        <p style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
          Training program for the Teachers of PM SHRI JNVs
        </p>
        <div className="batch-buttons">
          <button
            className={activeBatch === "batch1" ? "active" : ""}
            onClick={() => handleBatchChange("batch1")}
          >
            Batch 1
          </button>
          <button
            className={activeBatch === "batch2" ? "active" : ""}
            onClick={() => handleBatchChange("batch2")}
          >
            Batch 2
          </button>
        </div>
        {activeBatch === "batch1" && (
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Topic</th>
                <th>Resource Person</th>
              </tr>
            </thead>
            <tbody>
              {batch1Schedule.map((session, index) => (
                <tr key={index}>
                  <td>{session.date}</td>
                  <td>{session.time}</td>
                  <td>{session.topic}</td>
                  <td>{session.resourcePerson || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {activeBatch === "batch2" && (
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Topic</th>
                <th>Resource Person</th>
              </tr>
            </thead>
            <tbody>
              {batch2Schedule.map((session, index) => (
                <tr key={index}>
                  <td>{session.date}</td>
                  <td>{session.time}</td>
                  <td>{session.topic}</td>
                  <td>{session.resourcePerson || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default Schedule;
