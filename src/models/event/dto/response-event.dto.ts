export class ResponseEventDto {
  public title: string;
  public description: string;
  public url: string;
  public img: string;
  public date: Date;
  public location: string;
  public ticketUrl: string;
  public isFeatured: boolean;
  public isAvailable: boolean;

  constructor(
    title: string,
    description: string,
    url: string,
    img: string,
    date: Date,
    location: string,
    ticketUrl: string,
    isFeatured: boolean,
    isAvailable: boolean,
  ) {
    this.title = title;
    this.description = description;
    this.url = url;
    this.img = img;
    this.date = date;
    this.location = location;
    this.ticketUrl = ticketUrl;
    this.isFeatured = isFeatured;
    this.isAvailable = isAvailable;
  }
}
