import './App.css';
import './queries.css';
import Register from './components/Register';

function App() {
  return (
    <>
    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;600;900&display=swap" rel="stylesheet"></link>
    <body>
    <div className="section">
      <h1>Create admin account!</h1>
      <Register/>
    </div>
    </body>
    </>
  );
}

export default App;
