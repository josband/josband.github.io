import "./Resume.css";

const Resume: React.FC = () => {
  return (
    <section className="centered-content">
      <div className="resume-description">
        <strong>Last Updated: </strong>9/1/2022
      </div>
      <object
        id="resume"
        type="application/pdf"
        data={
          process.env.PUBLIC_URL + "assets/Jonah_Osband_Resume.pdf?#zoom=FitH"
        }
        aria-label="Jonah's Resume"
      ></object>
    </section>
  );
};

export default Resume;
