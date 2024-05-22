import { MdDeleteOutline } from "react-icons/md";
import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";
import { axiosSecure } from "../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, currentItem) => {
    return total + currentItem.price;
  }, 0);

  const handleDelete = (id) => {
    axiosSecure.delete(`/cart/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        refetch();
        toast.success(`data is deleted`);
      }
    });
  };
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="p-16">
        <h2 className="text-center italic font-cinzel text-rose-600">
          ...Check it Out...
        </h2>
        <div className="divider w-1/4 mx-auto"></div>
        <h1 className="text-center font-extrabold text-4xl font-cinzel text-[#81171b]">
          Wanna Add More
        </h1>
        <div className="divider w-1/4 mx-auto"></div>
      </div>
      <div className="w-full mx-4  p-6 mb-24">
        {/* table */}
        <div className="w-full">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="font-cinzel text-rose-600 text-xl">
                <th>#</th>
                <th>Menu</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => (
                <tr key={item._id}>
                  <td>{idx + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <th>
                    <Link
                      className="btn glass bg-rose-600"
                      onClick={() => handleDelete(item._id)}
                    >
                      <MdDeleteOutline size={24} />
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>

            <tfoot className="font-cinzel text-rose-600 text-xl">
              <tr>
                <th></th>
                <th>Total Order: {cart.length}</th>
                <th>Total Price: ${totalPrice}</th>
                <th>
                  {" "}
                  <button className="btn glass bg-rose-600">PAY</button>
                </th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </main>
  );
};

export default MyCart;
