import "./App.css";
import Kosar from "./components/Kosar";
import Termekek from "./components/Termekek";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Webáruház</h1>
			</header>
			<article className="App-article">
				<Termekek />
				<Kosar />
			</article>
		</div>
	);
}

export default App;
