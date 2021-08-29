import 'source-map-support/register';

import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import products from 'src/data/products';


const getProductsList = async () => {
  return formatJSONResponse({
    products,
  });
};

export const main = middyfy(getProductsList);
