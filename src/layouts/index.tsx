import { Link, Outlet } from "umi";
import styles from "./index.less";

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Trang chủ</Link>
        </li>
        <li>
          <Link to="/introduce">Giới Thiệu</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
