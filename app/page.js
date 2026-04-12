import { getAllPosts } from './posts'

export default async function Home() {
  const posts = getAllPosts()

  return (
    <div className="home-wrapper">
      <header className="home-header">
        <div className="home-container">
          <h1 className="home-name">Dennis</h1>
          <p className="home-tagline">Developer · Builder · Writer</p>
          <nav className="home-nav">
            <a href="mailto:dennisongwenghan@gmail.com">Contact</a>
          </nav>
        </div>
      </header>

      <main className="home-main">
        <div className="home-container">
          <div className="home-layout">
            <section>
              <h2 className="section-title">Writing</h2>
              {posts.map((post) => (
                <article key={post.slug} className="post-item">
                  <time className="post-date">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h3 className="post-title">
                    <a href={`/posts/${post.slug}`}>{post.title}</a>
                  </h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <a href={`/posts/${post.slug}`} className="read-more">
                    Read more →
                  </a>
                </article>
              ))}
            </section>

            <aside className="sidebar">
              <div className="sidebar-about">
                <h2 className="sidebar-title">About</h2>
                <p>
                  I build software and write about technology, craft, and ideas
                  that interest me. Based somewhere with good coffee.
                </p>
              </div>

              <div className="sidebar-links">
                <h2 className="sidebar-title">Links</h2>
                <ul>
                  <li><a href="https://github.com/dennisong45">GitHub</a></li>
                  <li><a href="https://www.linkedin.com/in/dennis-ong-075a45191/">LinkedIn</a></li>
                </ul>
              </div>

            </aside>
          </div>
        </div>
      </main>

      <footer className="home-footer">
        <div className="home-container">
          <p>© 2026 Dennis. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
