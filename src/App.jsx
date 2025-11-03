import "./App.css";

function App() {
  const courses = [
    {
      title: "System Administration and IT Infrastructure Services",
    },
    {
      title: "Operating Systems Becoming a Power User",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
    },
    {
      title: "Technical Support Fundamentals",
    },
    {
      title: "How to Succeed at: Writing Applications",
    },
    {
      title: "Medicine Administration for Carers",
    },
  ];

  return (
    <>
      <div className="p-6 grid grid-cols-1 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="shadow rounded-lg overflow-hidden">
            {/* Image */}
            <img
              src="https://www.placehold.co/200x400"
              alt={course.title}
              className="w-full h-80 object-cover"
            />

            {/* Content */}
            <div className="p-4 bg-red-100">
              <h3 className="text-lg font-semibold mb-4">{course.title}</h3>

              <div className="bg-red-50 p-2 rounded-lg">detail</div>

            {/* Footer */}
              <div className="mt-4">
                button
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
