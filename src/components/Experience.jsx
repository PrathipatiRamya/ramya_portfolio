function Experience() {
  return (
    <section id="experience" style={styles.section} className="reveal">
      <h2 style={styles.heading}>Experience</h2>

      <div style={styles.card}>
        {/* Role */}
        <div style={styles.roleRow}>
          <h3>System Executive</h3>
          <span style={styles.date}>Mar 2025 – Present</span>
        </div>

        <p style={styles.company}>Jhaishna Technologies Pvt Ltd</p>

        {/* Project 1 */}
        <div style={styles.project}>
          <h4>HATHWAY Project</h4>
          <p className="meta">Tech: PHP, Linux, Yii Framework, SQL</p>
          <ul>
            <li>
              Supported and maintained Linux-based production applications.
            </li>
            <li>
              Resolved bugs and improved stability using PHP (Yii Framework).
            </li>
            <li>Performed database debugging and query optimization.</li>
            <li>
              Collaborated with cross-functional teams for issue resolution.
            </li>
          </ul>
        </div>

        {/* Project 2 */}
        <div style={styles.project}>
          <h4>Malaysian B2B Web Application</h4>
          <p className="meta">Tech: ReactJS, Flask, PostgreSQL</p>
          <ul>
            <li>Developed REST APIs using Flask for onboarding workflows.</li>
            <li>Designed PostgreSQL data models for scalable operations.</li>
            <li>Built responsive ReactJS dashboards.</li>
            <li>Implemented admin approval and service pricing modules.</li>
          </ul>
        </div>
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
    // maxWidth: "1100px",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
  },
  roleRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "5px",
  },
  date: {
    fontSize: "14px",
    color: "#555",
  },
  company: {
    fontWeight: "600",
    marginBottom: "20px",
    color: "#333",
  },
  project: {
    marginBottom: "25px",
  },
  tech: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "8px",
  },
};

export default Experience;
