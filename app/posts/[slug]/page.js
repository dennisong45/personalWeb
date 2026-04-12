import { getAllPosts, getPostBySlug } from '../../posts'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const { frontmatter } = getPostBySlug(slug)
  return { title: `${frontmatter.title} — Dennis` }
}

export default async function PostPage({ params }) {
  const { slug } = await params
  const { frontmatter, content } = getPostBySlug(slug)

  const formattedDate = new Date(frontmatter.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="post-wrapper">
      <div className="post-container">
        <nav className="post-back">
          <a href="/">← Back</a>
        </nav>

        <article>
          {frontmatter.coverImage && (
            <img
              src={frontmatter.coverImage}
              alt={frontmatter.title}
              className="post-cover"
            />
          )}

          <header className="post-header">
            <time className="post-header-date">{formattedDate}</time>
            <h1 className="post-heading">{frontmatter.title}</h1>
            {frontmatter.excerpt && (
              <p className="post-lead">{frontmatter.excerpt}</p>
            )}
          </header>

          <div className="prose">
            <MDXRemote source={content} />
          </div>
        </article>
      </div>
    </div>
  )
}
