import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: [],
})
export class ChatModule {
  constructor(){
    console.log('ChatModule constructor called');
  }
}
