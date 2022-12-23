import "./Home.css";

const Home: React.FC = () => {
  return (
    <section className="profile">
      <article className="summary">
        <p className="typing">Hello, I'm Jonah Osband</p>
        <p>Computer Science student at the University of Pittsburgh</p>
        <p>
          I am currently a junior working to complete my bachelors degree, with
          an interest in full-stack development and machine learning
        </p>
      </article>

      {/* 
        Need to place the image within the div to make adding the border not 
        show the edge
      */}
      <div className="user-image"></div>
    </section>
  );
};

export default Home;
