import { useRef, useState } from "react";
import classes from "./comment.module.css";

const Comment = (props) => {
  const emailRef = useRef();
  const commentRef = useRef();
  const [btnStatus, setBtnStatus] = useState(false);

  const { eventId } = props;

  const onSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const comment = commentRef.current.value;
    const res = await fetch("/api/comment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: eventId, email, comment }),
    });
    const resData = await res.json();
    emailRef.current.value = "";
    commentRef.current.value = "";
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <button onClick={()=>setBtnStatus(!btnStatus)} className={classes.btn}>
          {btnStatus ? "HIDE COMMENT" : "ADD COMMENT"}
        </button>
      </div>

      {btnStatus && (
        <form className={classes.form} onSubmit={onSubmit}>
          <div className={classes.comments}>
            <div className={classes.section}>
              <label htmlFor="email"> Email </label>
              <input ref={emailRef} id="email" />
            </div>

            <div className={classes.section}>
              <label htmlFor="comment"> Comment </label>
              <input ref={commentRef} id="comment" />
            </div>
          </div>

          <div style={{ textAlign: "end" }}>
            <button className={classes.btn} type="submit">
              {" "}
              Comment{" "}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Comment;
