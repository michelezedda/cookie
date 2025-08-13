import type { ReceiptCardProps } from "../types/types";

const ReceiptCard = ({ order, orderId, total, formData }: ReceiptCardProps) => {
  return (
    <>
      <div id="receipt" className="mt-10">
        <div className="flex justify-center items-center">
          <img
            src="/media/bw-logo.webp"
            alt="cookie logo black and white"
            className="w-30"
          />
        </div>
        <h2 className="text-center text-lg mt-10">Thanks for your order!</h2>
        <h3 className="mb-1 mt-6 border-b font-medium">
          ORDER #<span className="font-bold">{orderId}</span>
        </h3>
        {order.map((orderItem) => (
          <div className="flex justify-between" key={orderItem.id}>
            <p>
              <span className="mr-1">{orderItem.quantity}x</span>
              {orderItem.name}
            </p>
            <p>$ {(orderItem.price * orderItem.quantity).toFixed(2)}</p>
          </div>
        ))}
        <div className="flex flex-col">
          <h3 className="mb-1 border-b font-medium mt-6">TOTAL AMOUNT</h3>
          <span className="text-end">$ {total.toFixed(2)}</span>
        </div>
        <h3 className="mb-1 border-b font-medium mt-6">CUSTOMER INFORMATION</h3>
        <p>
          Name:{" "}
          <span className="font-semibold">
            {formData.firstName} {formData.lastName}
          </span>
        </p>
        <p>
          Phone number:{" "}
          <span className="font-semibold">{formData.phoneNumber}</span>
        </p>
        <p>
          E-mail: <span className="font-semibold">{formData.email}</span>
        </p>
        <h3 className="mb-1 border-b font-medium mt-6">PICK UP DETAILS</h3>
        <p>
          Your order will be ready to pick up on{" "}
          <span className="font-semibold">{formData.date}</span> from{" "}
          <span className="font-semibold">10 AM</span> to{" "}
          <span className="font-semibold">7 PM</span> at{" "}
          <span className="font-semibold">Cookie {formData.location}</span>
        </p>
        <h3 className="mb-1 border-b font-medium mt-6">PAYMENT METHOD</h3>
        <p>Payment is made directly in the store</p>
        <p className="text-end mt-10">
          {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
        </p>
      </div>
    </>
  );
};

export default ReceiptCard;
