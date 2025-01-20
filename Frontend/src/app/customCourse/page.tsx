"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const CustomCoursePage = () => {
  // State to manage existing and newly generated courses
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Introduction to Python",
      description: "Learn Python from scratch.",
      generatedOn: "2023-10-01",
    },
    {
      id: 2,
      title: "Advanced React.js",
      description: "Master React.js with hands-on projects.",
      generatedOn: "2023-09-25",
    },
  ]);

  const [newCourseTitle, setNewCourseTitle] = useState("");
  const [newCourseDescription, setNewCourseDescription] = useState("");

  // Function to handle new course generation
  const handleGenerateCourse = () => {
    if (!newCourseTitle || !newCourseDescription) {
      alert("Please fill in all fields.");
      return;
    }

    const newCourse = {
      id: courses.length + 1,
      title: newCourseTitle,
      description: newCourseDescription,
      generatedOn: new Date().toISOString().split("T")[0], // Current date
    };

    setCourses([...courses, newCourse]);
    setNewCourseTitle("");
    setNewCourseDescription("");
  };

  return (
    <div>
      <Navbar />
      <div className="bg-[#F9FAFB] min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <h1 className="text-3xl font-bold text-[#1E3A8A] mb-8">
            Custom Course Generation
          </h1>

          {/* Existing Courses Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-6">
              Your Generated Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <p className="text-sm text-gray-500">
                    Generated on: {course.generatedOn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* New Course Generation Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-6">
              Generate a New Course
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Title
                </label>
                <input
                  type="text"
                  value={newCourseTitle}
                  onChange={(e) => setNewCourseTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  placeholder="Enter course title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Description
                </label>
                <textarea
                  value={newCourseDescription}
                  onChange={(e) => setNewCourseDescription(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  placeholder="Enter course description"
                  rows={4}
                />
              </div>
              <button
                onClick={handleGenerateCourse}
                className="bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1E40AF] transition-colors"
              >
                Generate Course
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomCoursePage;
