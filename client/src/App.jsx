import PlayersBoard from './components/PlayersBoard';
import SocketManager from './components/SocketManager';

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
