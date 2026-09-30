export default function SkillCard({title,items}){
  return(<div className="card reveal"><h3 className="mb-4 font-semibold">{title}</h3><ul className="flex flex-wrap gap-2">{items.map(i=><li key={i} className="badge">{i}</li>)}</ul></div>);
}
