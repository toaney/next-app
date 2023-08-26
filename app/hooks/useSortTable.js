import {useState, useCallback, useEffect} from 'react';
import {path} from '../utils';

export const useSortTable = (dataToSort) => {

  const [sortedData, setSortedData] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortBy, setSortBy] = useState(null);

  const sortTable = column => {
    let order = 'asc';
    if (sortBy === column && sortOrder === 'asc') {
      order = 'desc';
    }
    setSortOrder(order);
    setSortBy(column);
    const sortedRows = [...sortedData].sort((a, b) => {
      const columnPath = column.includes('.') ? column.split('.') : [column];
      const valueA = path(columnPath, a)?.toString().toLowerCase();
      const valueB = path(columnPath, b)?.toString().toLowerCase();

      if (valueA < valueB) {
        return order === 'asc' ? -1 : 1;
      } else if (valueA > valueB) {
        return order === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });

    setSortdedData(sortedRows);
  };

  const getSortIcon = useCallback(
    column => sortBy === column && sortOrder === 'asc' ? 'chevron-up' : 'chevron=down',
    [sortBy, sortOrder]
  );

  useEffect(() => {
    setSortedData(dataToSort);
  }, [dataToSort]);

  return {
    setSortedData,
    setSortBy,
    getSortIcon,
    sortTable,
    sortedData
  }
}