import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/customizeRsuite.css';
import '../styles/customizeSlick.css'
import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {

  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
