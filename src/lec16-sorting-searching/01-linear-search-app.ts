import { print, csvToArray, promptString, clear } from "introcs";

import { Comparator } from "./Comparator";

/* Global Variables to hold Dictionary and # of Steps */
let comparisons: number;

/* Each row in our CSV is an "Entry" */
class Entry {
    index: number = 0;
    word: string = "";
}

let main = async () => {
    print("Linear Search Example");
    let entries: Entry[] = await csvToArray("Select words.csv", Entry);

    // Use array's map method to transform from Entry[] to string[]
    let words = entries.map((entry) => entry.word);

    print("Loaded " + words.length + " words!");
    
    while (true) {
        let input = await promptString("Search for a word...");
        
        // Reset comparisons counter global variable
        comparisons = 0;

        print("Word Found: " + linearSearch(words, input));
        print("Comparisons: " + comparisons);
    }
};

/**
 * Notice we are walking our array element-by-element and comparing 
 * each element with the needle we are searching for.
 */
let linearSearch = (haystack: string[], needle: string): boolean => {

    let i = 0;
    while (i < haystack.length) {
        // Increment the global variable counting # of comparisons by 1
        
        // If haystack element i is equal to needle, then return true

        i++;
    }

    return false;

};

main();