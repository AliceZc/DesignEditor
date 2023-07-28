import { Outlet, Link } from 'umi';
const FormilyDemo = () => {
  return (
    <div className="formily-demo">
      <h1>Formily Demo</h1>
      <ul>
        <li>
          <Link to="/Formily/demo1">Demo1</Link>
        </li>
        <li>
          <Link to="/Formily/demo2">Demo2</Link>
        </li>
        <li>
          <Link to="/Formily/demo3">Demo3</Link>
        </li>
        <li>
          <Link to="/Formily/demo4">Demo4</Link>
        </li>
        <li>
          <Link to="/Formily/demo5">Demo5</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default FormilyDemo;
