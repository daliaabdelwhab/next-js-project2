import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/Home">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/products">
           Products
          </Link>
        </li>
        <li>
          <Link href="/users">
            Users
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;