import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail(
    {},
    {
      message: 'Email must be a valid email address',
    },
  )
  email: string;

  @IsNotEmpty()
  @MinLength(6, {
    message: 'Password must be at least 6 characters long',
  })
  password: string;

  @IsNotEmpty()
  name: string;

  @IsOptional()
  address: string;

  @IsOptional()
  phone: string;

  @IsOptional()
  age: string;
}
