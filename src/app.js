import './app.css';
// import NotificationBar from './components/notificationBar/notificationBar';
import HomePage from './components/routes/homepage';

export default function App() {
    return (
      <>
        {/* <NotificationBar/> */}
        <div className="App">
          <HomePage />
        </div>
      </>
    );
}
