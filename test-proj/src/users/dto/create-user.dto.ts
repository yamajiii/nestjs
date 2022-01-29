import { IsString, MinLength, MaxLength } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  readonly name: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  readonly password: string;
}
