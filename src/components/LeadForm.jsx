import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { request } from '../api'
import Button from './Button'

const inputClass = 'w-full rounded-md bg-soft px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand'

export default function LeadForm({ source, withName = true, label }) {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', phone: '' })
  const [status, setStatus] = useState('idle')

  const change = (event) => setForm({ ...form, [event.target.name]: event.target.value })

  const submit = async (event) => {
    event.preventDefault()
    setStatus('loading')
    try {
      await request('/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source, date: new Date().toISOString() })
      })
      setForm({ name: '', phone: '' })
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  const buttonText = { done: t('form.sent'), error: t('form.error') }[status] || label || t('form.getOffer')

  return (
    <form onSubmit={submit} className="flex flex-col gap-3 md:flex-row">
      {withName && <input name="name" required value={form.name} onChange={change} placeholder={t('form.name')} className={inputClass} />}
      <input name="phone" required type="tel" value={form.phone} onChange={change} placeholder={t('form.phone')} className={inputClass} />
      <Button disabled={status === 'loading'} className="whitespace-nowrap">
        {buttonText}
      </Button>
    </form>
  )
}
