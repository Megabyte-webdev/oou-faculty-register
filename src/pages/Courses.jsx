import React, { useState } from 'react';
import { FaChalkboardTeacher, FaBook, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import ManageCourses from '../components/courses/ManageCourses';

const courses = [
  { id: 1, title: 'Introduction to Computer Science', code: 'CS101', schedule: 'Mon & Wed, 10AM-12PM', students: 50 },
  { id: 2, title: 'Data Structures', code: 'CS201', schedule: 'Tue & Thu, 2PM-4PM', students: 35 },
];


export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6 flex items-center space-x-4">
        <FaChalkboardTeacher className="text-4xl text-blue-600" />
        <div>
          <h1 className="text-2xl font-bold">Course Management</h1>
          <p className="text-gray-600">Manage your courses and attendance</p>
        </div>
      </div>

      {!selectedCourse ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <div key={course.id} className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <h2 className="text-xl font-semibold flex items-center space-x-2 mb-3">
                <FaBook className="text-blue-500" />
                <span>{course?.title?.length >20 ? `${course?.title?.slice(0,20)}...` : course?.title}</span>
              </h2>
              <p className="text-sm text-gray-500 flex items-center space-x-2 mb-2">
                <FaCalendarAlt />
                <span>{course.schedule}</span>
              </p>
              <p className="text-sm text-gray-500 flex items-center space-x-2 mb-4">
                <FaUsers />
                <span>{course.students} Students</span>
              </p>
              <div className="flex space-x-2">
                <button onClick={() => setSelectedCourse(course)} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">Manage Attendance</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Upload Materials</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ManageCourses selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse} />
      )}
    </div>
  );
}
