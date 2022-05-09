declare class Obj {
    names: string;
    constructor();
    print(): void;
}
interface Window {
    obj: Obj;
}
