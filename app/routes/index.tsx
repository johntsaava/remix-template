import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="h-full">
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}
