import Navbar from '../components/Navbar';

const HomePage = () => {
  const gradientStyle = {
    minHeight: '100vh',
    background: `
      radial-gradient(circle at top left, rgba(142, 68, 173, 0.3) 0%, transparent 40%),
      radial-gradient(circle at top right, rgba(142, 68, 173, 0.3) 0%, transparent 40%),
      radial-gradient(circle at top center, rgba(142, 68, 173, 0.2) 0%, transparent 60%)
    `,
    backgroundColor: 'white',
  };

  return (
    <div style={gradientStyle}>
      <Navbar />
      {/* Add your homepage content here */}
    </div>
  );
};

export default HomePage;
