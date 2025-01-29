


export const registerFormControls =[
    {
        name: "userName",
        label:"User Name",
        placeholder:"Enter your user Name",
        ComponentType:"input",
        type:"text"
    },
    {
        name: "email",
        label:"Email",
        placeholder:"Enter your user Email",
        ComponentType:"input",
        type:"email"
    },
    {
        name: "password",
        label:"Password",
        placeholder:"Enter your user Password",
        ComponentType:"input",
        type:"password"
    }
]

export const loginFormControls =[
 
    {
        name: "email",
        label:"Email",
        placeholder:"Enter your user Email",
        ComponentType:"input",
        type:"email"
    },
    {
        name: "password",
        label:"Password",
        placeholder:"Enter your user Password",
        ComponentType:"input",
        type:"password"
    }
]
export const addProductFormElements = [
    {
      label: "Title",
      name: "title",
      componentType: "input",
      type: "text",
      placeholder: "Enter product title",
    },
    {
      label: "Description",
      name: "description",
      componentType: "textarea",
      placeholder: "Enter product description",
    },
    {
      label: "Category",
      name: "category",
      componentType: "select",
      options: [
        { id: "men", label: "Man" },
        { id: "women", label: "Women" },
        { id: "kids", label: "Kids" },
        { id: "accessories", label: "Accessories" },
        { id: "footwear", label: "Footwear" },
      ],
    },
    {
      label: "Brand",
      name: "brand",
      componentType: "select",
      options: [
        { id: "nike", label: "Nike" },
        { id: "adidas", label: "Adidas" },
        { id: "puma", label: "Puma" },
        { id: "levi", label: "Levi's" },
        { id: "zara", label: "Zara" },
        { id: "h&m", label: "H&M" },
      ],
    },
    {
      label: "Price",
      name: "price",
      componentType: "input",
      type: "number",
      placeholder: "Enter product price",
    },
    {
      label: "Sale Price",
      name: "salePrice",
      componentType: "input",
      type: "number",
      placeholder: "Enter sale price (optional)",
    },
    {
      label: "Total Stock",
      name: "totalStock",
      componentType: "input",
      type: "number",
      placeholder: "Enter total stock",
    },
  ];
  export const shoppingViewHeaderMenuItems=[
    {
      id:'home',
      label:'Home',
      path : '/shopping/home'
    },{
      id:'men',
      label:'Man',
      path : '/shopping/productlist'
    },{
      id:'women',
      label:'Women',
      path : '/shopping/productlist'
    },{
      id:'kids',
      label:'Kids',
      path : '/shopping/productlist'
    },{
      id:'accessories',
      label:'Accessories',
      path : '/shopping/productlist'
    },{
      id:'footware ',
      label:'Footwares',
      path : '/shopping/productlist'
    }
  ];

  export const filterOptions = {
    category:[
      {id:"men" ,Label:"Man"},
      {id:"women" ,Label:"Woman"},
      {id:"kids" ,Label:"Kids"},
      {id:"accessories" ,Label:"Accessories"},
      {id:"footwear" ,Label:"Footwear"},
    ],
    brand:[
      {id:"nike" ,Label:"Nike"},
      {id:"adidas" ,Label:"Adidas"},
      {id:"puma" ,Label:"Puma"},
      {id:"levi" ,Label:"Levi,s"},
      {id:"zara" ,Label:"Zara"},
      {id:"h&m" ,Label:"H&M"},
    ]
  };

  export const sortOptions=[
    {id:"price-lowtohigh" ,label:"price: Low to High"},
    {id:"price-hightolow" ,label:"price: High to Low"},
    {id:"title-atoz" ,label:"Title: A to Z"},
    {id:"title-ztoa" ,label:"Title: Z to A"},
    
  ];


  export const categoryOptionsMap = {
    men: "Man",
    women: "Women",
    kids: "Kids",
    accessories: "Accessories",
    footwear: "Footwear",
  };

  export const brandOPtionsMap = {
    nike:"Nike",
    adidas:"Adidas",
      puma:"Puma",
      levi:"Levi,s",
      zara:"Zara",
      "h&m" :"H&M",

  }
  