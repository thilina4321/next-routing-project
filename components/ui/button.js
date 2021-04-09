import { useRouter } from "next/router";
import ArrowIcon from "./arrow-icon";
import classes from "./button.module.css";

const Button = (props) => {
  const router = useRouter();
  const { page } = props;

  const nextPage = () => {
    router.push(page);
  };

  return (
    
      <button className={classes.btn} onClick={nextPage} type="button">
        <span> Explore More </span>
        <span className={classes.arrow}> <ArrowIcon /> </span>
      </button>
    
  );
};

export default Button;
