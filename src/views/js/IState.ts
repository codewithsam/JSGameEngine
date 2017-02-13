interface IState{
    tick(_td:any): void;
    render(g:any): void;
}
export = IState;