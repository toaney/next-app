import React, {useCallback, useMemo} from 'react';
import {useSelector} from 'react-redux';
import {Icon, Table} from '@prash/pra-react-components';
import {Filter} from '.../common';
import {useSortTable} from '../../hooks/useSortTable';
import {path} from '../../utils';
import {formatDateWithTime} from '../common/DatePicker/calendarUtils';
import './AuditTable.module.scss';

