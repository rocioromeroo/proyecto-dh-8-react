import logo from './logo.svg';
import './assets/css/App.css';

import Head from './components/Head'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Topbar from './components/Topbar'
import PageContent from './components/PageContent';

function App() {

  return (
   
    <div className='App'>

      

        <Head />

        <div id="wrapper">

        <Sidebar />

        <div id="content-wrapper" class="d-flex flex-column">

          <div id="content">

            <Topbar />

            <PageContent />

          </div>

          <Footer />

          </div>

        </div>         

      

    
      
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
