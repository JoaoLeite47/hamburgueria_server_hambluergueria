import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Jaozin',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    example: 'stalkerjj@outlook.com',
  })
  email: string;
}
