import Item from "../Item/Item";

export default function ItemList({
  productos,
}) {
  
  return (
    <>
      
      <div className="flex justify-center items-center gap-24 pt-8 pb-2 flex-wrap h-max bg-indigo-100 relative">
        {productos.map((item) => (
          <div key={item.id}>
            <Item key={item.id} item={item} />
          </div>
        ))}
      </div>
    </>
  );
}
