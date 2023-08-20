export interface ButtonModel{
    text?:string,
    onPress?: ()=>void;
    widthPercentage?:number,
}

export interface RoundButtonModel extends ButtonModel{
    type?: RoundButtonType
}

export interface ImageButtonModel extends ButtonModel{
    icon:any
}

export interface IconButtonModel extends ButtonModel{
    icon:any
}

export enum RoundButtonType{
    Active,
    Deactive
}