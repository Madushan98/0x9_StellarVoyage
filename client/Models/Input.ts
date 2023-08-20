export interface UserInputModel{
    onChange:(value:string)=>void
}

export interface UserInputLableModel extends UserInputModel{
    lable:string,
    onChange:(value:string)=>void
}

export interface UserSearchlableModel extends UserInputModel{
    lable:string,
    onChange:(value:string)=>void
    onPress:(value:string)=>void
}

export interface SwitchModel{
    lable:string,
    value?:boolean,
    onPressed?:()=>void

}