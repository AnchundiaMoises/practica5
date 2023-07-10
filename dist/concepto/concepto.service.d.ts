import { CreateConceptoDto } from './dto/create-concepto.dto';
import { UpdateConceptoDto } from './dto/update-concepto.dto';
import { Concepto } from './entities/concepto.entity';
import { Repository } from 'typeorm';
export declare class ConceptoService {
    private readonly conceptoRepository;
    private readonly logger;
    constructor(conceptoRepository: Repository<Concepto>);
    create(createConceptoDto: CreateConceptoDto): Promise<Concepto>;
    findAll(): Promise<Concepto[]>;
    findOne(id: string): Promise<Concepto>;
    remove(id: string): Promise<void>;
    update(id: string, updateConceptoDto: UpdateConceptoDto): Promise<Concepto>;
}
