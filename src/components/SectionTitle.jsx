export default function SectionTitle({title,subtitle}){
  return(<div className="reveal mb-10"><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    {subtitle&&<p className="mt-3 max-w-xl text-muted">{subtitle}</p>}</div>);
}
