export type CartItem = Cookie & { quantity: number };

export type Order = {
  id: number | string;
  order: CartItem[];
};

export type UserData = {
  firstName: string;
  lastName: string;
  location: string;
  email: string;
  phoneNumber: string;
  date: string;
};

export type Cookie = {
  id: number;
  name: string;
  description: string;
  pic: string;
  price: number;
  calories: number;
  new: boolean;
  vegan: boolean;
  limited: boolean;
  discount: number;
  suggested: boolean;
};

export type Location = {
  id: number;
  street: string;
};

export type AppStore = {
  scrollToTop: () => void;
};

export type CartStore = {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
  addToCart: (item: CartItem) => void;
  cartQuantity: () => number;
  addQuantity: (itemId: number) => void;
  removeItem: (itemId: number) => void;
  totalPrice: () => number;
  order: CartItem[];
  setOrder: (order: CartItem[]) => void;
};

export type FormStore = {
  formData: UserData;
  setFormData: (formData: UserData) => void;
  submitted: boolean;
  setSubmitted: (submitted: boolean) => void;
  formVisible: boolean;
  setFormVisible: (formVisible: boolean) => void;
};

export type CookieCardProps = {
  cookie: CartItem;
};

export type PromoCardProps = {
  pic: string;
  name: string;
  description: string;
  onClick: () => void;
};

export type CartCardProps = {
  cartItem: CartItem;
};

export type SuggestedCardProps = {
  cookie: CartItem;
};

export type ReceiptCardProps = {
  order: CartItem[];
  orderId: number;
  total: number;
  formData: UserData;
};
