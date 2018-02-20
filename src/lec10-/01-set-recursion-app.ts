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

    let a = listify(1, 2, 2, 3);
    let b = listify(2, 3, 4);
    print(union(a, b));

    let movies: List<Movie> = await csvToList("Movies Data", Movie);
    let cageMovies: List<Movie> = filterByCage(movies);
    let sandlerMovies: List<Movie> = filterBySandler(movies);
    let all = union(cageMovies, sandlerMovies);
    print(filterPassing(all));
    
};

let filterBySandler = (movies: List<Movie>): List<Movie> => {
    if (movies === null) {
        return null;
    } else {
        if (first(movies).hasAdamSandler) {
            return cons(first(movies), filterBySandler(rest(movies)));
        } else {
            return filterBySandler(rest(movies));
        }
    }
};

let filterByCage = (movies: List<Movie>): List<Movie> => {
    if (movies === null) {
        return null;
    } else {
        if (first(movies).hasNickCage) {
            return cons(first(movies), filterByCage(rest(movies)));
        } else {
            return filterByCage(rest(movies));
        }
    }
};

let filterPassing = (movies: List<Movie>): List<Movie> => {
    if (movies === null) {
        return null;
    } else {
        let movie: Movie = first(movies);
        if (movie.tomatometer >= 60) {
            return cons(movie, filterPassing(rest(movies)));
        } else {
            return filterPassing(rest(movies));
        }
    }
};

let includes = <T>(a: List<T>, item: T): boolean => {
    if (a === null) {
        return false;
    } else {
        if (first(a) === item) {
            return true;
        } else {
            return includes(rest(a), item);
        }
    }
};

let union = <T>(a: List<T>, b: List<T>): List<T> => {
    if (a === null) {
        return b;
    } else if (includes(b, first(a))) {
        return union(rest(a), b);
    } else {
        return cons(first(a), union(rest(a), b));
    }
};

main();