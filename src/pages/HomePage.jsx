import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import './HomePage.css'; 
const HomePage = () => {
    return (
        <>
        <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/homebg.jpeg')" }}
    >
        <Navbar />
        <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="top-badge">🎓 Your #1 Platform for Skill Learning</div>
        <h1 className="main-heading">
          Showcase Your Mastery.<br />Get Connected
        </h1>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search Courses" className="search-input" />
          <button className="search-button">Search</button>
        </div>
        <Carousel />
        </section>
    </div>
        
      
    </div>
     
        

        </>
        
      
    );
  };
  
  export default HomePage;
  