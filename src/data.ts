type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Sushi cơm cuộn",
    desc: "Sushi cuộn rong biển/cuộn bơ",
    img: "/temporary/p1.png",
    price: 30000,
    options: [
      {
        title: "Nhỏ",
        additionalPrice: 0,
      },
      {
        title: "Vừa",
        additionalPrice: 5000,
      },
      {
        title: "Lớn",
        additionalPrice: 10000,
      },
    ],
  },
  {
    id: 2,
    title: "Gà rán",
    desc: "Gà rán chiên xù giòn tan",
    img: "/temporary/p2.png",
    price: 39000,
    options: [
      {
        title: "Cánh gà",
        additionalPrice: 0,
      },
      {
        title: "Ức gà",
        additionalPrice: 5000,
      },
      {
        title: "Tổng hợp",
        additionalPrice: 5000,
      },
    ],
  },
  {
    id: 3,
    title: "Bánh bông lan",
    desc: "Bánh bông lan với nhiều hương vị",
    img: "/temporary/p3.png",
    price: 25000,
    options: [
      {
        title: "Sữa",
        additionalPrice: 0,
      },
      {
        title: "Trái cây",
        additionalPrice: 7000,
      },
      {
        title: "Bơ + ruốc",
        additionalPrice: 10000,
      },
    ],
  },
  {
    id: 4,
    title: "Trà sữa trân châu",
    desc: "Trà sữa trân châu trắng/matcha/đường đen",
    img: "/temporary/p4.png",
    price: 26000,
    options: [
      {
        title: "Trắng",
        additionalPrice: 0,
      },
      {
        title: "Matcha",
        additionalPrice: 10000,
      },
      {
        title: "Đường đen",
        additionalPrice: 6000,
      },
    ],
  },
  {
    id: 5,
    title: "Trà sữa kem",
    desc: "Trà sữa kem và các hương vị trái cây",
    img: "/temporary/p5.png",
    price: 30000,
    options: [
      {
        title: "Dâu",
        additionalPrice: 0,
      },
      {
        title: "Táo",
        additionalPrice: 0,
      },
      {
        title: "Nho",
        additionalPrice: 0,
      },
    ],
  },
  {
    id: 6,
    title: "Bánh mì",
    desc: "Bánh mì đa dạng chủng loại",
    img: "/temporary/p6.png",
    price: 20000,
    options: [
      {
        title: "Pate",
        additionalPrice: 0,
      },
      {
        title: "Trứng + xúc xích",
        additionalPrice: 5000,
      },
      {
        title: "Trứng + bò khô",
        additionalPrice: 7000,
      },
    ],
  },
  {
    id: 7,
    title: "Cơm hộp",
    desc: "Cơm hộp với lượng thức ăn đủ cho bữa trưa/tối",
    img: "/temporary/p7.png",
    price: 35000,
    options: [
      {
        title: "Cơm trứng+thịt lợn",
        additionalPrice: 0,
      },
      {
        title: "Cơm gà rán",
        additionalPrice: 5000,
      },
      {
        title: "Thập cẩm",
        additionalPrice: 10000,
      },
    ],
  },
  {
    id: 8,
    title: "Phở",
    desc: "Phở đóng hộp kèm nước dùng",
    img: "/temporary/p8.png",
    price: 30000,
    options: [
      {
        title: "Thịt băm",
        additionalPrice: 0,
      },
      {
        title: "Bò",
        additionalPrice: 5000,
      },
      {
        title: "Gà luộc",
        additionalPrice: 0,
      },
    ],
  },
  {
    id: 9,
    title: "Bún nem rán",
    desc: "Bún nem rán kèm rau sống và nước chấm",
    img: "/temporary/p9.png",
    price: 29000,
    options: [
      {
        title: "Nhỏ",
        additionalPrice: 0,
      },
      {
        title: "Vừa",
        additionalPrice: 5000,
      },
      {
        title: "Lớn",
        additionalPrice: 10000,
      },
    ],
  },
];

export const singleProduct: Product = {
  id: 1,
  title: "Trà sữa",
  desc: "Trà sữa trân châu đường đen",
  img: "/temporary/p5.png",
  price: 35000,
  options: [
    {
      title: "Nhỏ",
      additionalPrice: 0,
    },
    {
      title: "Vừa",
      additionalPrice: 7000,
    },
    {
      title: "Lớn",
      additionalPrice: 12000,
    },
  ],
};

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "drinks",
    title: "Đồ uống",
    desc: "Trà sữa, nước ngọt có ga, cà phê, cái gì cũng có.",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "foods",
    title: "Thực phẩm",
    desc: "Đủ các món ăn dùng cho bữa ăn hàng ngày",
    img: "/temporary/m2.png",
    color: "black",
  },
  {
    id: 3,
    slug: "snacks",
    title: "Đồ ăn vặt",
    desc: "Từ bánh mì cho đến các món chè",
    img: "/temporary/m3.png",
    color: "white",
  },
];
