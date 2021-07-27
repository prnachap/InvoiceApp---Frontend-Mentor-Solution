import { Fragment } from "react";
import { Table } from "./InvoiceTable.style";
import TableHead from "./table-head/TableHead";
import TableRowItem from "./table-row/TableRow";
import TableFooter from "./table-footer/TableFooter";
import { InvoiceItem } from "../../../types/common-interface";
import getTotal from "../../../utils/getTotal";

interface Props {
  items: InvoiceItem["items"];
}

const InvoiceTable: React.FC<Props> = ({ items }) => {
  const total = getTotal(items);

  return (
    <Fragment>
      <Table>
        <TableHead />
        {items.map((item) => (
          <TableRowItem key={item.name} item={item} />
        ))}
      </Table>
      <TableFooter total={total} />
    </Fragment>
  );
};
export default InvoiceTable;
