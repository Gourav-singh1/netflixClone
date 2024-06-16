import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import DesktopOne from "./components/DesktopOne";
import DesktopTwo from "./components/DesktopTwo";
import DesktopThree from "./components/DesktopThree";
import DesktopFour from "./components/DesktopFour";
import BackToTop from "./components/BackToTop";
import PreLoader from "./components/PreLoader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("fix-screen");
    }, 2400);
  }, []);
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <div class="overflow-hidden">
        {loading && <PreLoader />}
        <Switch>
          <Route exact path="/" component={DesktopOne} />
          <Route exact path="/DesktopTwo" component={DesktopTwo} />
          <Route exact path="/DesktopThree" component={DesktopThree} />
          <Route exact path="/DesktopFour" component={DesktopFour} />
        </Switch>
        {/* <DesktopOne /> */}
        {/* <DesktopTwo /> */}
        {/* <DesktopThree /> */}
        {/* <DesktopFour/> */}
        <BackToTop />
      </div>
    </>
  );
}

export default App;
