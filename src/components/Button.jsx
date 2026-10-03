const variants = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  dark: 'bg-ink text-white hover:bg-black',
  light: 'bg-soft text-ink hover:bg-neutral-200'
}

export default function Button({ variant = 'primary', className = '', ...props }) {
  return (
    <button
      className={`cursor-pointer rounded-md px-5 py-3 text-xs font-bold uppercase transition-colors ${variants[variant]} ${className}`}
      {...props}
    />
  )
}
