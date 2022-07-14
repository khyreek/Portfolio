import { Blog } from "../types/utility";

import BlogCard from "./BlogCard";

interface Props {
    blogs: Blog[];
}

function BlogsList({ blogs }: Props): JSX.Element {
    const noBlogsSection = (
        <div className="blogs-page" style={{ fontSize: "5rem" }}>
            None yet. It may be here later.
        </div>
    );
    const withBlogsSection = blogs.map((blog) => (
        <BlogCard key={blog.title} link={blog.link} title={blog.title} />
    ));

    return (
        <div className="blogs-page">
            <div className="blogs-list">
                {blogs.length === 0 ? noBlogsSection : withBlogsSection}
            </div>
        </div>
    );
}

export default BlogsList;
