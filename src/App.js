import CategoryItem from "./components/category-item/category-item.component.jsx";
import "./category.style.scss";

function App() {
  const categories = [
    {
      id: 1,
      title: "Consoles",
      imgUrl:
        "https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1319&q=80",
    },
    {
      id: 2,
      title: "Gaming PC",
      imgUrl:
        "https://images.unsplash.com/photo-1636488363136-4dcffb388ac3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    },
    {
      id: 3,
      title: "Accessories",
      imgUrl:
        "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      id: 4,
      title: "Merchandise",
      imgUrl:
        "https://images.unsplash.com/photo-1559900439-4869c3e3a15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <div className="container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default App;
