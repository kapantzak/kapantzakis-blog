import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div>
        <Link href="/posts">
          <a>Blog</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
