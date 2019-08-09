import Banner from "./banner";
import Demo from "./Demo";
import Download from "./Download";
import Footer from "./Footer";

const Layout = props => {
  return (
    <div>
      <Banner />
      <Demo />
      <Download />
      <Footer />
      {props.children}
    </div>
  )
}

export default Layout