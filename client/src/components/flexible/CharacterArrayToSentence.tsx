import { forwardRef } from "react";

import { AppTypes } from "../../types";
import { sentenceToMappableCharacters } from "../../utils/methods/independentHelpers";

interface CharacterArrayToSentenceProps extends AppTypes.Element.H1 {
    text: string;
    letterAnimation: string;
}



const CharacterArrayToSentence = forwardRef<
    HTMLHeadingElement,
    CharacterArrayToSentenceProps
>(({ text, letterAnimation, ...otherH1Props }, ref) => {
    const charactersArray = sentenceToMappableCharacters(text);

    return (
        <h1 ref={ref} {...otherH1Props}>
            {charactersArray.map((characters) => (
                <span key={characters.id}>
                    {characters.characters.map((character) => (
                        <span key={character.id} className={letterAnimation}>
                            {character.character}
                        </span>
                    ))}{" "}
                </span>
            ))}
        </h1>
    );
});

CharacterArrayToSentence.displayName = "CharacterArrayToSentence";
export default CharacterArrayToSentence;
