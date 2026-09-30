import {personalInfo as p} from '../data/portfolioData';
export default function Footer(){
  return(<footer className="border-t border-line"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-10 text-sm sm:flex-row sm:items-center">
    <div><p className="font-semibold">{p.name}</p><p className="text-muted">B.Tech CSE | AI/ML Developer</p></div>
    <div className="flex gap-5 text-muted"><a className="hover:text-accent" href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a><a className="hover:text-accent" href={p.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a className="hover:text-accent" href={`mailto:${p.email}`}>Email</a></div>
    <p className="text-muted">© 2026 {p.name}</p></div></footer>);
}
