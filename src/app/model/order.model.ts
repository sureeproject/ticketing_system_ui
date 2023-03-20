import { User } from "./user.model";
import { Ticket } from "./ticket.model";
export class Order{

    public id: number;
    public userId: number;
    public ticketId: number;
    public user: User;
    public ticket : Ticket;

    constructor(id?: number, userId?: number, ticketId?: number,user?: User, ticket?: Ticket){
          this.id = id || 0;
          this.userId = userId || 0;
          this.ticketId = ticketId || 0;
          this.user = user || new User();
          this.ticket = ticket || new Ticket();
    }
  }
  