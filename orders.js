const Orders = [
    {
    productName: 'Sony a7s3',
    productNumber: '36378',
    paymentStatus: 'Đã thanh toán',
    shipping: 'đang giao'
    },
    {
    productName: 'Canon R5',
    productNumber: '22345',
    paymentStatus: 'Chờ thanh toán',
    shipping: 'Kho'
    },
    {
    productName: 'Sony FE50F1.8',
    productNumber: '11234',
    paymentStatus: 'Đã thanh toán',
    shipping: 'đang giao'
    },
    {
    productName: 'Fujinon 33F1.4',
    productNumber: '66789',
    paymentStatus: 'Chờ thanh toán',
    shipping: 'Kho'
    },
    {
    productName: 'Fujifilm x100V',
    productNumber: '44566',
    paymentStatus: 'COD',
    shipping: 'đang giao'
    },
    {
    productName: 'Sony FX3',
    productNumber: '75472',
    paymentStatus: 'Đã thanh toán',
    shipping: 'đang giao'
    },
    {
    productName: 'Nikon D810',
    productNumber: '11123',
    paymentStatus: 'COD',
    shipping: 'đang giao'
    },
    {
    productName: 'Olyumpus OMD EM1 mk3',
    productNumber: '24435',
    paymentStatus: 'Đã thanh toán',
    shipping: 'đang giao'
    },
    
]


// -------Json, fill orders trong bản Dashboard
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping ===
                        'Declined' ? 'danger' : order.
                        shipping === 'pending' ? 'warning' : 
                        'primary'}">${order.shipping}</td>
                        <td class="primary">Chi tiết</td>
                    `;
    tr.innerHTML = trContent;       
    document.querySelector('table tbody').appendChild(tr);         
})

