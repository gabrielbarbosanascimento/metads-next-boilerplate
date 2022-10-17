import React from 'react';
import { MetaButton } from '../button';
import { MetaIcon } from '../icon';
import { MetaTable } from '../table';
import PaginatedTableStyles from './paginated-table.styles';
import { motion, AnimatePresence } from 'framer-motion';

type MetaTableType = {
  columns: MetaPaginatedTableHeader[];
  data?: any[];
  page: number;
  totalPages: number;
  onChangePage: (page: number) => void;
  isLoading?: boolean;
  emptyMessage?: string;
};

export type MetaPaginatedTableHeader = {
  title: string;
  field?: string;
  render?: (data: any) => React.ReactNode;
};

export const MetaPaginatedTable: React.FC<MetaTableType> = ({
  columns,
  data,
  page,
  totalPages,
  onChangePage,
  isLoading,
  emptyMessage,
}) => {
  function renderData(data: any[] | undefined) {
    if (!data) return;
    if (!data?.length) {
      return (
        <tr key={`data-row-empty`}>
          <td colSpan={columns.length}>
            {emptyMessage ? emptyMessage : 'Sem dados'}
          </td>
        </tr>
      );
    }
    let newData: any[] = [];
    data.forEach((data) => {
      let aux: { [key: string]: React.ReactNode } = {};
      columns.forEach((h) => {
        const currentValue = h.field ? data[h.field] : {};
        const currentData = data;
        aux[h.title] = h.render ? h.render(currentData) : currentValue;
      });
      newData.push(aux);
    });

    return newData.map((data, index) => (
      <tr key={`data-row-${index}`}>
        {Object.values(columns).map((column, i) => (
          <td
            key={`data-td-${
              typeof data[column.title] === 'string' && column.title
                ? data[column.title]
                : `${index}-${i}`
            }`}
          >
            {data[column.title]}
          </td>
        ))}
      </tr>
    ));
  }

  function renderPages() {
    if (!totalPages) {
      return (
        <div
          key={`pagina-1`}
          onClick={() => null}
          className={'p-3 page current-page'}
        >
          1
        </div>
      );
    }

    let paginas = calculateRange();
    const classNamePage = (pagina: any) => (pagina === '...' ? '' : ' page');
    const classNameCurrentPage = (pagina: any) =>
      pagina !== '...' && pagina === page ? ' current-page' : '';

    return paginas.map((pagina) => (
      <div
        key={`pagina-${pagina}`}
        onClick={() => (pagina === '...' ? null : onChangePage(pagina))}
        className={
          'p-3' +
          '  cursor-pointer ' +
          classNamePage(pagina) +
          classNameCurrentPage(pagina)
        }
      >
        {pagina}
      </div>
    ));
  }

  const calculateRange = (): any[] => {
    if (!totalPages) return [];
    const range = [];
    const pagina = page;
    let i = pagina > Math.abs(totalPages - 5) ? totalPages - 5 : pagina;

    for (i; i <= totalPages && range.length < 5; i++) {
      range.push(i);
    }

    const lastPageOnArray = range[range.length - 1];
    const firstPageOnArray = range[0];

    if (lastPageOnArray !== totalPages && range.length >= 5) {
      if (lastPageOnArray !== totalPages - 1) {
        range.push('...');
      }
      range.push(totalPages);
    }

    if (firstPageOnArray !== 1) {
      if (range.length >= 5) {
        range.unshift('...');
      }
      range.unshift(1);
    }

    return range;
  };

  return (
    <PaginatedTableStyles>
      <MetaTable>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={`cabeçalho-${column.title}`}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>{renderData(data)}</tbody>
      </MetaTable>
      <div className="d-flex align-items-center mt-3 mb-3 justify-content-center">
        <MetaButton
          disabled={page === 1}
          onClick={() => onChangePage(page - 1)}
        >
          <MetaIcon>keyboard_arrow_left</MetaIcon>
          Anterior
        </MetaButton>
        <div className="d-flex pl-3 pr-3">{renderPages()}</div>
        <MetaButton
          disabled={!totalPages || page === (totalPages ? totalPages : 0)}
          onClick={() => onChangePage(page + 1)}
        >
          Próximo
          <MetaIcon>keyboard_arrow_right</MetaIcon>
        </MetaButton>
      </div>
      {isLoading && (
        <div className="loader-container noselect">
          <AnimatePresence>
            <motion.div
              style={{ height: 67.34 }}
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, delay: 0 }}
            >
              <MetaIcon>autorenew</MetaIcon>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </PaginatedTableStyles>
  );
};
