export interface ButtonModel{
    text:string,
    onPress: ()=>void;
}

export interface RoundButtonModel extends ButtonModel{
    type?: RoundButtonType
}

export enum RoundButtonType{
    Active,
    Deactive
}