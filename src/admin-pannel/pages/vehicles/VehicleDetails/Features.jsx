function Features({ data }) {
  return (
    <div
      className="tab-pane fade"
      id="tab-specifications"
      role="tabpanel"
      aria-labelledby="specifications-tab"
    >
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
    </div>
  );
}

export default Features;
