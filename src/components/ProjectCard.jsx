import {Github,ExternalLink,Clock} from 'lucide-react';
export default function ProjectCard({p}){
  const ongoing=p.status==='Ongoing';
  return(<article className={`card reveal flex flex-col ${p.featured?'border-t-4 border-t-accent':''} ${ongoing?'border-dashed':''}`}>
    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
      <span className="text-xs font-medium text-muted">{p.tag}</span>
      <span className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${ongoing?'bg-amber-500/15 text-amber-700 dark:text-amber-300':'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'}`}>{ongoing&&<Clock size={12}/>}{p.status}</span>
    </div>
    <h3 className="text-xl font-bold">{p.name}</h3>
    <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
    <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm marker:text-accent">{p.highlights.map(h=><li key={h}>{h}</li>)}</ul>
    <ul className="mt-5 flex flex-wrap gap-2">{p.tech.map(t=><li key={t} className="badge">{t}</li>)}</ul>
    <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
      {p.github?<a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !py-2"><Github size={16}/> GitHub<span className="sr-only"> repository for {p.name}</span></a>
        :<span className="text-xs text-muted">GitHub link coming soon</span>}
      {p.demo&&<a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary !py-2"><ExternalLink size={16}/> Live Demo</a>}
    </div>
  </article>);
}
