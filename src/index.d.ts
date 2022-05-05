declare class Obj {
    names: string;
    constructor();
    print(): string;
}
interface Window {
    obj: Obj;
}
