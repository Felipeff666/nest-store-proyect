import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newEndpoint() {
    return 'yo soy nuevo';
  }

  //parametros sin tipado
  @Get('products/:productId')
  getProduct(@Param() params: any) {
    return `product ${params.productId}`;
  }

  //parametros con tipado
  @Get('products_tipado/:productId')
  getProductType(@Param('productId') productId: number) {
    return `product type ${productId}`;
  }

  //peticion con 2 parametros
  @Get('categories/:id/:products/:productId')
  getCategory(@Param('id') id: number, @Param('productId') productId: number) {
    return `product con id: ${productId} y category id: ${id}`;
  }
}
