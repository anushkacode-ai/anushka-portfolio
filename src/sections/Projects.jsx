import SectionTitle from '../components/SectionTitle';import ProjectCard from '../components/ProjectCard';import {projects} from '../data/portfolioData';
export default function Projects(){
  const done=projects.filter(p=>p.status==='Completed'),going=projects.filter(p=>p.status==='Ongoing');
  return(<section id="projects" className="mx-auto max-w-6xl px-5 py-20"><SectionTitle title="Projects" subtitle="Two AI/ML applications and two C++ data structure projects, plus one project in progress."/>
    <h3 className="mb-5 text-lg font-semibold">Completed projects</h3>
    <div className="grid gap-6 md:grid-cols-2">{done.map(p=><ProjectCard key={p.name} p={p}/>)}</div>
    <h3 className="mb-5 mt-14 text-lg font-semibold">Currently building</h3>
    <div className="grid gap-6 md:grid-cols-2">{going.map(p=><ProjectCard key={p.name} p={p}/>)}</div></section>);
}
