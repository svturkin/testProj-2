import { Controller, Get, Param } from "@nestjs/common";
import { AppService } from './app.service';
import { ApiTags } from "@nestjs/swagger";
import { ResponseDto } from "./dto/response.dto";

@Controller()
@ApiTags('nodejs')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('nodejs/:branchName')
  getNodejsCommitsInfo(@Param('branchName') branchName: string): Promise<ResponseDto[]> {
    return this.appService.getNodejsCommitsInfo(branchName)
  }
}
