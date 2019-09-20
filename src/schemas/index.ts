import * as RequestError from './source/request.error.schemas.json';
import * as CommonSchemas from './source/common.schemas.json';

export const COMMON_SCHEMAS_PATH = `${CommonSchemas.$id}#/definitions`;
export const REQUEST_ERROR_SCHEMAS_PATH = `${RequestError.$id}#/definitions`;

export default [RequestError, CommonSchemas];
