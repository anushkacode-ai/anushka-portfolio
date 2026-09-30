import {GraduationCap} from 'lucide-react';import SectionTitle from '../components/SectionTitle';import {education as e} from '../data/portfolioData';
export default function Education(){
  return(<section id="education" className="mx-auto max-w-6xl px-5 py-20"><SectionTitle title="Education"/>
    <div className="card reveal flex max-w-2xl items-start gap-5"><GraduationCap className="mt-1 shrink-0 text-accent" size={28} aria-hidden="true"/>
      <div><h3 className="text-xl font-bold">{e.school}</h3><p className="mt-1">{e.degree}, {e.field}</p><p className="mt-1 text-sm text-muted">{e.period}</p><p className="mt-3 font-semibold">CGPA: {e.cgpa}</p></div></div></section>);
}
