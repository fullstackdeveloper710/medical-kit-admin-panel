import React, { useEffect, useState } from "react";
import "./Products.css";
import DataTableComponent from "../../components/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsManagementData } from "../../redux/slice/ProductManagementSlice";
import Loader from "../../components/Common/Loader";
import imageData from "../../data";

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
      cell: (row) => (
        <div className="products-wrapper">
          <img
            src={row.product_picture}
            alt={row.description}
            className="products-image"
          />
          <span className="product-description">{row.description}</span>
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
      selector: (row) => row.batch_number,
    },
    {
      name: "Expiry Date",
    
      selector: (row) => new Date(row.expiry_date).toLocaleDateString(),

    }

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
