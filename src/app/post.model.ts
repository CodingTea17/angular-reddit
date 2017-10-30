export class Post {
  public vote: number = 0;
  public comment: string[] = [];
  constructor (public title: string, public author: string, public subReddit: string, public url: string, public body: string, public id: number){}
}
