import SocketManager from './services/socket_service';
import PlayersBoard from './components/PlayersBoard';

function App() {
  return (
    <>
      <SocketManager />
      <div className='h-full w-full grid items-center text-center'>
        <PlayersBoard />
      </div>
    </>
  );
}

export default App;
