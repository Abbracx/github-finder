import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/layouts/Navbar";
import Navbar from "./components/layouts/Navbar.jsx";
import Footer from "./components/layouts/Footer.jsx";
import Alert from "./components/layouts/Alert.jsx";
import Home from "./pages/Home.jsx";
import User from "./pages/User.jsx";
import About from "./pages/About.jsx";
import NotFound  from "./pages/NotFound.jsx";
import { GitHubProvider } from "./components/context/github/GithubContext.jsx";
import { AlertProvider } from "./components/context/alert/AlertContext.jsx";

function App() {
  return (
    <GitHubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen ">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GitHubProvider>
  );
}

export default App;
