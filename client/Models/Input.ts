export interface UserInputModel{
    lable:string,
    onChange:(value:string)=>void
}

export interface SwitchModel{
    lable:string,
    value?:boolean,
    onPressed?:()=>void

}