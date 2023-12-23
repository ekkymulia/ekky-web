type TableListProps = {
    onClick?: () => void;
    text1?: string;
    href1?: string;
    text2?: string;
    href2?: string;
    text3?: string;
    href3?: string;
    text4?: string;
    href4?: string;
};
  
const TableList = (props: TableListProps) => {
    const {
        onClick = () => {},
        text1,
        text2,
        text3,
        text4,
        href1 = '#',
        href2 = '#',
        href3 = '#',
        href4 = '#',
    } = props;

    return (
        <tr onClick={onClick}>
            <td className="text-center">{text1}</td>
            <td className="text-center"><a href={href2}>{text2}</a></td>
            <td className="text-center">{text3}</td>
            <td className="text-center"><a href={href4}>{text4}</a></td>
        </tr>
    );
};

export default TableList;
