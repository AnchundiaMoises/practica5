import { ConceptoService } from './concepto.service';
import { CreateConceptoDto } from './dto/create-concepto.dto';
import { UpdateConceptoDto } from './dto/update-concepto.dto';
import { Concepto } from './entities/concepto.entity';
export declare class ConceptoController {
    private readonly conceptoService;
    constructor(conceptoService: ConceptoService);
    create(createConceptodto: CreateConceptoDto): Promise<Concepto>;
    findAll(): Promise<Concepto[]>;
    findOne(id: string): Promise<Concepto>;
    update(id: string, updateConceptoDto: UpdateConceptoDto): Promise<Concepto>;
    remove(id: string): Promise<void>;
}
