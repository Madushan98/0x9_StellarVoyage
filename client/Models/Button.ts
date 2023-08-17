export interface ButtonModel{
    text:string,
    onPress: ()=>void;
}

export interface RoundButtonModel extends ButtonModel{
    type?: RoundButtonType
}

export interface IconButtonModel extends ButtonModel{
    icon:any
}

export enum RoundButtonType{
    Active,
    Deactive
}