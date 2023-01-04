import "./Teaching.css";

const Teaching: React.FC = () => {
  document.title = "Teaching | Jonah Osband";

  return (
    <div className="centered-content content-container">
      <p className="section-title">CS 1501: Data Structures and Algorithms 2</p>
      <p className="course-description">
        This course is designed with the intention of covering foundational and
        commonly used data structures and algorithms (duh). Topics include:
        Trees, Tries, Graphs, Time Complexity, Compression, Cryptography, and
        many other topics. Below you will find my office hours along with
        material used for our recitations. I may include recording links for
        those who find it beneficial if attendence is high enough.
      </p>

      <hr />

      <p className="section-title">Office Hours</p>
      <p style={{ textAlign: "center" }}>TBD</p>

      <hr />

      <p className="section-title">Recitations</p>
      <div style={{ overflowX: "auto", width: "100%" }}>
        <table className="section-table" cellSpacing={0}>
          <tr>
            <th style={{ width: "35%" }}>Topic</th>
            <th style={{ width: "35%" }}>Material</th>
            <th style={{ width: "30%" }}>Recording</th>
          </tr>
          <tr>
            <td>Overview & Intro. to Git</td>
            <td>Git Slides</td>
            <td>Link</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Teaching;
