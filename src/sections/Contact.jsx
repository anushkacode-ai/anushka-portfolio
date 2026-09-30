import {useState} from 'react';import {Mail,Github,Linkedin} from 'lucide-react';import SectionTitle from '../components/SectionTitle';import {personalInfo as p} from '../data/portfolioData';
export default function Contact(){
  const [f,setF]=useState({name:'',email:'',message:''});const set=k=>e=>setF({...f,[k]:e.target.value});
  const send=e=>{e.preventDefault();const body=`${f.message}\n\nFrom: ${f.name} (${f.email})`;
    window.location.href=`mailto:${p.email}?subject=${encodeURIComponent('Portfolio message from '+f.name)}&body=${encodeURIComponent(body)}`};
  const fld='w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm';
  const links=[[Mail,p.email,`mailto:${p.email}`,false],[Github,'github.com/anushkacode-ai',p.github,true],[Linkedin,'linkedin.com/in/anushka-pareek123',p.linkedin,true]];
  return(<section id="contact" className="mx-auto max-w-6xl px-5 py-20"><SectionTitle title="Let's Connect" subtitle="Open to discussing projects, learning opportunities and internships."/>
    <div className="grid gap-10 md:grid-cols-2">
      <ul className="reveal space-y-4">{links.map(([I,t,h,ext])=><li key={h}><a href={h} {...(ext?{target:'_blank',rel:'noopener noreferrer'}:{})} className="flex items-center gap-3 break-all text-muted hover:text-accent"><I size={20} className="shrink-0"/>{t}</a></li>)}</ul>
      <form onSubmit={send} className="reveal card space-y-4">
        <div><label htmlFor="n" className="mb-1 block text-sm font-medium">Name</label><input id="n" required value={f.name} onChange={set('name')} className={fld}/></div>
        <div><label htmlFor="e" className="mb-1 block text-sm font-medium">Email</label><input id="e" type="email" required value={f.email} onChange={set('email')} className={fld}/></div>
        <div><label htmlFor="m" className="mb-1 block text-sm font-medium">Message</label><textarea id="m" rows="5" required value={f.message} onChange={set('message')} className={fld}/></div>
        <button type="submit" className="btn btn-primary w-full">Send Message</button>
        <p className="text-xs text-muted">This site has no backend. Sending opens your email app with the message ready to send.</p>
      </form></div></section>);
}
