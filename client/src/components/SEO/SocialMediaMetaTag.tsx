/**
 * This component just forces 'name' and 'content' props to be defined.
 */

import { AppTypes } from "../../types";

interface Props extends AppTypes.Element.Meta {}

function SocialMediaMetaTag({ name, content, ...rest }: Props): JSX.Element {
    return <meta name={name} content={content} {...rest} />;
}

export default SocialMediaMetaTag;
