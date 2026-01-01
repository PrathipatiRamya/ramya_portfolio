function Skills() {
  return (
    <section id="skills" className="reveal">
      <h2>Skills</h2>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>Programming Languages</h3>
          <p>Java, Python, PHP, JavaScript</p>
        </div>

        <div style={styles.card}>
          <h3>Backend & Frameworks</h3>
          <p>Spring Boot (MVC, REST, Microservices), Flask, Yii</p>
        </div>

        <div style={styles.card}>
          <h3>Frontend</h3>
          <p>ReactJS, HTML, CSS, Bootstrap</p>
        </div>

        <div style={styles.card}>
          <h3>Databases</h3>
          <p>Oracle, MySQL, PostgreSQL</p>
        </div>

        <div style={styles.card}>
          <h3>Tools & Platforms</h3>
          <p>Git, GitHub, Linux, Kafka, Eureka, Config Server</p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  },
};

export default Skills;
