"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Define types and interfaces

interface Course {
  id: number;
  title: string;
  description: string;
  generatedOn: string;
}

interface CurriculumUnit {
  unit_title: string;
  topics: string[];
}

interface CurriculumData {
  course_title: string;
  level: string;
  units: CurriculumUnit[];
}

interface Props {
  curriculum: CurriculumData | null;
  handleFinalGenerate: () => void;
}

interface Curriculum {
  title: string;
  units: string[];
  difficulty: string;
  generatedOn: string;
}

interface Video {
  title: string;
  url: string;
}

interface Note {
  title: string;
  notes: string;
}

interface MCQ {
  title: string;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
}

const CustomCoursePage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([
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

  const [newCourseTitle, setNewCourseTitle] = useState<string>("");
  const [units, setUnits] = useState<string[]>([]);
  const [unitInput, setUnitInput] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("beginner");
  const [curriculum, setCurriculum] = useState<Curriculum | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);
  const [mcqs, setMcqs] = useState<MCQ[]>([]);

  const handleAddUnit = () => {
    if (unitInput) {
      setUnits([...units, unitInput]);
      setUnitInput("");
    }
  };

  const handleRemoveUnit = (index: number) => {
    const newUnits = units.filter((_, i) => i !== index);
    setUnits(newUnits);
  };

  const handleGenerateCurriculum = async () => {
    if (!newCourseTitle || units.length === 0) {
      alert("Please fill in all fields.");
      return;
    }

    const response = await fetch("http://localhost:4000/api/curriculum/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newCourseTitle,
        units: units,
        difficulty: difficulty,
      }),
    });

    const generatedCurriculum: Curriculum = await response.json();

    // Check if `result` exists and parse it
    if ((generatedCurriculum as any).result) {
      try {
        const parsedCurriculum = JSON.parse(
          (generatedCurriculum as any).result
        );
        console.log("Parsed Curriculum:", parsedCurriculum);
        setCurriculum(parsedCurriculum);
      } catch (error) {
        console.error("Error parsing curriculum JSON:", error);
      }
    } else {
      console.error("Invalid response format:", generatedCurriculum);
    }

    useEffect(() => {
      console.log("Updated Curriculum:", curriculum);
    }, [curriculum]);
  };

  const handleFinalGenerate = async () => {
    if (!curriculum) {
      alert("Please generate the curriculum first.");
      return;
    }

    // Fetch YouTube videos (replace with actual API call)
    const fetchedVideos = await fetchYouTubeVideos(curriculum);
    setVideos(fetchedVideos);

    // Generate notes and MCQs using OpenAI (replace with actual API call)
    const generatedNotes = await generateNotes(fetchedVideos);
    setNotes(generatedNotes);

    const generatedMcqs = await generateMCQs(fetchedVideos);
    setMcqs(generatedMcqs);
  };

  const fetchYouTubeVideos = async (
    curriculum: Curriculum
  ): Promise<Video[]> => {
    // Simulate fetching YouTube videos
    return [
      {
        title: "Calculus Basics",
        url: "https://www.youtube.com/watch?v=example1",
      },
      {
        title: "Advanced Calculus",
        url: "https://www.youtube.com/watch?v=example2",
      },
    ];
  };

  const generateNotes = async (videos: Video[]): Promise<Note[]> => {
    // Simulate generating notes using OpenAI
    return videos.map((video) => ({
      title: video.title,
      notes: "Sample notes for " + video.title,
    }));
  };

  const generateMCQs = async (videos: Video[]): Promise<MCQ[]> => {
    // Simulate generating MCQs using OpenAI
    return videos.map((video) => ({
      title: video.title,
      questions: [
        {
          question: "Sample question 1",
          options: ["A", "B", "C", "D"],
          answer: "A",
        },
        {
          question: "Sample question 2",
          options: ["A", "B", "C", "D"],
          answer: "B",
        },
      ],
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="bg-[#F9FAFB] min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-[#1E3A8A] mb-8">
            Custom Course Generation
          </h1>

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
                  Course Units
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={unitInput}
                    onChange={(e) => setUnitInput(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                    placeholder="Enter unit"
                  />
                  <button
                    onClick={handleAddUnit}
                    className="bg-[#1E3A8A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1E40AF] transition-colors"
                  >
                    Add Unit
                  </button>
                </div>
                <div className="mt-2">
                  {units.map((unit, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-gray-100 p-2 rounded-lg mt-2"
                    >
                      <span>{unit}</span>
                      <button
                        onClick={() => handleRemoveUnit(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Difficulty Level
                </label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <button
                onClick={handleGenerateCurriculum}
                className="bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1E40AF] transition-colors"
              >
                Generate Curriculum
              </button>
            </div>
          </div>

          {curriculum && (
            <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-6">
                Generated Curriculum
              </h2>
              <div className="space-y-4">
                {/* Corrected property names */}
                <h3 className="text-xl font-bold text-[#1E3A8A]">
                  {(curriculum as any).course_title}
                </h3>
                <p className="text-gray-600">
                  Level: {(curriculum as any).level}
                </p>
                <div className="space-y-6">
                  {curriculum.units.map((unit: any, index: number) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      {/* Corrected unit title */}
                      <h4 className="text-lg font-semibold text-[#1E3A8A]">
                        {unit.unit_title}
                      </h4>
                      <ul className="list-disc list-inside ml-4 mt-2">
                        {/* Corrected topics */}
                        {unit.topics.map(
                          (topic: string, topicIndex: number) => (
                            <li key={topicIndex} className="text-gray-600">
                              {topic}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleFinalGenerate}
                  className="bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1E40AF] transition-colors"
                >
                  Final Generate
                </button>
              </div>
            </div>
          )}

          {videos.length > 0 && (
            <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-6">
                Recommended Videos
              </h2>
              <div className="space-y-4">
                {videos.map((video, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-bold text-[#1E3A8A]">
                      {video.title}
                    </h3>
                    <a
                      href={video.url}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Watch Video
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {notes.length > 0 && (
            <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-6">
                Generated Notes
              </h2>
              <div className="space-y-4">
                {notes.map((note, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-bold text-[#1E3A8A]">
                      {note.title}
                    </h3>
                    <p className="text-gray-600">{note.notes}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {mcqs.length > 0 && (
            <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-6">
                MCQ Tests
              </h2>
              <div className="space-y-4">
                {mcqs.map((mcq, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-bold text-[#1E3A8A]">
                      {mcq.title}
                    </h3>
                    {mcq.questions.map((question, qIndex) => (
                      <div key={qIndex} className="mt-2">
                        <p className="text-gray-600">{question.question}</p>
                        <ul className="list-disc list-inside">
                          {question.options.map((option, oIndex) => (
                            <li key={oIndex} className="text-gray-600">
                              {option}
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm text-gray-500">
                          Answer: {question.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomCoursePage;
