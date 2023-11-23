import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    MongooseModule.forRoot( process.env.MONGO_URI,{
      dbName: process.env.MONGO_DB_NAME,
    } ),

    AuthModule,

    ProductsModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {

}
