import React, { useEffect, useState } from "react";
import "./Products.css";
import products from "../../Assets/images/product.png";
import DataTableComponent from "../../components/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsManagementData } from "../../redux/slice/ProductManagementSlice";
import Loader from "../../components/Common/Loader";

function Products() {
  const dispatch = useDispatch();
  const { status, ProductManagementData } = useSelector(
    (state) => state.PRODUCTMANAGEMENT
  );

  useEffect(() => {
    dispatch(fetchProductsManagementData());
  }, [dispatch]);
  const columns = [
    {
      name: "Product",
      selector: (row) => (
        <div className="products-wrapper">
          <img
            src={products}
            alt={row.description}
            className="products-image"
          />
          <span>{row.description}</span>
        </div>
      ),
    },
    {
      name: "Brand",
      selector: (row) => row.brand,
    },
    {
      name: "Contents",
      selector: (row) => row.quantity,
    },

    {
      name: "LOT no.",
      selector: (row) => row.lot_number,
    },
    {
      name: "Batch",
      selector: (row) => row.batch,
    },
    {
      name: "Expiry Date",
      selector: (row) => row.expiry_date,
    },
  ];
  if (status === "loading") {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  const userData = ProductManagementData?.data?.products || [];

  return (
    <div className="product-management">
      <DataTableComponent
        title={"Product Management"}
        columns={columns}
        data={userData}
        selectedRows
      />
    </div>
  );
}

export default Products;
