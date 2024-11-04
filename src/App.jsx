import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//Homepage
function Home() {
  return (
    <div className="container bg-cstm">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Brand */}
          <Link to="/" className="navbar-brand text-white">
            Astropaper
          </Link>
          {/* Navbar items (collapsible) */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/posts/1" className="fw-bold me-2 text-white text-decoration-none">
                  Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tags" className="fw-bold me-2 text-white text-decoration-none">
                  Tags
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="fw-bold me-2 text-white text-decoration-none">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="orange-line"></div>
      {/* Header  */}
      <div className="header mt-5">
        <div className="header-content">
          <h1>
            Mingalaba <i className="bi bi-broadcast color-cstm"></i>
          </h1>
          <p>
            AstroPaper is a minimal, responsive, accessible and SEO-friendly Astro blog theme. This theme follows best practices and provides accessibility out of the box. Light and dark mode are supported by default. Moreover, additional color
            schemes can also be configured.
          </p>
          <p>Read the blog posts or check README for more info.</p>
          <p>
            Social Links:
            <i className="bi bi-github ms-5"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-linkedin"></i>
          </p>
        </div>
      </div>
      <div className="orange-line"></div>

      {/* Body */}
      <div className="body mt-5">
        <div className="body-content">
          <h2>Featured</h2>
          <div className="featured-posts">
            <h3 className="color-cstm">How to configure AstroPaper theme</h3>
            <p className="fst-italic">
              <i className="bi bi-calendar"></i> Sep 8, 2024 | 08:58 PM
            </p>
            <p>How you can make AstroPaper theme absolutely yours.</p>
          </div>
          <div className="featured-posts">
            <h3 className="color-cstm">How to integrate Giscus comments into AstroPaper</h3>
            <p className="fst-italic">
              <i className="bi bi-calendar"></i> Updated: Sep 25, 2024 | at 12:07 PM
            </p>
            <p>Comment function on a static blog hosted on GitHub Pages with Giscus.</p>
          </div>
          <div className="featured-posts">
            <h3 className="color-cstm">AstroPaper 4.0</h3>
            <p className="fst-italic">
              <i className="bi bi-calendar"></i> Jan 4, 2024 | at 09:30 AM
            </p>
            <p>AstroPaper v4: ensuring a smoother and more feature-rich blogging experience.</p>
          </div>
          <div className="featured-posts">
            <h3 className="color-cstm">Adding new posts in AstroPaper theme</h3>
            <p className="fst-italic">
              <i className="bi bi-calendar"></i> Updated: Dec 21, 2023 | at 09:12 AM
            </p>
            <p>Some rules & recommendations for creating or adding new posts using AstroPaper theme.</p>
          </div>
          <div className="orange-line"></div>
          <h2>Recent Posts</h2>
          <div className="recent-posts">
            <h3 className="color-cstm">Adding LaTeX Equations in AstroPaper blog posts</h3>
            <p className="fst-italic">
              <i className="bi bi-calendar"></i> Sep 8, 2024 | at 08:58 PM
            </p>
            <p>How to use LaTeX equations in your Markdown files for AstroPaper.</p>
          </div>
          <div className="recent-posts">
            <h3 className="color-cstm">How to use Git Hooks to set Created and Modified Dates</h3>
            <p className="fst-italic">
              <i className="bi bi-calendar"></i> Updated: Jan 8, 2024 | at 06:59 PM
            </p>
            <p>How to use Git Hooks to set your Created and Modified Dates on AstroPaper</p>
          </div>
          <div className="recent-posts">
            <h3 className="color-cstm">How to add a new Social Icon to AstroPaper</h3>
            <p className="fst-italic">
              <i className="bi bi-calendar"></i> Jan 8, 2024 | at 06:16 PM
            </p>
            <p>How to add a new social icon to AstroPaper</p>
          </div>
          <div className="recent-posts">
            <h3 className="color-cstm">Predefined color schemes</h3>
            <p className="fst-italic">
              <i className="bi bi-calendar"></i> Updated: Jan 4, 2024 | at 09:09 AM
            </p>
            <p>Some of the well-crafted, predefined color schemes for AstroPaper blog theme.</p>
          </div>
        </div>
        <p className="text-center mt-5">
          All Posts <i className="bi bi-arrow-right"></i>
        </p>
      </div>
      <div className="orange-line"></div>

      {/* Footer */}
      <div className="footer mt-5">
        <p>
          Copyright © 2024 | All rights reserved.
          <i className="bi bi-github ms-5"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-linkedin"></i>
        </p>
      </div>
    </div>
  );
}

