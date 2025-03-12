import List from "./components/List";
import { lists } from "./data/list";


function App() {
  // console.log(lists);
  return (
    <div>
      <h1>Todo list</h1>
      <main>
        <List lists={lists} />
      </main>
    </div>
  );
}

export default App;
