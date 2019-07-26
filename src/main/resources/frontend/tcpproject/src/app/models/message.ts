export class Message {
  id: number;
  private userId: number;
  private channelId: number;
  body: string;
  fromUsername: string;


  constructor() {

    this.userId = 2;

    this.channelId = 2;
  }


  updateChannelId(value: number) {
    this.channelId = value;
  }

  updateUserId(value: number){
    this.userId = value;
  }



}
