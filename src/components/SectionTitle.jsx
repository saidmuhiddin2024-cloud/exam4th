export default function SectionTitle({ as: Tag = 'h2', className = '', children }) {
  return <Tag className={`mb-6 text-2xl font-bold md:text-3xl ${className}`}>{children}</Tag>
}
