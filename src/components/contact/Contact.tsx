import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-box">
        <h3>Contact</h3>
        <ul>
          <li className="contact-text">
            <span>Phone : </span>
            <span>010 7186 1955</span>
          </li>
          <li className="contact-text">
            <span>Email : </span>
            <span>ungmorning9@gamil.com</span>
          </li>
          <li className="contact-text">
            <span>GitHub : </span>
            <span>https://github.com/UngMon</span>
          </li>
          <li className="contact-text">
            <span>Notion : </span>
            <span>~~</span>
          </li>
        </ul>
        <aside className="icons">
          <div>GitHub</div>
          <div>Blog</div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
