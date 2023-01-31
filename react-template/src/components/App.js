import Header from "./components/Header";
import Description from "./components/Description/index";
import ActivityTraker from "./components/Activity Tracker";
import Scheduler from "./components/Scheduler";

function App() {
  return (
    <div>
      <Header />
      <h1>Welcome to Trippy!</h1>
      <Description />
      <ActivityTraker />
      <Scheduler />
    </div>
  );
}

export default App;
