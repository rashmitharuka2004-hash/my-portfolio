export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navHeight = 64; // Height of fixed navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

export const navigateToSection = (
  navigate: (path: string) => void,
  sectionId: string,
  currentPath: string
) => {
  if (currentPath === '/') {
    // If on home page, just scroll
    scrollToSection(sectionId);
  } else {
    // If on another page, navigate to home then scroll
    navigate('/');
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 100);
  }
};
