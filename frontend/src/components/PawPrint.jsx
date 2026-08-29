export default function PawPrint({ className = 'w-5 h-5', ...props }) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" className={className} aria-hidden="true" {...props}>
      <ellipse cx="32" cy="43" rx="11.5" ry="9" />
      <ellipse cx="13.5" cy="29" rx="5.4" ry="7.2" transform="rotate(-22 13.5 29)" />
      <ellipse cx="24.5" cy="18.5" rx="5.4" ry="7.4" transform="rotate(-7 24.5 18.5)" />
      <ellipse cx="39.5" cy="18.5" rx="5.4" ry="7.4" transform="rotate(7 39.5 18.5)" />
      <ellipse cx="50.5" cy="29" rx="5.4" ry="7.2" transform="rotate(22 50.5 29)" />
    </svg>
  );
}
