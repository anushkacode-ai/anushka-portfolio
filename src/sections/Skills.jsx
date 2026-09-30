import SectionTitle from '../components/SectionTitle';import SkillCard from '../components/SkillCard';import {skills,softSkills} from '../data/portfolioData';
export default function Skills(){
  return(<section id="skills" className="mx-auto max-w-6xl px-5 py-20"><SectionTitle title="Skills" subtitle="Tools and concepts I have used in my projects."/>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{skills.map(s=><SkillCard key={s.title} {...s}/>)}</div>
    <p className="reveal mt-8 text-sm text-muted">Also: {softSkills.join(', ')}.</p></section>);
}
