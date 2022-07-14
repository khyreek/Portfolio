import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function Custom404(): JSX.Element {
    const router = useRouter();

    return (
        <div className="error-page-container">
            <div>Where are you going, go back to base</div>
            <Button variant="contained" onClick={() => router.push("/")}>
                Go Back
            </Button>
        </div>
    );
}
