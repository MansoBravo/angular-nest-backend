import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { DeleteProductDto } from './dto/delete-product.dto';

@Injectable()
export class ProductsService {

  constructor(
    @InjectModel( Product.name ) 
    private productModel: Model<Product>,

    private jwtService: JwtService,
   ) {}

  // create(createProductDto: CreateProductDto) {
  //   return 'This action adds a new product';
  // }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    try{
      const newProduct = new this.productModel( createProductDto );
      return await newProduct.save();
     } catch (error) {
        if( error.code === 11000 ) {
          throw new BadRequestException(`${ createProductDto.titulo } already exists!`)
        }
        throw new InternalServerErrorException('Something terribe happen!!!');
      }
  }

  findAll(): Promise<Product[]>{
    return this.productModel.find();
  }

 async findOne(id: string): Promise<Product> { 
    try{
      const product =  this.productModel.findOne({ _id:  id });
      return await product;
    } catch (error) {
      throw new InternalServerErrorException('No existe');
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    try{
      const product =  this.productModel
                                        .findByIdAndUpdate(id, { $set: updateProductDto }, { new: true })
                                        .exec();
      return await product; 
    }catch (error) {
      throw new InternalServerErrorException('No existe');
    }
  }

  async remove(id: string, deleteProductDto: DeleteProductDto) {
    try{
      const product =  this.productModel
                                        .findByIdAndUpdate(id, { $set: deleteProductDto }, { new: true })
                                        .exec();
      return await product; 
    }catch (error) {
      throw new InternalServerErrorException('No existe');
    }
    return `This action removes a #${id} product`;
  }
}
