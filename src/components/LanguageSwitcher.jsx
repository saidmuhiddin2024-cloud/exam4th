import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '../i18n'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="flex overflow-hidden rounded-md border border-neutral-300 text-[11px] font-bold">
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          className={`cursor-pointer px-2 py-1 ${i18n.resolvedLanguage === code ? 'bg-brand text-white' : 'hover:text-brand'}`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
