const getCustomerProducts = (req) => {
    const customerProducts = {
        '1254': {
            'clientId': 55885588,
            'Product_Type': 'CC',
            'CardNumber': '4545123478961254',
            'Status': 'Active'
        },
        '5865': {
            'clientId': 55885588,
            'Product_Type': 'DC',
            'CardNumber': '4545787878965865',
            'Status': 'Active'
        },
        '7878': {
            'clientId': 55885588,
            'Product_Type': 'SA',
            'AccountNo': '641078967878',
            'Status': 'Active'
        },
        '9875': {
            'clientId': 55885588,
            'Product_Type': 'SA',
            'AccountNo': '641078969875',
            'Status': 'Closed'
        },
        '7487': {
            'clientId': 55885588,
            'Product_Type': 'SA',
            'AccountNo': '641078967487',
            'Status': 'Dormant'
        }
         
    };
         
    return customerProducts;
}
const getCustomerCards = (req) => {
    const customerCards =[
        'XXXXXXXXXXXX1254', 
        'XXXXXXXXXXXX5865', 
        'XXXXXXXXXXXX5889', 
        'XXXXXXXXXXXX7878', 
        'XXXXXXXXXXXX9875', 
        'XXXXXXXXXXXX7487' 
        ];
    return customerCards;
}
 
module.exports = {
    getCustomerProducts,getCustomerCards
};