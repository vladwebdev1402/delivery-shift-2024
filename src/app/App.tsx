import { Provider } from 'react-redux';

import { store } from '@/shared/store';

import Router from './Router';
import './fonts/fonts.css';

function App() {
  return (
    <div className={'App'}>
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
