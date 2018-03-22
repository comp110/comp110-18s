import { print, csvToArray, promptString, clear } from "introcs";

import { Comparator, A_BEFORE_B, A_AFTER_B, A_SAME_AS_B } from "./Comparator";

/* Global Variables to hold # of Steps */
let comparisons: number;

/* Each row in our words CSV is an "Entry" */
class Entry {
    index: number = 0;
    word: string = "";
}

let main = async () => {
    print("Binary Search Example");

    let entries = await csvToArray("Select words.csv", Entry);

    // Use array's map method to transform from Entry[] to string[]
    let words = entries.map((entry) => entry.word);
    print("Loaded " + words.length + " words!");

    // For binary search to work, we must sort our data first!
    words.sort(ascending);

    while (true) {
        let input = await promptString("Search for a word...");
        
        // Reset comparisons counter global variable
        comparisons = 0;
        
        print("Word Found: " + binarySearch(words, input, ascending));
        print("Comparisons: " + comparisons);
    }
};

let ascending: Comparator<string> = (a: string, b: string): number => {
    if (a < b) {
        return A_BEFORE_B;
    } else if (a === b) {
        return A_SAME_AS_B;
    } else {
        return A_AFTER_B;
    }
};

let binarySearch = <T> (haystack: T[], needle: T, compare: Comparator<T>): boolean => {
    let low = 0;
    let high = haystack.length - 1;

    while (low <= high) {
        let middle = Math.floor((low + high) / 2);

        comparisons++; // Count the following comparison

        // TODO: Implement Correct Logic
        low++; // Remove this line.
    }
    
    return false; // Needle was not found in haystack!
};

main();