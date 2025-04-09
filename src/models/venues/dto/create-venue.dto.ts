import { IsNotEmpty, IsString } from 'class-validator';


export class CreateVenueDto {
    @IsString()
    @IsNotEmpty()
    name: string;  

    location: string;
}
