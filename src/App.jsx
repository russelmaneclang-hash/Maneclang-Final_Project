import AboutMe from './components/AboutMe';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      <header className="text-center py-8 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
      </header>
      <main className="max-w-6xl mx-auto p-6">
        <Profile />
        <AboutMe />
        <Projects />
        <Skills />
        <Contacts />
      </main>
    </div>
  );
}

export default App;