import SectionTitle from '../components/SectionTitle';import Timeline from '../components/Timeline';import {journey,personalInfo as p} from '../data/portfolioData';
export default function About(){
  return(<section id="about" className="mx-auto max-w-6xl px-5 py-20"><SectionTitle title="About Me"/>
    <div className="grid gap-12 md:grid-cols-2">
      <div className="reveal max-w-prose space-y-4 leading-relaxed text-muted">
        <p>I'm a B.Tech Computer Science & Engineering student at {p.university}, currently in my 7th semester with a CGPA of {p.cgpa}.</p>
        <p>I'm most interested in AI and machine learning, and I learn best by building. My projects cover deep learning, NLP and classical ML in Python, along with data structures and algorithms in C++.</p>
        <p>I enjoy taking a model from raw data to something people can actually use, whether that's a Flask or Streamlit app or a clean C++ implementation.</p>
      </div>
      <div><h3 className="reveal mb-5 text-xl font-semibold">Learning Journey</h3><Timeline steps={journey}/></div>
    </div></section>);
}
