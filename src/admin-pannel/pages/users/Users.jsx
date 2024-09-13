import Table from '../../components/Table/Table';

const mockTranslateService = (key) => key;
const mockMessageService = {
  add: (message) => console.log('Message:', message),
};
const mockConfirmationService = {
  confirm: ({ accept, reject }) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      accept();
    } else {
      reject();
    }
  },
  close: () => {},
};

const sampleColumns = [
  { tableHeader: 'CLIENT', tr: 'client' },
  { tableHeader: 'SUBJECT', tr: 'subject' },
  { tableHeader: 'STATUS', tr: 'status' },
  { tableHeader: 'PRIORITY', tr: 'priority' },
];

const sampleData = [
  { id: 1, client: 'John Doe', subject: 'Account Access', status: 'Open', priority: 'High', membersCount: 0 },
  { id: 2, client: 'Jane Smith', subject: 'Payment Issue', status: 'In Progress', priority: 'Medium', membersCount: 2 },
  { id: 3, client: 'Bob Johnson', subject: 'Feature Request', status: 'Closed', priority: 'Low', membersCount: 0 },

  { id: 1, client: 'John Doe', subject: 'Account Access', status: 'Open', priority: 'High', membersCount: 0 },
  { id: 2, client: 'Jane Smith', subject: 'Payment Issue', status: 'In Progress', priority: 'Medium', membersCount: 2 },
  { id: 4, client: 'Bob Johnson', subject: 'Feature Request', status: 'Closed', priority: 'Low', membersCount: 0 },

  { id: 1, client: 'John Doe', subject: 'Account Access', status: 'Open', priority: 'High', membersCount: 0 },
  { id: 2, client: 'Jane Smith', subject: 'Payment Issue', status: 'In Progress', priority: 'Medium', membersCount: 2 },
  { id: 3, client: 'Bob Johnson', subject: 'Feature Request', status: 'Closed', priority: 'Low', membersCount: 0 },

  { id: 1, client: 'John Doe', subject: 'Account Access', status: 'Open', priority: 'High', membersCount: 0 },
  { id: 2, client: 'Jane Smith', subject: 'Payment Issue', status: 'In Progress', priority: 'Medium', membersCount: 2 },
  { id: 3, client: 'Bob Johnson', subject: 'Feature Request', status: 'Closed', priority: 'Low', membersCount: 0 },

  { id: 1, client: 'John Doe', subject: 'Account Access', status: 'Open', priority: 'High', membersCount: 0 },
  { id: 2, client: 'Jane Smith', subject: 'Payment Issue', status: 'In Progress', priority: 'Medium', membersCount: 2 },
  { id: 3, client: 'Bob Johnson', subject: 'Feature Request', status: 'Closed', priority: 'Low', membersCount: 0 },

  { id: 1, client: 'John Doe', subject: 'Account Access', status: 'Open', priority: 'High', membersCount: 0 },
  { id: 2, client: 'Jane Smith', subject: 'Payment Issue', status: 'In Progress', priority: 'Medium', membersCount: 2 },
  { id: 3, client: 'Bob Johnson', subject: 'Feature Request', status: 'Closed', priority: 'Low', membersCount: 0 },

  { id: 1, client: 'John Doe', subject: 'Account Access', status: 'Open', priority: 'High', membersCount: 0 },
  { id: 2, client: 'Jane Smith', subject: 'Payment Issue', status: 'In Progress', priority: 'Medium', membersCount: 2 },
  { id: 3, client: 'Bob Johnson', subject: 'Feature Request', status: 'Closed', priority: 'Low', membersCount: 0 },

  { id: 1, client: 'John Doe', subject: 'Account Access', status: 'Open', priority: 'High', membersCount: 0 },
  { id: 2, client: 'Jane Smith', subject: 'Payment Issue', status: 'In Progress', priority: 'Medium', membersCount: 2 },
  { id: 3, client: 'Bob Johnson', subject: 'Feature Request', status: 'Closed', priority: 'Low', membersCount: 0 },

  { id: 1, client: 'John Doe', subject: 'Account Access', status: 'Open', priority: 'High', membersCount: 0 },
  { id: 2, client: 'Jane Smith', subject: 'Payment Issue', status: 'In Progress', priority: 'Medium', membersCount: 2 },
  { id: 3, client: 'Bob Johnson', subject: 'Feature Request', status: 'Closed', priority: 'Low', membersCount: 0 },

  { id: 1, client: 'John Doe', subject: 'Account Access', status: 'Open', priority: 'High', membersCount: 0 },
  { id: 2, client: 'Jane Smith', subject: 'Payment Issue', status: 'In Progress', priority: 'Medium', membersCount: 2 },
  { id: 3, client: 'Bob Johnson', subject: 'Feature Request', status: 'Closed', priority: 'Low', membersCount: 0 },

  { id: 1, client: 'John Doe', subject: 'Account Access', status: 'Open', priority: 'High', membersCount: 0 },
  { id: 2, client: 'Jane Smith', subject: 'Payment Issue', status: 'In Progress', priority: 'Medium', membersCount: 2 },
  { id: 3, client: 'Bob Johnson', subject: 'Feature Request', status: 'Closed', priority: 'Low', membersCount: 0 },

  { id: 1, client: 'John Doe', subject: 'Account Access', status: 'Open', priority: 'High', membersCount: 0 },
  { id: 2, client: 'Jane Smith', subject: 'Payment Issue', status: 'In Progress', priority: 'Medium', membersCount: 2 },
  { id: 3, client: 'Bob Johnson', subject: 'Feature Request', status: 'Closed', priority: 'Low', membersCount: 0 },
];

export default function Users() {
  const handleDetailClicked = (rowData) => console.log('Detail clicked:', rowData);
  const handleEditClicked = (rowData) => console.log('Edit clicked:', rowData);
  const handleDeleteClicked = (id) => console.log('Delete clicked:', id);
  const handleRecoverClicked = (rowData) => console.log('Recover clicked:', rowData);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">User Table </h1>
      <Table 
        tableColumns={sampleColumns}
        tableData={sampleData}
        showDetailButton={true}
        detailClicked={handleDetailClicked}
        editClicked={handleEditClicked}
        deleteClicked={handleDeleteClicked}
        recoverClicked={handleRecoverClicked}
        confirmationService={mockConfirmationService}
        messageService={mockMessageService}
        translateService={mockTranslateService}
        itemsPerPage={10}
      />
    </div>
  );
}
