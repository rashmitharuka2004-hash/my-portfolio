I have an existing React portfolio project running locally with the following structure:
- App.js
- Hero.jsx
- About.jsx
- Skills.jsx
- Projects.jsx
- Contact.jsx
I also have my previous portfolio website here: https://tharuka-jayaweera-76745.lovable.app/

I want to upgrade this portfolio into a **modern, professional, developer portfolio** using React (with hooks), functional components, and modern libraries.  

Please generate a **step-by-step development plan and code implementation suggestions** including the following:

1. **Theme and Styling**
   - Use my previous website's color theme as the base.
   - Use **Tailwind CSS** (or optionally **styled-components**) for styling.
   - Include **dark mode toggle**.
   - Fully responsive for mobile, tablet, and desktop.

2. **Hero Section (Hero.jsx)**
   - Modern animated introduction (typewriter effect for developer title).
   - Include a professional profile photo placeholder.
   - Smooth scroll button to the About section.
   - Optional social icons (LinkedIn, GitHub, email).

3. **About Section (About.jsx)**
   - Professional summary of skills and experience.
   - Include animated counters for years of experience, projects completed, etc.
   - Optional download button for resume (PDF).

4. **Skills Section (Skills.jsx)**
   - Display skills with animated progress bars or circular charts.
   - Include icons for technologies (React, JavaScript, Laravel, PHP, MySQL, Android, etc.).
   - Optional filtering animation by skill type (frontend/backend/mobile).

5. **Projects Section (Projects.jsx)**
   - Cards for each project with:
     - Image preview
     - Project title
     - Short description
     - Tech stack badges
     - GitHub / Live Demo buttons
   - Hover animations (scale, shadow, or overlay with description).
   - Optional modal popup for project details.

6. **Contact Section (Contact.jsx)**
   - Modern contact form with validation (name, email, message).
   - Integrate with **email sending service** (like EmailJS or Netlify Forms).
   - Optional Google Maps embed for location.
   - Animated submit button with success/failure notifications.

7. **Navigation & Routing**
   - Sticky header navigation with smooth scroll to sections.
   - Highlight current section on scroll.
   - Include mobile hamburger menu animation.

8. **Animations & Interactivity**
   - Use **Framer Motion** or **React Spring** for smooth fade-in, slide-in, and hover animations.
   - Animate sections as they appear on scroll.
   - Use **react-icons** for icons.

9. **Optimization**
   - Lazy load images and sections for performance.
   - Optimize for SEO (meta tags, alt tags, proper headings).
   - Clean folder structure (components, assets, styles).

10. **Extra Professional Features**
    - Add a **skills filter or category switcher** in Projects or Skills section.
    - Optional **downloadable portfolio PDF**.
    - Optional **testimonials section**.

11. **VS Code Setup**
    - Use React 18+.
    - Use modern JavaScript ES6+ syntax.
    - Set up **Prettier** and **ESLint** for clean code.

---

**Please generate the React code for each component** (Hero.jsx, About.jsx, Skills.jsx, Projects.jsx, Contact.jsx) based on these instructions.  
Use **functional components, Tailwind CSS classes**, and integrate **Framer Motion for animations**.  
Also include the **updated App.js** with routing or smooth scroll linking all sections.  

Additionally, provide **folder structure recommendations, assets folder setup, and reusable components** (like Button, Card, SectionWrapper, SocialIcons) to make the portfolio scalable.