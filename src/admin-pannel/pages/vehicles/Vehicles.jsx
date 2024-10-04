import { useDispatch, useSelector } from "react-redux";
import Table from "../../components/Table/Table";
import { useEffect } from "react";
import {
  deleteAllSelectedVehicles,
  deleteVehicle,
  getVehicles,
  softDeleteAllSelectedVehicles,
  updateVehicle,
} from "../../../store/VehicleSlice";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

const mockTranslateService = (key) => key;
const mockMessageService = {
  add: (message) => console.log("Message:", message),
};
const mockConfirmationService = {
  confirm: ({ accept, reject }) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      accept();
    } else {
      reject();
    }
  },
  close: () => {},
};

const sampleColumns = [
  { tableHeader: "MAKE", tr: "make" },
  { tableHeader: "MODEL", tr: "model" },
  { tableHeader: "YEAR", tr: "year" },
  { tableHeader: "PRICE", tr: "price" },
];

function Vehicles() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { vehicles, isVehiclesLoading } = useSelector((state) => state.vehicle);

  useEffect(() => {
    dispatch(getVehicles());
  }, [dispatch]);

  if (isVehiclesLoading) return <Loader />;

  const handleDetailClicked = (id) => {
    navigate(id.toString());
  };

  const handleEditClicked = (rowData) => {
    dispatch(updateVehicle(rowData));
  };

  const handleDeleteClicked = (id) => {
    dispatch(deleteVehicle(id));
  };

  const handleNewClicked = () => {
    navigate("create");
  };

  const deleteAll = (ids) => {
    dispatch(deleteAllSelectedVehicles(ids));
  };

  const exportAll = (ids) => {};

  const softDeleteAll = (ids) => {
    dispatch(softDeleteAllSelectedVehicles(ids));
  };
  
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Vehicle Table </h1>
      <Table
        tableColumns={sampleColumns}
        tableData={vehicles}
        showDetailButton={true}
        detailClicked={handleDetailClicked}
        editClicked={handleEditClicked}
        deleteClicked={handleDeleteClicked}
        confirmationService={mockConfirmationService}
        messageService={mockMessageService}
        translateService={mockTranslateService}
        newClicked={handleNewClicked}
        itemsPerPage={10}
        softDeleteAll={softDeleteAll}
        deleteAll={deleteAll}
        exportAll={exportAll}
      />
    </div>
  );
}

export default Vehicles;
