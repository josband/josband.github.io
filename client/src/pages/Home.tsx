import "./Home.css";

const Home: React.FC = () => {
  document.title = "Home | Jonah Osband";

  return (
    <>
      <section className="profile">
        <article className="summary">
          <p className="text-gradient typing heading">
            Hello, I'm Jonah Osband
          </p>
          <p className="subheading fade-in">
            Computer Science Student at The University of Pittsburgh
          </p>
          <p className="primary-content fade-in">
            I am currently a senior working to complete my Bachelors Degree,
            with an interest in full-stack development and Machine Learning.
          </p>
        </article>
        {/* 
        Need to place the image within the div to make adding the border not 
        show the edge
        */}
        <div className="user-image fade-in"></div>
      </section>
    </>
  );
};

export default Home;
