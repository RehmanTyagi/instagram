import styles from "./404.page.module.css";
import { Link, useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img src="/public/not-found-gif.gif" alt="img" />
      <h1>Page Not Found!</h1>
      <p>you clicked a broken link or the desired page does not exist.</p>
      <Link to={navigate(-1)}>Go Back</Link>
    </div>
  );
}

export default NotFoundPage;
