export default function Timeline({steps}){
  return(<ol className="relative ml-3 border-l border-line">{steps.map((s,i)=>
    <li key={s} className="reveal relative pb-6 pl-8 last:pb-0"><span className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent ${i===steps.length-1?'bg-accent':'bg-bg'}`}/><p className="font-medium">{s}</p></li>)}</ol>);
}
