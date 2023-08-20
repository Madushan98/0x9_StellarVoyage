export interface UserInputModel{
    
    onChange:(value:string)=>void
}

export interface UserInputLableModel extends UserInputModel{
    lable:string,
}

export interface SearchInputLableModel extends UserInputLableModel{
    onPress:()=>void
}

export interface SwitchModel{
    lable:string,
    value?:boolean,
    onPressed?:()=>void

}