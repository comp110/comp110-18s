import { print } from "introcs";
import { List, cons, first, rest } from "introcs/list";

// TODO: Implement the includes Function
let includes = (list: List<string>, search: string): boolean => {
    return false;
};

export let main = async () => {
    
    let names: List<string>;
    names = cons("Carol", cons("Kevin Bacon", cons("Roy", null)));
    print(includes(names, "Kevin Bacon"));

};

main();