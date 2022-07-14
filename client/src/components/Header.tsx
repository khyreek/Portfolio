import Button from "@mui/material/Button";
import BookIcon from "@mui/icons-material/Book";
import { useRouter } from "next/router";

interface Props {}

function Header({}: Props): JSX.Element {
    const router = useRouter();

    return (
        <header className="main-header">
            <nav>
                <Button
                    variant="contained"
                    className="nav-link"
                    startIcon={<BookIcon />}
                    onClick={() => router.push("/blogs")}
                >
                    Blogs
                </Button>
            </nav>
        </header>
    );
}

export default Header;
// export default memo(Header);
