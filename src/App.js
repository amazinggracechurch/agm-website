import './app.css';
import Notifications from './components/notificationBar/notificationBar'
import HomePage from './components/routes/homepage';

export default function App() {
  return (
    <div className="App">
      <div className="body">
          <Notifications/>
          <HomePage />
      </div>
    </div>

  );
};
