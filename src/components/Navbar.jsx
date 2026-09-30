import {useState,useEffect} from 'react';import {Menu,X,Sun,Moon} from 'lucide-react';
const links=['Home','About','Skills','Projects','Achievements','Education','Contact'];
export default function Navbar(){
  const [open,setOpen]=useState(false);const [scrolled,setScrolled]=useState(false);
  const [dark,setDark]=useState(()=>document.documentElement.classList.contains('dark'));
  useEffect(()=>{const f=()=>setScrolled(window.scrollY>8);f();window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f)},[]);
  const toggle=()=>{const d=!dark;setDark(d);document.documentElement.classList.toggle('dark',d);try{localStorage.setItem('theme',d?'dark':'light')}catch{}};
  return(<header className={`sticky top-0 z-40 border-b transition-colors duration-300 ${scrolled||open?'border-line bg-bg/95 backdrop-blur':'border-transparent bg-bg'}`}>
    <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
      <a href="#home" className="font-bold tracking-tight">Anushka Pareek</a>
      <ul className="hidden items-center gap-7 md:flex">{links.map(l=><li key={l}><a href={`#${l.toLowerCase()}`} className="text-sm font-medium text-muted transition hover:text-accent">{l}</a></li>)}</ul>
      <div className="flex items-center gap-2">
        <button onClick={toggle} aria-label={dark?'Switch to light mode':'Switch to dark mode'} className="rounded-lg border border-line p-2 text-muted hover:text-accent">{dark?<Sun size={18}/>:<Moon size={18}/>}</button>
        <button onClick={()=>setOpen(!open)} aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="mobile-menu" className="rounded-lg border border-line p-2 text-muted md:hidden">{open?<X size={18}/>:<Menu size={18}/>}</button>
      </div>
    </nav>
    {open&&<ul id="mobile-menu" className="border-t border-line px-5 pb-4 md:hidden">{links.map(l=><li key={l}><a href={`#${l.toLowerCase()}`} onClick={()=>setOpen(false)} className="block py-3 text-sm font-medium">{l}</a></li>)}</ul>}
  </header>);
}
