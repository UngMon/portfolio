import { useCallback, useState } from "react";
import "./Contact.scss";

const Contact = () => {
  console.log("contact");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [confirmName, setConfirmName] = useState<string>("");
  const [confirmEmail, setConfirmEmail] = useState<string>("");

  const confirmNameHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.currentTarget.value);
      if (e.currentTarget.value.length === 0) {
        setConfirmName("이름을 입력해주세요!");
      } else {
        setConfirmName("");
      }
    },
    []
  );

  const confirmEmailHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
      setEmail(e.currentTarget.value);
      if (!regex.test(e.currentTarget.value)) {
        setConfirmEmail("정확한 이메일을 입력해주세요! ex)abc@abc.com");
      } else {
        setConfirmEmail("");
      }
    },
    []
  );

  const confirmTextLengthHandler = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (e.currentTarget.value.length <= 1000) {
      }
      setMessage(e.currentTarget.value);
    },
    []
  );

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name.length === 0) return alert("이름을 입력해주세요!");
    if (email.length === 0) return alert("정확한 이메일을 입력해주세요!");
    if (name.length === 0) return alert("메시지를 입력해주세요!");

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby9np4vxZBWeHDpoicIMfxZ8UXCL3z1fz7g_0EmU3WSBy4stJB9nNwDmsRKf6ME5BJ2Eg/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        alert("이메일을 보냈습니다!");
      } else {
        console.error("이메일 보내기 실패!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="contact-container">
      <div className="contact-box">
        <h2>Contact</h2>
        <form className="contact-form" onSubmit={submitHandler}>
          <article>
            <p>작성하신 내용은 ungmorning9@gmail.com으로 발송됩니다.</p>
          </article>
          <div className="contact-name">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              value={name}
              onChange={confirmNameHandler}
            />
            <div>
              <span>{confirmName}</span>
            </div>
          </div>
          <div className="contact-email">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="email"
              value={email}
              onChange={confirmEmailHandler}
            />
            <div>
              <span>{confirmEmail}</span>
            </div>
          </div>
          <div className="contact-text">
            <textarea
              name="message"
              id="message"
              placeholder="message"
              value={message}
              onChange={confirmTextLengthHandler}
            />
            <div className="textlength">
              <span>{`${message.length} / 1000`}</span>
            </div>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
