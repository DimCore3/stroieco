import './styles/index.scss';
import { withProviders } from "./providers";
import { Routing } from "pages";
import { Header } from 'widgets';

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
    </div>
  );
}

export default withProviders(App);
