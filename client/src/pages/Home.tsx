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
          <p className="subheading">
            Computer Science Student at The University of Pittsburgh
          </p>
          <p className="primary-content">
            I am currently a junior working to complete my bachelors degree,
            with an interest in full-stack development and machine learning.
          </p>
        </article>
        {/* 
        Need to place the image within the div to make adding the border not 
        show the edge
        */}
        <div className="user-image"></div>
      </section>
    </>
  );
};

export default Home;
