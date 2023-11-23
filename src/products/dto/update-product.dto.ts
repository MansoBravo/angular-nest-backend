import { Type } from 'class-transformer';
import { IsInt, IsString } from 'class-validator';

export class UpdateProductDto {
    @IsString()
    _id: string;

    @IsString()
    titulo: string;

    @IsString()
    editorial: string;

    @IsString()
    descripcion: string;

    @IsString()
    genero: string;

    @IsString()
    ISBN: string;

    @IsString()
    portada: string;

    @Type(() => Number)
    @IsInt()  
    precio: number;

    @Type(() => Number)
    @IsInt()
    cantidad: number;
}
