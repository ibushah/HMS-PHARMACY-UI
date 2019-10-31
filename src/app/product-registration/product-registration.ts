export class productRegistration{
    productName:String;
    formula:String;
    packing:number;
    boxRate:number;
    minStock:number;
    maxStock:number;
    state:String="activeProduct"
    sellingPrice:number=0;
    companyProd:{};
    drugFormation:{};
    unitPrice:number;
    qrCode="data:image/png;base64,";
}