const items = [
  'Album Campaigns',
  'Single Launches',
  'Tour Press',
  'Media Training',
  'Festival Publicity',
  'Crisis Management',
  'Brand Partnerships',
  'Award Campaigns',
]

export function Marquee() {
  const row = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-border bg-primary py-5 text-primary-foreground" aria-hidden>
      <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-10 motion-reduce:animate-none">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-serif text-2xl md:text-3xl">
            {item}
            <span className="text-lg">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  )
}
