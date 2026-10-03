export default function FavTabs({ tabs, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`rounded-full px-3 py-1 text-xs ${active === tab.key ? 'bg-brand text-white' : 'bg-soft'}`}
        >
          {tab.label} {tab.count}
        </button>
      ))}
    </div>
  )
}
