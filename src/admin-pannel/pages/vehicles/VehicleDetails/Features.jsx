import Alert from "../../../components/Alert";

function Features({ data }) {
  return (
    <div
      className="tab-pane fade"
      id="tab-specifications"
      role="tabpanel"
      aria-labelledby="specifications-tab"
    >
      {data.length > 0 ? (
        <table className="table fs-10 mt-3">
          <tbody>
            {data.map((ele) => {
              return (
                <tr key={ele.id}>
                  <td className="bg-100" style={{ width: "30%" }}>
                    {ele.featureName}
                  </td>
                  <td>{ele.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <Alert msg={"Vehicle does not have any features"} status={"primary"} />
      )}
    </div>
  );
}

export default Features;
