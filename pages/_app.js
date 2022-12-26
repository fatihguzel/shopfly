import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";

import { Provider } from "react-redux";
import Layout from "../components/Layout";
import { store } from "../store/store";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
