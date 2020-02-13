export interface Ticket{
    id: number;
    ticketNum: number;
    name: string;
    phone: string;
    emai: string;
    product: string;
    department: string;
    status: string;
    comment: string;
    closeTicketComment: string;
    createdBy: string;
    closedBy?: string;
    createdOn: string;
    updatedOn: string;
}