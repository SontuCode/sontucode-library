import {SontuNav} from "../../packages/ui-section/src/Navbar";

const demoNav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const heading = "My Website";

function App() {
  return (
    <SontuNav navs={demoNav} heading={heading} />
  )
}

export default App
