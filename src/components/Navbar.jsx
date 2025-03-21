import NavbarButton from './NavbarButton';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          Linux for Pirates
        </a>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/docs" className="nav-link">Docs</a>
          <a href="/blog" className="nav-link">Blog</a>
          <a href="/community" className="nav-link">Community</a>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <NavbarButton href="https://github.com/deanlofts/linux-for-pirates" className="github-button border-2">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </NavbarButton>
          
          <NavbarButton href="/join" className="join-squad-button">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
            </svg>
            Join Squad
          </NavbarButton>
          
          <button className="theme-toggle rounded-full p-2" id="theme-toggle">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18Z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
} 