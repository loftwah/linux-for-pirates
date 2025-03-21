export default function NavbarButton({ href, className, children }) {
  return (
    <a 
      href={href}
      className={`inline-flex items-center px-4 py-2 rounded-full transition-all duration-200 ${className}`}
    >
      {children}
    </a>
  );
} 