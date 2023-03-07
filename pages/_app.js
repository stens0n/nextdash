import Sidebar from 'nextdash/components/Sidebar';
import 'nextdash/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
  <Sidebar>
  <Component {...pageProps} />
  </Sidebar>
  );
}
