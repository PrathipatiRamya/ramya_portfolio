function About() {
  return (
    <section id="about" style={styles.section} className="reveal">
      <h2 style={styles.heading}>About Me</h2>

      <div style={styles.card}>
        <p>
          I am a detail-oriented IT professional with hands-on experience in
          Linux-based application support and full-stack development. I have
          worked extensively with Java, Spring Boot (MVC, REST APIs,
          Microservices), ReactJS, and Python (Flask).
        </p>

        <p>
          Currently, I am working as a System Executive at Jhaishna
          Technologies, where I support and maintain production applications,
          resolve bugs, optimize database queries, and collaborate with
          cross-functional teams to ensure system stability and performance.
        </p>

        <p>
          Alongside application support, I have contributed to development
          projects including a Malaysian B2B web application, where I built REST
          APIs, designed PostgreSQL data models, and developed responsive
          ReactJS dashboards.
        </p>

        <p>
          I am passionate about transitioning into a development-focused role
          where I can build scalable, reliable applications and continuously
          enhance my technical skills.
        </p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: "#f9fafb",
  },
  heading: {
    marginBottom: "25px",
  },
  card: {
    background: "#fff",
    padding: "30px",
    // maxWidth: "1000px",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    lineHeight: "1.8",
  },
};

export default About;
