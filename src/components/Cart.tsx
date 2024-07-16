interface Props {
  openCart: boolean;
  onClose?: () => void;
}

export function Cart({ openCart, onClose }: Props) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        openCart ? "" : "hidden"
      }`}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-transparent"></div>
      <section
        id="cart"
        className={`absolute top-[60px] z-10 h-screen w-[50%] lg:w-[40%] bg-ghost overflow-y-scroll transition-transform duration-300 ease-in-out ${
          openCart ? "translate-x-0" : "translate-x-full"
        } right-0 pt-4`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-center font-semibold">Your cart is empty</h3>
      </section>
    </div>
  );
}
