import React, { useState } from 'react';
import {Link} from 'react-router-dom'
const scheduledAttendances = [
  { id: 1, course: 'Math 101', day: 'Monday', time: '10:00 AM', attendanceCount: 25 },
  { id: 2, course: 'Physics 201', day: 'Wednesday', time: '2:00 PM', attendanceCount: 18 },
];

const ManageCourses = ({ setSelectedCourse, selectedCourse }) => {
  const [selectedAttendance, setSelectedAttendance] = useState(null);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Scheduled Attendances</h2>
      <button onClick={() => setSelectedCourse(null)} className="mb-4 text-blue-600 hover:underline">Back to Courses</button>
      <ul>
        {scheduledAttendances.map((item, idx) => (
          <li key={item.id} className="flex items-center justify-between py-2 border-b">
            <div>
              <span className="font-bold p-3 bg-[olive] text-white">{idx}</span>
              <p className="text-sm text-gray-600">{item.day} at {item.time}</p>
              <p className="text-sm text-gray-600">Attendance Taken: {item.attendanceCount}</p>
            </div>
            <button onClick={() => setSelectedAttendance(item)} className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700">View Details</button>
          </li>
        ))}
      </ul>
      {selectedAttendance && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">{selectedAttendance.course} - {selectedAttendance.day}, {selectedAttendance.time}</h3>
          <ul>
            {/* List all students here with attendance status */}
            <li className="py-2 border-b">John Doe - Present</li>
            <li className="py-2 border-b">Jane Smith - Absent</li>
          </ul>
        </div>
      )}
<Link to="/dashboard/attendance" className="my-4 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 w-full">Start New Attendance</Link>
    </div>
  );
};

export default ManageCourses;
