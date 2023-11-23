import { Type } from 'class-transformer';
import { IsBoolean, IsInt, IsString } from 'class-validator';

export class DeleteProductDto {
    @IsString()
    _id: string;

    @IsBoolean()
    isActive: boolean = false;
}
