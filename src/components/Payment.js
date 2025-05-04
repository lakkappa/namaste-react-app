
// const Payment = () => {
//     return (
//         <div className="bg-gray-100 mx-120 my-20 p-20 w-250 text-2xl">
//             Welcome to the Payment Page, Thanks for choosing the Lucky Food Application.
//         </div>
//     )

// }
// export default Payment;
import React from 'react';

const Payment = () => {
    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const handlePayment = async () => {
        const res = await loadRazorpayScript();

        if (!res) {
            alert('Failed to load Razorpay SDK');
            return;
        }

        // This is just for demo. In production, fetch from your backend.
        const order = await fetch('http://localhost:5000/create-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: 50000 }) // ₹500 in paisa
        }).then((t) => t.json());

        const options = {
            key: 'YOUR_RAZORPAY_KEY_ID',
            amount: order.amount,
            currency: 'INR',
            name: 'Your Company',
            description: 'UPI Payment',
            order_id: order.id,
            handler: function (response) {
                alert(`Payment successful! ID: ${response.razorpay_payment_id}`);
                // Verify the payment with backend here
            },
            prefill: {
                name: 'Test User',
                email: 'test@example.com',
                contact: '9000000000',
            },
            theme: {
                color: '#3399cc',
            },
            method: {
                upi: true,
                card: false,
                netbanking: false,
                wallet: false,
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Pay via UPI</h2>
            <button onClick={handlePayment} style={{ padding: '10px 20px' }}>
                Pay ₹500
            </button>
        </div>
    );
};

export default Payment;
