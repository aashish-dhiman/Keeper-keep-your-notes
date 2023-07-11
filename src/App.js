import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Note />
            <Footer />
        </div>
    );
}

export default App;
