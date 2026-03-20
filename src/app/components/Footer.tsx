import { Link } from 'react-router';
import { SocialIcons } from './SocialIcons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Tharuka Jayaweera
              </span>
            </h3>
            <p className="text-gray-400">
              Full Stack Software Engineer and Content Creator passionate about 
              building innovative digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About' },
                { path: '/skills', label: 'Skills' },
                { path: '/projects', label: 'Projects' },
                { path: '/contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4">Connect With Me</h4>
            <SocialIcons />
            <p className="text-gray-400 mt-4 text-sm">
              Let's build something amazing together!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Tharuka Jayaweera. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Built with React, Tailwind CSS & Motion
          </p>
        </div>
      </div>
    </footer>
  );
}