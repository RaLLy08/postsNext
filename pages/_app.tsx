import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

import store from '../src/store';

function App({ Component, pageProps }: AppProps) {
  return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
  );
}

export default App;
