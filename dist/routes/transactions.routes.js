"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var _typeorm = require("typeorm");

var _upload = _interopRequireDefault(require("../config/upload"));

var _TransactionsRepository = _interopRequireDefault(require("../repositories/TransactionsRepository"));

var _CreateTransactionService = _interopRequireDefault(require("../services/CreateTransactionService"));

var _DeleteTransactionService = _interopRequireDefault(require("../services/DeleteTransactionService"));

var _ImportTransactionsService = _interopRequireDefault(require("../services/ImportTransactionsService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const upload = (0, _multer.default)(_upload.default);
const transactionsRouter = (0, _express.Router)();
transactionsRouter.get('/', async (request, response) => {
  const transactionsRepository = (0, _typeorm.getCustomRepository)(_TransactionsRepository.default);
  const transactions = await transactionsRepository.find();
  const balance = await transactionsRepository.getBalance();
  return response.json({
    transactions,
    balance
  });
});
transactionsRouter.post('/', async (request, response) => {
  const {
    title,
    value,
    type,
    category
  } = request.body;
  const createTransactionService = new _CreateTransactionService.default();
  const transaction = await createTransactionService.execute({
    title,
    value,
    type,
    category
  });
  return response.json(transaction);
});
transactionsRouter.delete('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const deleteTranstationService = new _DeleteTransactionService.default();
  await deleteTranstationService.execute(id);
  return response.status(204).json();
});
transactionsRouter.post('/import', upload.single('file'), async (request, response) => {
  const importTransactionService = new _ImportTransactionsService.default();
  const transaction = await importTransactionService.execute(request.file.path);
  return response.json(transaction);
});
var _default = transactionsRouter;
exports.default = _default;