import Button from "@mui/material/Button";

import { Blog } from "../types/utility";

interface Props extends Blog {}
function BlogCard({ link, title }: Props): JSX.Element {
    return (
        <a href={link} style={{height: '50vh' ,background:'red'}}>
            <Button variant="contained">{title}</Button>
        </a>
    );
}

export default BlogCard;
