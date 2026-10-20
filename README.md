Important "all of the graphic image are temporary/images"

# Rat King Portfolio (MyProgramer)

The official portfolio of a true Rat King disciple. A responsive, framework-free website built with pure HTML5, CSS3, and vanilla JS. Guaranteed higher quality than a Caedrel draft pick, featuring smooth dark mode, custom cursor physics, and absolute zero-choke mechanics. Xixed. 🐀👑

---

## Website Walkthrough

This portfolio is built without heavy UI frameworks—just straight semantic HTML5, modern CSS Grid/Flexbox layouts, and lightweight JavaScript for custom interactions.

### 1. Navigation & Header (`header`)

* **Sticky Navigation Bar:** Uses a backdrop blur effect that stays locked to the top as you scroll down the page.
* **Active State Indicator:** Features a sliding pill background that smoothly tracks your current page or whatever link you are hovering over.
* **Dark / Light Mode Toggle:** An interactive toggle button with a spin animation that switches between color modes and saves your preference in `localStorage`.
* **Scroll Progress Bar:** A thin accent-colored line right at the bottom edge of the header that fills up as you scroll down the page.

### 2. Home Page (`index.html`)

* **Hero Section:** Has animated floating gradient orbs in the background combined with clean typography fade-ins.
* **Selected Work Grid:** Uses an asymmetrical card layout to show off featured projects, complete with custom CSS-drawn artwork previews.
* **Intro / Bio Section:** Breaks down technical skills into clean, modern UI pills.

### 3. Projects Page (`projects.html`)

* **Expanded Grid View:** A full gallery showcasing systems architecture, interactive web apps, and digital creations.
* **Custom Cursor Physics:** On desktop/fine pointer devices, hovering over project cards pops up a custom "View" cursor that reacts with subtle tilt movements on the card artwork.

### 4. About Page (`about.html`)

* **Profile & Bio:** Lays out personal background, design mindset, and tech stacks (Python, Java, C#, C++, Unity, Unreal Engine).
* **Timeline Component:** A clean vertical milestone tracker mapping out past work and projects.

### 5. Contact Page (`contact.html`)

* **Direct Mailbox:** Includes a one-click "Copy address" button that gives instant feedback when you copy the email.
* **Interactive Contact Form:** Validates user inputs and triggers your local mail client, pre-filling the subject and message with your input details.

---

## Color Choices, Style & Aesthetics Breakdown

### **1. Color Palette & Theming**

* **Dynamic Color Engine:** Powered by native CSS custom properties (`:root`) with automatic system preference detection (`color-scheme`) and manual overrides via `data-theme`.
* **Light Mode Vibe:** Built on soft pastel tones—warm white backgrounds (`#fffefe`), light lavender surfaces (`#f6efff`, `#efe8ff`), subtle purple borders (`#e0d2ff`), and a deep violet accent (`#7f5ae0`) paired with dark ink text.
* **Dark Mode Vibe:** Shifts into a moody, deep slate setup—dark navy backgrounds (`#171f31`), muted slate surfaces (`#1e2840`, `#27324e`), structured border lines (`#34415f`), and a glowing lavender accent (`#b69bf2`) with bright text.

### **2. Typography**

* **Serif Headings (`Newsreader`):** Used for titles, hero text, and big headers. Gives the site an editorial, high-end feel that stands out from typical dev portfolios.
* **Sans-Serif Body (`Figtree`):** Clean, highly readable geometric font used for paragraph text, navigation links, and buttons so it stays crisp on any screen.

### **3. Layout & Structure**

* **Asymmetrical Bento Grid:** Ditches boring, repetitive grids by using custom CSS Grid spans so items stagger naturally across the page.
* **Fluid Spacing:** Uses CSS `clamp()` functions everywhere for padding and font sizing so things scale naturally without breaking on weird screen sizes.

### **4. Graphics, Visual Art & Micro-Interactions**

* **Pure CSS Artwork:** Instead of bloated image files, project cards use custom vector-style graphics built completely out of nested divs, CSS gradients, and box shadows.
* **Fluid Motion & Physics:**
* Features a custom trailing hover cursor with spring-like physics (`cubic-bezier`).
* Cards tilt slightly toward your mouse using reactive coordinate calculations.
* Sliding nav pills and scroll bars give the whole site a snappy, tactile feel.
