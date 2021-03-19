import './App.css';
import './queries.css';
import Register from './components/Register';

function App() {
  return (
    <>
    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;600;900&display=swap" rel="stylesheet"></link>
    <body>
      <div className="main">
      <h3 className="mainfont">MediApp<br/>Create your admin account!</h3>
      </div>
    <div className="section">
      <h1>Register here as an admin!</h1>
      <Register/>
    </div>
    </body>
    {/* <footer>
    <h5>Copyright © 2021 MediApp. All rights reserved.</h5>
    </footer> */}
    </>
  );
}

export default App;
