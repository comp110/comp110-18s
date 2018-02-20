import { print, csvToList } from "introcs";
import { List, cons, first, rest, listify } from "introcs/list";

class Movie {
    title: string = "";
    tomatometer: number = 0;
    imdbRating: number = 0;
    genre: string = "";
    year: number = 0;
    minutes: number = 0;
    hasAdamSandler: boolean = false;
    hasNickCage: boolean = false;
}

export let main = async () => {
    let movies: List<Movie> = await csvToList("Movie Data", Movie);

    print("All Movies");
    print(movies);

    // Declaring the variables we'll use.
    let cageMovies: List<Movie>;
    let sandlerMovies: List<Movie>;
    let cageUnionSandler: List<Movie>;
    let worthWatching: List<Movie>;

    print("Movies featuring Cage OR Sandler:");
    // TODO #1

    print("Movies worth watching featuring Cage OR Sandler:");
    // TODO #2

};

/**
 * Filtering Functions
 */

let filterBySandler = (movies: List<Movie>): List<Movie> => {
    if (movies === null) {
        return null;
    } else if (first(movies).hasAdamSandler) {
        return cons(first(movies), filterBySandler(rest(movies)));
    } else {
        return filterBySandler(rest(movies));
    }
};

let filterByCage = (movies: List<Movie>): List<Movie> => {
    if (movies === null) {
        return null;
    } else if (first(movies).hasNickCage) {
        return cons(first(movies), filterByCage(rest(movies)));
    } else {
        return filterByCage(rest(movies));
    }
};

let filterByRating = (movies: List<Movie>): List<Movie> => {
    if (movies === null) {
        return null;
    } else if (first(movies).tomatometer >= 80) {
        return cons(first(movies), filterByRating(rest(movies)));
    } else {
        return filterByRating(rest(movies));
    }
};

/**
 * Given Lists a and b, return a List that is the union
 * of a and b. More formally: a U b
 */
let union = <T>(a: List<T>, b: List<T>): List<T> => {
    if (a === null) {
        return b;
    } else if (includes(b, first(a))) {
        return union(rest(a), b);
    } else {
        return cons(first(a), union(rest(a), b));
    }
};

/**
 * Do the elements in List `a` include `item`? 
 */
let includes = <T>(a: List<T>, item: T): boolean => {
    if (a === null) {
        return false;
    } else if (first(a) === item) {
        return true;
    } else {
        return includes(rest(a), item);
    }
};

main();