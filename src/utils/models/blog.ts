import {IBase } from './base';

export interface IBlog extends IBase{
    title:string;
    image:string;
    description:string
}

export class BlogModel {
    private id: number;
    private title:string;
    private image:string;
    private description: string;

    constructor(
        id: number,
        title:string,
        image:string,
        description:string
    ){
        this.id = id?? -1;
        this.title = title?? '';
        this.image = image?? '';
        this.description = description?? ''; 
    }
}