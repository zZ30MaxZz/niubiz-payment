interface Window {
    highlightSyntax: () => void
    externalObject: {
        enhanceImages: () => void,
        measureTimeOnPage: () => void
    }
}

// interface Window {
//     VisanetCheckout: () => {
//         configure: () => {
//             action: 'paginaRespuesta',
//             sessiontoken: '67cf73735f83590eabf1382ff49e5e08b2619763 26c6897cb764fd160a15a8ca',
//             channel: 'paycard',
//             merchantid: '341198210',
//             purchasenumber: '2020103102',
//             amount: '10.5',
//             cardholdername: 'Juan',
//             cardholderlastname: 'Perez',
//             cardholderemail: 'jperez@gmail.com',
//             usertoken: 'IZIWEB01',
//             expirationminutes: '20',
//             timeouturl: 'https://www.micomercio.com/timeout.html',
//             merchantlogo: 'https://www.starbucks.pe/Multimedia/logo/logo.png',
//             formbuttoncolor: '#D80000',
//             formbuttontext: 'Registrar',
//             showamount: 'FALSE',
//             complete: (params: any) => void
//           },
//         open: () => void
//     }
// }