const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      <p className="text-lg mb-4">
        Explore our wide range of courses designed to help you succeed in your career.
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Web Development</li>
        <li>Data Science</li>
        <li>Machine Learning</li>
        <li>Mobile App Development</li>
        <li>Cloud Computing</li>
      </ul>
    </div>
  );
}
export default Courses;