import { ApiProperty } from "@nestjs/swagger";

export class ResponseDto {
  @ApiProperty()
  hash: string;

  @ApiProperty()
  message: string;
}
