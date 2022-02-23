import Theme from '../styles/theme';

import {ScrollToTop} from "../components/ScrollToTop/ScrollToTop";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
        < ScrollToTop />
      </Theme>
    </>
  );
}
 