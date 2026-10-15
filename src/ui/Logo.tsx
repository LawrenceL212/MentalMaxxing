export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" aria-hidden="true">
      <circle cx="256" cy="256" r="170" fill="none" stroke="var(--accent)" strokeWidth="44" />
      <circle cx="256" cy="256" r="62" fill="var(--m-dump)" />
    </svg>
  )
}
