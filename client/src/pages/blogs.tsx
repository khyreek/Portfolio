import BlogsList from "../components/BlogsList";
import { Blog } from "../types/utility";

const blogs: Blog[] = [
    // {
    //     title: "Blog 1",
    //     link: "https://www.google.com",
    // },
];

interface Props {}

function Blogs({}: Props): JSX.Element {
    return <BlogsList blogs={blogs} />;
}

export default Blogs;
