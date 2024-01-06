import { CreateCatDto } from 'src/cats/dto/create-cat.dto';
import { CreateListingDto } from './create-listing.dto';

export class CreateItemDto {
  name: string;
  public: boolean;
  listing: CreateListingDto;
  tags: CreateCatDto[];
}
