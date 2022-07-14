import { Button } from "@mui/material";

import { useAppSelector } from "../redux/hooks";
import { addTransition } from "../utils/methods/independentHelpers";

interface Props {}

export default function Footer({}: Props): JSX.Element {
    const transitionController = useAppSelector(
        (state) => state.aesthetic.transitionController
    );

    return (
        <footer
            className="main-footer"
            ref={addTransition(transitionController, "in-place")}
        >
            <div className="source-code-link">
                Src @{" "}
                <a href="https://github.com/khyreek/frederictu">
                    <Button variant="contained">GitHub</Button>
                </a>
            </div>

            <div className={"mail-to-link"}>
                <a href="mailto:frederictu.me@gmail.com">
                    <Button variant="contained">Contact me</Button>
                </a>
            </div>
        </footer>
    );
}
