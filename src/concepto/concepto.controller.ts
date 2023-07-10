import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ParseUUIDPipe } from '@nestjs/common';
import { ConceptoService } from './concepto.service';
import { CreateConceptoDto } from './dto/create-concepto.dto';
import { UpdateConceptoDto } from './dto/update-concepto.dto';
import { Concepto } from './entities/concepto.entity';

@Controller('concepto')
export class ConceptoController {
  constructor(private readonly conceptoService: ConceptoService) {}

  @Post()
  create(@Body() createConceptodto: CreateConceptoDto) {
    return this.conceptoService.create(createConceptodto);
  }

  @Get()
  findAll()  {
    return this.conceptoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.conceptoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string,  @Body() updateConceptoDto: UpdateConceptoDto) {
    return this.conceptoService.update(id, updateConceptoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.conceptoService.remove(id);
  }
}