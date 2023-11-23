import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Product {

    _id?: string;

    @Prop({ unique: true, required: true })
    titulo: string;

    @Prop({ required: true })
    editorial: string;

    @Prop({ required: true })
    descripcion: string;

    @Prop({ required: true })
    genero: string;

    @Prop({ required: true })
    precio: number;

    @Prop({ default: 1 })
    cantidad: number;

    @Prop({ default: true })
    isActive: boolean;

    @Prop({ required: true })
    ISBN: string;

    @Prop({ required: true })
    portada: string;

}

export const UserSchema = SchemaFactory.createForClass( Product );
