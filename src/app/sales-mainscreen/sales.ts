export class Sales{
 
    productRegistration:{};
    productQuantity: number;
    total: number;
    totalSellingPrice:number;
}

export class Products{
        id: number;
        maxStock : number;       
        productQuantity: number;
       
}

export class UserTransactions{
    transactionDate:Date;
    transactionAmount: number;
    transactionType:String;
    userLoginInfo:{};
}
