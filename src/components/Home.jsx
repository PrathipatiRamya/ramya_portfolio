function Home() {
  return (
    <section
      id="home"
      style={{
        padding: "120px 20px 80px",
        textAlign: "center",
        background:
          "linear-gradient(180deg, rgba(79,70,229,0.05), transparent)",
      }}
      className="reveal"
    >
      <h1>PRATHIPATI RAMYA SRI VENKATA SAI</h1>
      <h3>Full Stack Developer | Java • Spring Boot • React</h3>
      <p>
        Detail-oriented IT professional with real-world experience in
        Linux-based application support and full-stack development.
      </p>

      <div style={{ marginTop: "25px" }}>
        <a
          href="/PRATHIPATI RAMYA SRI VENKATA SAI.pdf"
          download
          style={styles.resumeBtn}
        >
          Download Resume
        </a>

        <a href="#experience" style={styles.projectBtn}>
          View Experience
        </a>
      </div>
    </section>
  );
}

const styles = {
  resumeBtn: {
    padding: "10px 18px",
    background: "#4f46e5",
    color: "#fff",
    borderRadius: "6px",
    marginRight: "15px",
    textDecoration: "none",
  },
  projectBtn: {
    padding: "10px 18px",
    border: "1px solid #4f46e5",
    color: "#4f46e5",
    borderRadius: "6px",
    textDecoration: "none",
  },
};

export default Home;
