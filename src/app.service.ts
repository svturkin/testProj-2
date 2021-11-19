import { Injectable } from '@nestjs/common';
import got from 'got';
import { ResponseDto } from "./dto/response.dto";

@Injectable()
export class AppService {
  async getNodejsCommitsInfo(branchName: string): Promise<ResponseDto> {
      try {
        const response = await got(`https://api.github.com/repos/nodejs/node/commits?per_page=25&sha=${branchName}`);
        return JSON.parse(response.body).map(el => {
          return {
            hash: el.sha,
            message: el.commit.message
          }
        });
      } catch (error) {
        console.log(error.response.body);
      }
  }
}
