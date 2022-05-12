import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Resolver('Product')
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Product)
  async create(
    @Args('data') { name, price, stock }: CreateProductInput,
  ): Promise<Product> {
    return this.productService.create({ name, price, stock });
  }

  @Query(() => Product)
  async findById(@Args('id') id: string): Promise<Product> {
    return this.productService.findById(id);
  }

  @Query(() => [Product])
  async findAll(): Promise<Product[]> {
    return await this.productService.findAll();
  }

  @Mutation(() => Product)
  async update(
    @Args('id') id: string,
    @Args('data') data: UpdateProductInput,
  ): Promise<Product> {
    return this.productService.update({ id, ...data });
  }

  @Mutation(() => Boolean)
  async delete(@Args('id') id: string): Promise<true> {
    await this.productService.delete(id);
    return true;
  }
}
