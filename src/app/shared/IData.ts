
import { INodeCouple } from './INodeCouple'

export interface IData {
    status : number ;
    defs : Array<string>;
    ramifications : Array<string>;
    relations_types : Array<string>;
    relation_node_couple: Array<INodeCouple> ;
}