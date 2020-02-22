import * as FIELDS from './fields';

const { IMAGES, IS_FETCHING } = FIELDS;

export const getImages = state => state[IMAGES];

export const getIsFetching = state => state[IS_FETCHING];
