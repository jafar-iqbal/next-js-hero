"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter()
  const links = [
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Meals",
      path: "/meals",
    },

  ];



    const handler = () => {
      router.push("/login")

  };



  if (pathName.includes("dashboard"))
    return (
      <div className="bg-green-400">
        Dashboard Layout
  </div>)
  return (
    <nav className="bg-red-600 px-6 py-4 flex justify-between items-center">
      <h1 className="text-3xl">
        Hero <span className="text-cyan-500">Next-JS</span>
      </h1>
      <ul className="flex justify-between items-center space-x-4">
        {links?.map((link) => (
          <Link
            className={`${pathName === link.path && "text-cyan-300"}`}
            key={link.path}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </ul>
      <button
        onClick={handler}
        className="bg-white text-cyan-400 p-3 rounded-md"
      >
        Login
      </button>
    </nav>
  );
};

export default Navbar;
