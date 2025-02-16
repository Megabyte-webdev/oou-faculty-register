import React, { useState } from 'react';
import { FaFingerprint, FaExclamationCircle, FaExpand } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import useAttendance from '../hooks/useAttendance';

const CustomModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-[1000px] w-[90%] h-[90%] relative flex flex-col">
        <button onClick={onClose} className="absolute top-2 right-2 text-red-600 hover:text-red-700"><MdClose size="30" stroke={2} /></button>
        {children}
      </div>
    </div>
  );
};

const AttendancePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    setScanStatus,
    scanStatus,
    FingerprintScan,
    loading,
    error,
    resetAttendance
  } = useAttendance();

  const renderFingerprintIcon = () => {
    if (error?.error) {
      return <FaExclamationCircle size={80} className="text-red-600 animate-pulse size-full" />;
    }
    if (loading) {
      return <FaFingerprint size={80} className="text-green-600 animate-pulse size-full" />;
    }
    return <FaFingerprint size={80} className="text-green-600 size-full" />;
  };

  const renderButtons = () => {
    if (error?.error) {
      return (
        <div className="flex gap-4 w-full">
          <button onClick={resetAttendance} className="bg-yellow-600 text-white p-2 rounded hover:bg-yellow-700 w-1/2 font-medium">Start New</button>
          <button onClick={FingerprintScan} className="bg-green-600 text-white p-2 rounded hover:bg-green-700 w-1/2 font-medium">Retry Scan</button>
        </div>
      );
    }
    return <button onClick={FingerprintScan} className="bg-green-600 text-white p-2 rounded hover:bg-green-700 w-full font-medium">Scan Fingerprint</button>;
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Attendance Management</h1>
      <p className="text-gray-600 mb-6">Lecturers can set attendance sessions, and students can mark their attendance here using fingerprint authentication.</p>

      <section className="flex flex-wrap gap-4 justify-center">
        <div className="flex-[1] bg-white p-6 rounded-2xl shadow-lg mb-6 w-96 h-max">
          <h2 className="text-xl font-semibold mb-4">Set Attendance Session</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Course Code" className="w-full p-2 border rounded" />
            <input type="date" className="w-full p-2 border rounded" />
            <input type="time" className="w-full p-2 border rounded" />
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Set Session</button>
          </form>
        </div>

        <div className="flex-[2] min-w-96 h-[400px] bg-white p-6 rounded-2xl shadow-lg flex flex-col relative">
          <h2 className="text-xl font-semibold mb-4">Student Fingerprint Attendance</h2>
          <p className="text-gray-600 mb-4 font-medium">{scanStatus || 'Place your finger on the scanner to mark attendance.'}</p>
          <div className="flex-1 flex justify-center mb-4 h-[60%]">
            {renderFingerprintIcon()}
          </div>
          {renderButtons()}
          <button onClick={() => setIsModalOpen(true)} className="absolute top-4 right-4 mt-4 flex items-center justify-center text-blue-600 hover:text-blue-800 font-medium">
            <FaExpand className="mr-2" /> Full screen
          </button>
        </div>
      </section>

      <CustomModal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false); setScanStatus(''); }}>
        <h2 className="text-xl font-semibold mb-4">Fingerprint Attendance</h2>
        <p className="text-gray-600 mb-4 font-medium">{scanStatus || 'Place your finger on the scanner to mark attendance.'}</p>
        <div className="flex-1 flex justify-center mb-4 h-[60%]">
          {renderFingerprintIcon()}
        </div>
        {renderButtons()}
      </CustomModal>
    </div>
  );
};

export default AttendancePage;
