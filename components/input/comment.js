import { useEffect, useRef, useState } from "react";
import classes from "./comment.module.css";
import CommentList from "./commentList";

const CommentSection = (props) => {
  const emailRef = useRef();
  const commentRef = useRef();
  const [btnStatus, setBtnStatus] = useState(false);
  const [comments, setComments] = useState([])

  const { eventId } = props;

  useEffect(()=>{
    const fetchData = async()=>{
      const res = await fetch('/api/comment'+ '?eventId='+eventId)
      const resData = await res.json()
      setComments(resData.comments)

    }
    fetchData()
  }, [])

  const onSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const comment = commentRef.current.value;
    const res = await fetch("/api/comment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: eventId, email, comment }),
    });
    // const resData = await res.json();
    setComments(pre=> [...pre, { id: eventId, email, comment }] )
    
    emailRef.current.value = "";
    commentRef.current.value = "";
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <button
          onClick={() => setBtnStatus(!btnStatus)}
          className={classes.btn}
        >
          {btnStatus ? "HIDE COMMENTS" : "SHOW COMMENTS"}
        </button>
      </div>

      {btnStatus && (
        <form className={classes.form} onSubmit={onSubmit}>
          <div className={classes.comments}>
            <div className={classes.section}>
              <label htmlFor="email"> Email </label>
              <input className={classes.input} ref={emailRef} id="email" />
            </div>

            <div className={classes.section}>
              <label htmlFor="comment"> Comment </label>
              <textarea
                rows="4"
                className={classes.input}
                ref={commentRef}
                id="comment"
              />
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
      {btnStatus && <div className={classes.display__comments}>
      <CommentList comments={comments}/>
    </div>}
      
    </div>
  );
};

export default CommentSection;
