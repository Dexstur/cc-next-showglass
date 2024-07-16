import { FiShoppingCart } from "react-icons/fi";

interface Props {
  toggleCart?: () => void;
}

export function UserOptions({ toggleCart = () => {} }: Props) {
  return (
    <div className="hidden lg:flex w-[33%] justify-end">
      <span
        className="cursor-pointer flex justify-center items-center p-2"
        onClick={toggleCart}
      >
        <FiShoppingCart />
      </span>
    </div>
  );
}