//Posts 1
function Posts() {
  return (
    <div className="container bg-cstm">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Brand */}
          <Link to="/" className="navbar-brand text-white">
            Astropaper
          </Link>
          {/* Navbar items (collapsible) */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/posts/1" className="fw-bold me-2 text-white text-decoration-none">
                  Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tags" className="fw-bold me-2 text-white text-decoration-none">
                  Tags
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="fw-bold me-2 text-white text-decoration-none">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="orange-line"></div>
      {/* Body */}
      <div className="body mt-5">
        <h1>POSTS</h1>
        <div className="body-content">
          <div className="featured-posts">
            <h3 className="color-cstm">How to configure AstroPaper theme</h3>
            <p className="fst-italic">
              <i className="bi bi-calendar"></i> Sep 8, 2024 | 08:58 PM
            </p>
            <p>How you can make AstroPaper theme absolutely yours.</p>
          </div>
          <div className="featured-posts">
            <h3 className="color-cstm">How to integrate Giscus comments into AstroPaper</h3>
            <p className="fst-italic">
              <i className="bi bi-calendar"></i> Updated: Sep 25, 2024 | at 12:07 PM
            </p>
            <p>Comment function on a static blog hosted on GitHub Pages with Giscus.</p>
          </div>
          <div className="featured-posts">
            <h3 className="color-cstm">AstroPaper 4.0</h3>
            <p className="fst-italic">
              <i className="bi bi-calendar"></i> Jan 4, 2024 | at 09:30 AM
            </p>
            <p>AstroPaper v4: ensuring a smoother and more feature-rich blogging experience.</p>
          </div>
          <div className="featured-posts mb-5">
            <h3 className="color-cstm">Adding new posts in AstroPaper theme</h3>
            <p className="fst-italic">
              <i className="bi bi-calendar"></i> Updated: Dec 21, 2023 | at 09:12 AM
            </p>
            <p>Some rules & recommendations for creating or adding new posts using AstroPaper theme.</p>
          </div>
        </div>
        <p className="text-center mt-5">
        <i className="bi bi-arrow-left"></i> Prev 1 / 6 Next <i className="bi bi-arrow-right"></i>
        </p>
      </div>
      <div className="orange-line"></div>

      {/* Footer */}
      <div className="footer">
        <p>
          Copyright © 2024 | All rights reserved.
          <i className="bi bi-github ms-5"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-linkedin"></i>
        </p>
      </div>
    </div>
  );
}


//Tags
function Tags() {
  return (
    <div className="container bg-cstm">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Brand */}
          <Link to="/" className="navbar-brand text-white">
            Astropaper
          </Link>
          {/* Navbar items (collapsible) */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/posts/1" className="fw-bold me-2 text-white text-decoration-none">
                  Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tags" className="fw-bold me-2 text-white text-decoration-none">
                  Tags
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="fw-bold me-2 text-white text-decoration-none">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="orange-line"></div>
      {/* Body */}
      <div className="body">
        <h1>TAGS</h1>
      </div>
      <div className="orange-line"></div>

      {/* Footer */}
      <div className="footer">
        <p>
          Copyright © 2024 | All rights reserved.
          <i className="bi bi-github ms-5"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-linkedin"></i>
        </p>
      </div>
    </div>
  );
}

//About
function About() {
  return (
    <div className="container bg-cstm">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Brand */}
          <Link to="/" className="navbar-brand text-white">
            Astropaper
          </Link>
          {/* Navbar items (collapsible) */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/posts/1" className="fw-bold me-2 text-white text-decoration-none">
                  Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tags" className="fw-bold me-2 text-white text-decoration-none">
                  Tags
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="fw-bold me-2 text-white text-decoration-none">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="orange-line"></div>
      {/* Body */}
      <div className="body">
        <h1>ABOUT</h1>
      </div>
      <div className="orange-line"></div>

      {/* Footer */}
      <div className="footer">
        <p>
          Copyright © 2024 | All rights reserved.
          <i className="bi bi-github ms-5"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-linkedin"></i>
        </p>
      </div>
    </div>
  );
}

//NotFound
function NotFound() {
  return <h2>Not Found</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

