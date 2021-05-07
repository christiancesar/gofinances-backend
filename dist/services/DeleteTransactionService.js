"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _AppError = _interopRequireDefault(require("../errors/AppError"));

var _TransactionsRepository = _interopRequireDefault(require("../repositories/TransactionsRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DeleteTransactionService {
  async execute(id) {
    const transactionsRepository = (0, _typeorm.getCustomRepository)(_TransactionsRepository.default);
    const transactionExist = transactionsRepository.findOne({
      where: {
        id
      }
    });

    if (!transactionExist) {
      throw new _AppError.default('Id not exists');
    }

    transactionsRepository.delete(id);
  }

}

var _default = DeleteTransactionService;
exports.default = _default;