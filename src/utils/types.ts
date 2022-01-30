export interface Product {
    _id:            string;
    image:          string;
    title:          string;
    description:    string;
    availableSizes: string[];
    price:          number;
    __v:            number;
}

export interface Order {
    _id:       string;
    email:     string;
    name:      string;
    address:   string;
    total:     number;
    cartItems: CartItem[];
    createdAt: Date;
    updatedAt: Date;
    __v:       number;
}

export interface CreateOrder {
    name: string;
    email: string;
    address: string;
    cartItems: CartItem[];
    total: number;
}

export interface CartItem {
    _id:   string;
    title: string;
    price: number;
    count?: number;
}