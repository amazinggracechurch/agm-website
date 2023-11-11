import './app.css';
import NotificationBar from './components/notificationBar/notificationBar';
import HomePage from './components/routes/homepage';
import Nav from './components/nav/nav';

export default function App() {
    return (
      <>
        <NotificationBar/>
        <Nav />
        <div className="App">
          <HomePage />
        </div>
      </>
    );
}
