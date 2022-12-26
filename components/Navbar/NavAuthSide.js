import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavAuthSide = () => {
  const router = useRouter();
  return (
    <>
      <Link
        className={`nav-item nav-link  ${
          router.pathname == "/login" && "active"
        }`}
        href="/login"
      >
        Login
      </Link>
      <Link
        className={`nav-item nav-link  ${
          router.pathname == "/login" && "active"
        }`}
        href="/register"
      >
        Register
      </Link>
    </>
  );
};

export default NavAuthSide;
