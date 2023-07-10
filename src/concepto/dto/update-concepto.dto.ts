import { PartialType } from '@nestjs/mapped-types';
import { CreateConceptoDto } from './create-concepto.dto';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateConceptoDto extends PartialType(CreateConceptoDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}