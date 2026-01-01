function Certifications() {
  return (
    <section id="certifications" className="reveal">
      <h2>Certifications</h2>

      <div style={styles.list}>
        <div style={styles.item}>NPTEL – The Joy of Computing using Python</div>

        <div style={styles.item}>
          Machine Learning with Python (Beginner) – IBM Developer Skills Network
        </div>

        <div style={styles.item}>Python Course – Kaggle (Google)</div>

        <div style={styles.item}>Java – LinkedIn Learning</div>

        <div style={styles.item}>Python Data Analyst – Infosys Springboard</div>

        <div style={styles.item}>Agile Foundations – LinkedIn Learning</div>
      </div>
    </section>
  );
}

const styles = {
  list: {
    marginTop: "20px",
    display: "grid",
    gap: "12px",
  },
  item: {
    background: "#fff",
    padding: "15px 20px",
    borderRadius: "6px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
};

export default Certifications;
