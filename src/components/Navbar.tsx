import Button from "./Button";

const Navbar = () => {
  const navList = [
    {
      name: "home",
      path: "/home",
    },
    {
      name: "Error",
      path: "/error",
    },
  ];

  return (
    <nav>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {navList.map((item) => (
            <Button key={item.name}></Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
