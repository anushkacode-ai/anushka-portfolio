import {useEffect} from 'react';
import Navbar from './components/Navbar';import Hero from './components/Hero';import Footer from './components/Footer';
import About from './sections/About';import Skills from './sections/Skills';import Projects from './sections/Projects';
import Achievements from './sections/Achievements';import Education from './sections/Education';import Contact from './sections/Contact';
export default function App(){
  useEffect(()=>{
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));return()=>io.disconnect();
  },[]);
  return(<><a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-surface focus:p-3">Skip to content</a>
    <Navbar/><main><Hero/><About/><Skills/><Projects/><Achievements/><Education/><Contact/></main><Footer/></>);
}
