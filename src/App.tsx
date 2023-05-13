import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage/Homepage';

function App() {
	return (
		<div className="app">
			<header className="app__header">
				<Navbar />
			</header>
			<main className="app__main">
				<Homepage />
			</main>
			<footer className="app__footer">
				<Footer />
			</footer>
		</div>
	);
}

export default App;
