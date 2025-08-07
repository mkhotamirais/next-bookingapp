import { Metadata } from "next";
import CheckoutDetail from "./CheckoutDetail";

export const metadata: Metadata = {
  title: "Checkout",
};

export default async function CheckoutId({ params }: { params: Promise<{ id: string }> }) {
  const reservationId = (await params).id;
  return (
    <section className="py-8">
      <div className="container">
        <h1 className="h1">Reservation Summary</h1>
        <CheckoutDetail reservationId={reservationId} />
      </div>
    </section>
  );
}
