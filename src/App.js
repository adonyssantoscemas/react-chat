import { Channel, Logo, Login, Header } from "./components/";
import { useAuthState } from "./hooks";
import { firebase } from "./config/firebase";
import './App.css';

function App() {
  const { user, itializing } = useAuthState(firebase.auth());
  const renderLoading = () => {
    if (itializing)
      return (
        <div>
          <h3>Loadinng...</h3>
        </div>
      );
  };
  return (
    <div>
      {renderLoading()}
      {user ? (
        <>
          <Header />
          <Channel user={user} />
        </>
      ) : (
        <>
          {/* <Logo /> */}
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
