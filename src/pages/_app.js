import Theme from '../styles/theme';
// import "./ScrollToTop.module.css";
import {ScrollToTop} from "../components/ScrollToTop/ScrollToTop";
export default function App ({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
        < ScrollToTop />
    </>
  );
}
 