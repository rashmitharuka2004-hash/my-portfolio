import { Outlet } from 'react-router';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function Layout() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <Navigation />
        <main>
          <Outlet />
        </main>
        <Footer />
        <Toaster position="top-right" richColors />
      </div>
    </ThemeProvider>
  );
}
