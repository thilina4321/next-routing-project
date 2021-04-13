import classes from "./register.module.css";
import {useRef, useState} from 'react'

const RegisterEmail = () => {
    const emailRef = useRef()
    const [msg, setMsg] = useState()

    const onRegister = async()=>{
        const email = emailRef.current.value
        const res = await fetch('/api/register',{
            method:'POST',
            body:JSON.stringify({email}),
            headers:{'Content-Type':'application/json'}
        })

        const resData = await res.json()
        emailRef.current.value = ''

        setMsg(resData.msg)
        setTimeout(()=>{
            setMsg('')
        }, 2000)
    }
    console.log(msg);
  return (
    <div className={classes.register}>
      <h3> Sign up to stay up to date! </h3>
      <span>
        <input ref={emailRef} placeholder="Your email" />
        <button onClick={onRegister} className={classes.btn} > Register </button>
      </span>
      {msg && msg}
    </div>
  );
};

export default RegisterEmail;
