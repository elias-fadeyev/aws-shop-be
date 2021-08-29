import 'source-map-support/register';

import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import products from 'src/data/products';


const getProductById = async (event) => {
  return formatJSONResponse(products.find(product => product.id === event.pathParameters.productId));
};

export const main = middyfy(getProductById);
