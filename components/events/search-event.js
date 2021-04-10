import { useRef } from 'react';
import classes from './search-event.module.css'

const SearchEvent = (props) => {
  const monthInputRef = useRef()
  const yearInputRef = useRef()

  const onSubmitHandler = (event)=>{
    event.preventDefault();
    const month = monthInputRef.current.value
    const year = yearInputRef.current.value
    props.onSearch(month, year)

  }

  return (
    <form className={classes.form} onSubmit={onSubmitHandler} >
      <div className={classes.year} >
        <select ref={yearInputRef} >
          <option value="2021"> 2021 </option>
          <option value="2022"> 2022 </option>
        </select>
      </div>

      <div className={classes.month} > 
        <select ref={monthInputRef} > 
          <option value="1"> January </option>
          <option value="2"> February </option>
          <option value="3"> March </option>
          <option value="4"> April </option>
          <option value="5"> May </option>
          <option value="6"> June </option>
          <option value="7"> July </option>
          <option value="8"> August </option>
          <option value="9"> September </option>
          <option value="10"> October </option>
          <option value="11"> November </option>
          <option value="12"> December </option>
        </select>
      </div>

      <div className={classes.btn} >
        <button className={classes.button} type="submit"> Find Event </button>
      </div>

    </form>
  );
};

export default SearchEvent;
