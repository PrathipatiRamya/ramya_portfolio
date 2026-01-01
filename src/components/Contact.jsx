function Contact() {
  return (
    <section id="contact" className="reveal">
      <h2>Contact</h2>
      <p>
        Actively seeking Junior / Full Stack / Backend Developer/Engineer
        opportunities.
      </p>
      <p>
        If you’d like to connect or discuss opportunities, feel free to reach
        out.
      </p>

      <ul style={styles.list}>
        <li>
          Email:{" "}
          <a href="mailto:prathipatiramya2003@gmail.com">
            prathipatiramya2003@gmail.com
          </a>
        </li>
        <li>Phone: 9391471333</li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/prathipati-ramya-sri-venkata-sai/"
            target="_blank"
          >
            https://www.linkedin.com/in/prathipati-ramya-sri-venkata-sai/
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a href="https://github.com/PrathipatiRamya" target="_blank">
            https://github.com/PrathipatiRamya
          </a>
        </li>
      </ul>
    </section>
  );
}

const styles = {
  list: {
    marginTop: "15px",
    listStyle: "none",
    lineHeight: "1.8",
  },
};

export default Contact;
