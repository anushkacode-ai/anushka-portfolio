import {Award} from 'lucide-react';import SectionTitle from '../components/SectionTitle';import {certifications} from '../data/portfolioData';
export default function Achievements(){
  return(<section id="achievements" className="mx-auto max-w-6xl px-5 py-20"><SectionTitle title="Certifications & Achievements"/>
    <div className="grid gap-5 md:grid-cols-3">{certifications.map(c=><div key={c.title} className="card reveal"><Award className="mb-3 text-accent" size={22} aria-hidden="true"/>
      <p className="text-sm text-muted">{c.issuer}</p><h3 className="mt-1 font-semibold leading-snug">{c.title}</h3><p className="mt-3 text-sm text-muted">{c.date}</p></div>)}</div></section>);
}
