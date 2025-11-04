export function Section({ id, children, className = "" }) {
  return <section id={id} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>;
}
export function Card({ children }) {
  return <div className="rounded-2xl shadow-sm border border-slate-200 bg-white p-6 h-full">{children}</div>;
}
export function NavLink({ href, children }) {
  return <a href={href} className="text-sm font-medium text-slate-700 hover:text-slate-900">{children}</a>;
}
