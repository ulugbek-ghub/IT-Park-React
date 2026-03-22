import Navbar from "../../components/navbar";

const skills = ["HTML/CSS", "JavaScript", "React", "UX Design", "Python", "Bootstrap"];

function About() {
  return (
    <>
      <Navbar />
      <section className="page">
        <h2 className="page-title">About Me</h2>
        <p className="page-desc">
          I'm a Full Stack Developer, i can create user experiences with my various coding skills.
          i can ensure that your web apps are Responsive, User-freindly and Affordable AF.
        </p>
        <p className="page-desc">
          I've been in this Programmer business for like 2-3 years now, 
          ofc with the help of our mentors in IT-Park(Urgench), Oybek brat bn G'ofur brat oddushiiii!
        </p>
        <h3 className="skills-title">Skills</h3>
        <div className="skills-list">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;