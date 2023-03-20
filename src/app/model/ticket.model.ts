
export class Ticket{

    public id: number;
    public name: string;
    public price: number;
    public status : string;

  
  
    constructor(id?: number, name?: string, price?: number,  status?: string){
          this.id = id || 0;
          this.name = name || '';
          this.price = price || 0;
          this.status = status || 'AVALIABLE';
    }
  
  }
  