
import { useLoaderData } from "@remix-run/react"
import Post from "~/components/post"
import { getPosts } from "~/models/posts.server"
import styles from '~/styles/blog.css'


export function meta(){
    return{
        title: 'Guitarras LA - Blog',
        description: 'Guitarras'
    }
}
export function links(){
    return[
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}
export async function loader(){
    const posts = await getPosts()
    // console.log(posts.data)
    return posts.data
}

function Blog() {
    const posts = useLoaderData()
    // console.log(posts[0].attributes)

    return (
        <main className="contenedor">
            <h2 className="heading">Blog</h2>
            <div className="blog">
                {posts.map(post => (
                    <Post
                        key={post.id}
                        postP = {post.attributes}
                    />
                ))}
            </div>
        </main>
    )
}

export default Blog
