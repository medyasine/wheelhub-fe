import { useDispatch, useSelector } from "react-redux";
import Table from "../../components/Table/Table";
import { useEffect } from "react";
import { deleteUser, getUsers, updateUser } from "../../../store/UserSlice";
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
  { tableHeader: "USERNAME", tr: "username" },
  { tableHeader: "EMAIL", tr: "email" },
  { tableHeader: "PHONE", tr: "phoneNumber" },
  { tableHeader: "ROLE", tr: "role" },
];

export default function Users() {
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleDetailClicked = (id) => {
    navigate(`/admin/users/${id}`);
  };

  const handleEditClicked = (rowData) => {
    dispatch(updateUser(rowData));
  };

  const handleDeleteClicked = (id) => {
    dispatch(deleteUser(id));
  };

  const handleRecoverClicked = (rowData) => {
    console.log("Recover clicked:", rowData);
  };

  const handleNewClicked = (rowData) => {
    console.log("New clicked:", rowData);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">User Table </h1>
      <Table
        tableColumns={sampleColumns}
        tableData={users}
        showDetailButton={true}
        detailClicked={handleDetailClicked}
        editClicked={handleEditClicked}
        deleteClicked={handleDeleteClicked}
        recoverClicked={handleRecoverClicked}
        newClicked={handleNewClicked}
        confirmationService={mockConfirmationService}
        messageService={mockMessageService}
        translateService={mockTranslateService}
        itemsPerPage={10}
      />
    </div>
  );
}
