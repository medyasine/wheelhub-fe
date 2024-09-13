import { useDispatch, useSelector } from "react-redux";
import Table from "../../components/Table/Table";
import { useEffect } from "react";
import {
  deleteVehicle,
  getVehicles,
  updateVehicle,
} from "../../../store/VehicleSlice";
import { useNavigate } from "react-router-dom";

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
  const { vehicles } = useSelector((state) => state.vehicle);
  console.log(vehicles);

  useEffect(() => {
    dispatch(getVehicles());
  }, [dispatch]);

  const handleDetailClicked = (rowData) => {
    navigate(rowData.id);
  };
  const handleEditClicked = (rowData) => {
    console.log("Edit clicked:", rowData);
    dispatch(updateVehicle(rowData));
  };

  const handleDeleteClicked = (id) => {
    console.log("Delete clicked:", id);
    dispatch(deleteVehicle(id));
  };

  const handleRecoverClicked = (rowData) => {
    console.log("Recover clicked:", rowData);
  };

  const handleNewClicked = (rowData) => {
    console.log("New clicked:", rowData);
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
        recoverClicked={handleRecoverClicked}
        confirmationService={mockConfirmationService}
        messageService={mockMessageService}
        translateService={mockTranslateService}
        newClicked={handleNewClicked}
        itemsPerPage={10}
      />
    </div>
  );
}

export default Vehicles;
