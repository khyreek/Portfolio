import { v4 as uuid } from "uuid";

import {
    MappableCharacter,
    MappableWord,
    TransitionStartingDirection,
} from "../../types/utility";

import { sumArray } from "./customArrayMethods";

// website effects ---------------------------------
function sentenceToMappableCharacters(sentence: string): MappableWord[] {
    return sentence.split(" ").map<MappableWord>((word) => {
        const characterArray = word.split("");

        return {
            id: uuid(),
            characters: characterArray.map<MappableCharacter>((character) => {
                return { id: uuid(), character };
            }),
        };
    });
}

function addTransition<N extends HTMLElement | null>(
    intersectionObserver: IntersectionObserver | null,
    transitionStartingDirection: TransitionStartingDirection
): (node: N) => void {
    /**
     * react element ref values can be null so '| null' is required to pass the typechecker
     * otherwise it is useless
     *
     * the intersectionobserver argument is useless (*in react - not next) since this function
     * is context-specific however this is to avoid circular imports
     */

    return (node: N) => {
        if (node == null) return;
        if (transitionStartingDirection == "no-transition") return;

        // console.log("adding transition");
        node.classList.add("transition-" + transitionStartingDirection);
        intersectionObserver?.observe(node);
    };
}

export function splitLinesByLength(text: string, maxLength: number): string[] {
    /**
     * Splits a string into lines of maxLength length.
     * If the string is shorter than maxLength, it will return a single line.
     * If the string is longer than maxLength, it will return multiple lines.
     * @param text
     * @param maxLength
     * @returns {string[]}
     * @example
     * splitLinesByLength("hello world", 5)
     * // returns ["hello", "world"]
     * splitLinesByLength("hello world", 10)
     * // returns ["hello world"]
     */

    const words = text.split(" ");
    const lines: string[] = [];

    words.reduce<string[]>((acc, word, index) => {
        if (
            sumArray(acc.map((line) => line.length)) + word.length >=
            maxLength
        ) {
            // happens if the single word is longer than the maxLength
            if (acc.length === 0) {
                lines.push(word);
            } else {
                lines.push(acc.join(" "));
            }

            return [word];
        }

        if (index === words.length - 1) {
            lines.push([...acc, word].join(" "));
        }

        // if nothing returned at this point, there was no new line
        // so we can just add the word to the current line
        return [...acc, word];
    }, []);

    return lines;
}

export { sentenceToMappableCharacters, addTransition };
