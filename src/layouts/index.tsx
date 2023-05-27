import { Link, Outlet } from "umi";
import "./index.less";
import "antd/dist/reset.css";

export default function Layout() {
  return (
    <div className="layout-container">
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
