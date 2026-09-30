import {Github,Linkedin,Mail,Download,ArrowDown} from 'lucide-react';import {personalInfo as p} from '../data/portfolioData';
const social=[[Github,'GitHub profile',p.github,true],[Linkedin,'LinkedIn profile',p.linkedin,true],[Mail,'Send an email',`mailto:${p.email}`,false]];
const glance=[['Degree','B.Tech, Computer Science & Engineering'],['University',p.university],['Semester',p.semester],['CGPA',p.cgpa],['Languages','Python, C++']];
export default function Hero(){
  return(<section id="home" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
    <div>
      <p className="mb-4 text-sm font-medium text-accent">{p.title}</p>
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">{p.name}</h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{p.intro}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#projects" className="btn btn-primary">View My Projects <ArrowDown size={16}/></a>
        <a href={p.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><Download size={16}/> Download Resume</a>
      </div>
      <div className="mt-8 flex gap-3">{social.map(([I,label,href,ext])=>
        <a key={label} href={href} aria-label={label} {...(ext?{target:'_blank',rel:'noopener noreferrer'}:{})} className="rounded-lg border border-line bg-surface p-3 text-muted transition hover:border-accent hover:text-accent"><I size={20}/></a>)}</div>
    </div>
    <dl className="card space-y-4 text-sm">{glance.map(([k,v])=><div key={k} className="flex justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0"><dt className="text-muted">{k}</dt><dd className="text-right font-semibold">{v}</dd></div>)}</dl>
  </section>);
}
