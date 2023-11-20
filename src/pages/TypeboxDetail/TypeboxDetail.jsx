import axios from "axios";
import { getCookie } from "cookies-next";
// import { HiDocument } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
  Sort,
  Toolbar,
  Resize,
} from "@syncfusion/ej2-react-grids";

import { HOST } from "../../config";
import { Header, PageLoading } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

import "react-toastify/dist/ReactToastify.css";

<<<<<<< HEAD:src/pages/mobil/TambahMobil.jsx
const TambahMobil = () => {
=======
const TypeboxDetail = () => {
>>>>>>> 17b78c4f7a4eb52d0c81eef584ebc37705a783d7:src/pages/TypeboxDetail/TypeboxDetail.jsx
  const navigate = useNavigate();
  const { currentColor } = useStateContext();
  const { data, setData } = useStateContext();

  const [getActionButton, setActionButton] = useState("");
  const [pageLoading, setPageLoading] = useState(true);
  const [customer, setCustomer] = useState([]);
  const gridRef = useRef(null);

  const fetchData = async () => {
    await axios
<<<<<<< HEAD:src/pages/mobil/TambahMobil.jsx
      .get(HOST + "/marketing/mobil/get", {
=======
      .get(HOST + "/marketing/tipebox_detail/get", {
>>>>>>> 17b78c4f7a4eb52d0c81eef584ebc37705a783d7:src/pages/TypeboxDetail/TypeboxDetail.jsx
        headers: {
          "ngrok-skip-browser-warning": "true",
          Authorization: getCookie("admin_auth"),
        },
      })
      .then((response) => {
        const listCustomer = response.data.data;
        

        setCustomer(() =>
          listCustomer.map((item, index) => ({
            id: item.id,
            No: index + 1,
<<<<<<< HEAD:src/pages/mobil/TambahMobil.jsx
            Nama: item.noplat,
           
=======
            Nama: item.nama,
            id_tipebox : item.id_tipebox,
            rumus_panjang : item.rumus_panjang,
            rumus_lebar : item.rumus_lebar,
            rumus_oversize : item.rumus_oversize,
            tipebox : item.tipeBox,
>>>>>>> 17b78c4f7a4eb52d0c81eef584ebc37705a783d7:src/pages/TypeboxDetail/TypeboxDetail.jsx
          }))
        );
      })
      .catch((error) => {
        if (error.response.status == 401) {
          navigate("/dashboard/login");
        }
      });
  };

  const deleteData = async (id) => {
    await axios
<<<<<<< HEAD:src/pages/mobil/TambahMobil.jsx
      .delete(HOST + "/marketing/mobil/delete/" + id, {
=======
      .delete(HOST + "/marketing/tipebox_detail/delete/" + id, {
>>>>>>> 17b78c4f7a4eb52d0c81eef584ebc37705a783d7:src/pages/TypeboxDetail/TypeboxDetail.jsx
        headers: {
          "ngrok-skip-browser-warning": "true",
          Authorization: getCookie("admin_auth"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Data successfully deleted", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
        fetchData();
      })
      .catch((error) => {
        if (error.response.status == 401) {
          navigate("/dashboard/login");
        }
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (customer.length !== 0) {
      setPageLoading(false);
    }
  }, [customer]);

  const dataBound = () => {
    if (gridRef.current) {
      gridRef.current.autoFitColumns();
    }
  };

  const rowSelected = () => {
    console.log(gridRef.current.selectionModule.focus.prevIndexes.cellIndex)
    if (gridRef.current.selectionModule.focus.prevIndexes.cellIndex == 8) {
      setData(gridRef.current.selectionModule.data);
      if (getActionButton === "update") {
        if (data.length !== 0) {
          console.log(data);
<<<<<<< HEAD:src/pages/mobil/TambahMobil.jsx
          navigate("/dashboard/master/mobil/tambah");
=======
          navigate("/dashboard/TypeboxDetail/Update");
>>>>>>> 17b78c4f7a4eb52d0c81eef584ebc37705a783d7:src/pages/TypeboxDetail/TypeboxDetail.jsx
        }
      } else if (getActionButton === "delete") {
        deleteData(data.id);
      }
    }
  };

  const actionButton = () => {
    return (
      <div className="flex gap-2">
        <button
          className="bg-blue-700 rounded-xl py-2 px-4 text-white m-0"
          onClick={() => {
            setActionButton("update");
          }}
        >
          Update
        </button>
        <button
          className="bg-red-700 rounded-xl py-2 px-4 text-white m-0"
          onClick={() => {
            setActionButton("delete");
          }}
        >
          Delete
        </button>
      </div>
    );
  };

  return pageLoading ? (
    <PageLoading />
  ) : (
    <div>
      <ToastContainer hideProgressBar={true} autoClose={2000} theme="colored" />
      <div className="m-2 md:m-10 mt-24 px-2 py-10 md:p-10 bg-white rounded-3xl">
<<<<<<< HEAD:src/pages/mobil/TambahMobil.jsx
        <Header title="Data Sopir" />
=======
        <Header title="Data Typebox Detail" />
>>>>>>> 17b78c4f7a4eb52d0c81eef584ebc37705a783d7:src/pages/TypeboxDetail/TypeboxDetail.jsx
        <div className="mb-4 -mt-4">
          <button
            className="bg-blue-700 rounded-xl text-white px-4 py-2"
            onClick={() => {
<<<<<<< HEAD:src/pages/mobil/TambahMobil.jsx
              navigate("/dashboard/master/mobil/tambah");
            }}
          >
            Tambah Sopir
=======
              navigate("/dashboard/TypeboxDetail/Buat");
            }}
          >
            Tambah Typebox Detail
>>>>>>> 17b78c4f7a4eb52d0c81eef584ebc37705a783d7:src/pages/TypeboxDetail/TypeboxDetail.jsx
          </button>
        </div>
        <div className="overflow-x-auto">
          <div className=" cursor-pointer">
            <GridComponent
              dataSource={customer}
              width="fit-content"
              allowPaging
              allowSorting
              allowTextWrap={true}
              pageSettings={{
                pageCount: 5,
                pageSizes: ["All", "10", "25", "50"],
              }}
              textWrapSettings={{ wrapMode: "Content" }}
              toolbar={["Search"]}
              selectionSettings={{ type: "Single", mode: "Both" }}
              rowSelected={rowSelected}
              dataBound={dataBound}
              ref={gridRef}
            >
              <ColumnsDirective>
                <ColumnDirective
                  field="id"
                  headerText="Id"
                  isPrimaryKey={true}
                  visible={false}
                />
                <ColumnDirective
                  field="No"
                  headerText="No"
                  textAlign="Center"
                />
                <ColumnDirective
                  field="id_tipebox"
                  headerText="Nomor"
                  textAlign="Center"
                  visible={false}
                />
                <ColumnDirective
                  field="tipebox"
                  headerText="Typebox"
                  textAlign="Center"
                />
                <ColumnDirective
                  field="No. Plat"
                  headerText="No.Plat"
                  textAlign="Center"
                />
                <ColumnDirective
                  field="rumus_panjang"
                  headerText="Rumus Panjang"
                  textAlign="Center"
                />
                <ColumnDirective
                  field="rumus_lebar"
                  headerText="Rumus Lebar"
                  textAlign="Center"
                />
                <ColumnDirective
                  field="rumus_oversize"
                  headerText="Rumus Oversize"
                  textAlign="Center"
                />
               

                <ColumnDirective headerText="Action" template={actionButton} />
              </ColumnsDirective>
              <Inject services={[Search, Toolbar, Page, Sort, Resize]} />
            </GridComponent>
          </div>
        </div>
      </div>
    </div>
  );
};
<<<<<<< HEAD:src/pages/mobil/TambahMobil.jsx
export default TambahMobil;
=======
export default TypeboxDetail;
>>>>>>> 17b78c4f7a4eb52d0c81eef584ebc37705a783d7:src/pages/TypeboxDetail/TypeboxDetail.jsx
