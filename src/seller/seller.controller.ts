import {
  Get,
  Post,
  Delete,
  Param,
  Controller,
  Body,
  ParseIntPipe,
  Put,
  UseGuards,
} from "@nestjs/common";

import {
  ApiBadRequestResponse,
  ApiCookieAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";
import { SellerService } from "./seller.service";
import { Seller } from "@prisma/client";
import { CreateSellerDto } from "./dto/create-seller.dto";
import { FilterSellerDto } from "./dto/filter-seller.dto";
import { UpdateSellerDto } from "./dto/update-seller.dto";
import { AuthGuard } from "../auth/auth.guard";

@ApiTags("seller")
@Controller("seller")
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  @ApiOperation({
    summary: "Get seller by it's id",
  })
  @ApiNotFoundResponse({ description: "Not found" })
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Get(":id")
  async getSeller(@Param("id", ParseIntPipe) id: number): Promise<Seller> {
    return await this.sellerService.getSellser({ id });
  }

  @ApiOperation({
    summary: "Get all sellers",
  })
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Get()
  async getAllSellers(): Promise<Seller[]> {
    return await this.sellerService.getAllSellers();
  }

  @ApiOperation({
    summary: "Update Seller",
  })
  @ApiCookieAuth()
  @UseGuards(AuthGuard)
  @ApiNotFoundResponse({ description: "Not found" })
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Put(":id")
  async updateSeller(
    @Param("id", ParseIntPipe) id: number,
    @Body() seller: UpdateSellerDto
  ): Promise<Seller> {
    return await this.sellerService.updateSellerr({ id }, seller);
  }

  @ApiOperation({
    summary: "Add seller",
  })
  @ApiCreatedResponse({
    description: "Seller added.",
  })
  @ApiCookieAuth()
  @UseGuards(AuthGuard)
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Post()
  async addSeller(@Body() Seller: CreateSellerDto): Promise<Seller> {
    return await this.sellerService.addSellser(Seller);
  }

  @ApiOperation({
    summary: "Delete seller by id",
  })
  @ApiCookieAuth()
  @UseGuards(AuthGuard)
  @ApiNotFoundResponse({ description: "Not found" })
  @ApiForbiddenResponse({ description: "Forbidden." })
  @ApiBadRequestResponse({ description: "Invalid request." })
  @ApiOkResponse({ description: "Successful request." })
  @Delete(":id")
  async deleteSeller(@Param("id", ParseIntPipe) id: number): Promise<Seller> {
    return await this.sellerService.deleteSeller({ id });
  }
}
