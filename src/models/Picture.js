export class Picture {

  constructor(data){
    this.description = data.explanation
    this.image = data.url
    this.title = data.title 
  }
}