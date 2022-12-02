


import Post from "./post"

export default function ListadoPosts({postsP}) {
  return (
    <>
        <h2 className="heading">Blog</h2>
        <div className="blog">
            {postsP.map(postP => (
                <Post
                    key={postP.id}
                    postP={postP.attributes}
                />
            ))}
        </div>
    </>
  )
}
