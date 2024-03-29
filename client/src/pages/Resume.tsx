import "../assets/Jonah_Osband_Resume.pdf";
import "./Resume.css";

const Resume: React.FC = () => {
  document.title = "Resume | Jonah Osband";

  return (
    <section className="centered-content">
      <div className="resume-description">
        <strong>Last Updated: </strong>8/21/2023
      </div>
      <object
        id="resume"
        type="application/pdf"
        data={require("../assets/Jonah_Osband_Resume.pdf?#zoom=FitH")}
        aria-label="Jonah's Resume"
      ></object>
    </section>
  );
};

export default Resume;
