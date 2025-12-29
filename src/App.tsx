import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Fleet from './components/Fleet';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyWhatsApp from './components/StickyWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-black" dir="rtl">
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <About />
        <Fleet />
        <Location />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}

export default App;
