import { Link } from "react-router-dom";

//Return navbar with links

function NavBar() {
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Work", path: "/work" },
    { title: "Contact", path: "https://g87ddreljx4.typeform.com/to/FqizB5rE"},
    { title: "Designs", path: "/designs"}
  ];
  return(
      <ul className="flex text-white gap-4 mb-16">
        {navLinks.map((navLink => (
            <li key={navLink.path}>
                <Link to={navLink.path}>{navLink.title}</Link>
            </li>
        )))}

      </ul>
    )
}



export default NavBar;