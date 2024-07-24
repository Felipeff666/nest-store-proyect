import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const a: string = '!Hello Epilefff666!';
    return a;
  }
}
