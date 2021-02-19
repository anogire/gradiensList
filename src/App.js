import './App.scss';

import { MainNav } from './components/MainNav';
import { Content } from './components/Content';

export default function App() {
  return (
    <main className="App-main">
      <MainNav />
      <Content />
    </main>
  )
}