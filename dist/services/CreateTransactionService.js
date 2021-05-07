"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _AppError = _interopRequireDefault(require("../errors/AppError"));

var _Category = _interopRequireDefault(require("../models/Category"));

var _TransactionsRepository = _interopRequireDefault(require("../repositories/TransactionsRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import AppError from '../errors/AppError';
class CreateTransactionService {
  async execute({
    title,
    value,
    type,
    category
  }) {
    const transactionsRepository = (0, _typeorm.getCustomRepository)(_TransactionsRepository.default);
    const categoriesRepository = (0, _typeorm.getRepository)(_Category.default);
    const {
      total
    } = await transactionsRepository.getBalance();

    if (type === 'outcome' && total < value) {
      throw new _AppError.default('You do not have enough balance');
    }

    let categoryExist = await categoriesRepository.findOne({
      where: {
        title: category
      }
    });

    if (!categoryExist) {
      categoryExist = categoriesRepository.create({
        title: category
      });
      await categoriesRepository.save(categoryExist);
    }

    const transaction = transactionsRepository.create({
      title,
      value,
      type,
      category_id: categoryExist.id
    });
    await transactionsRepository.save(transaction);
    return transaction;
  }

}

var _default = CreateTransactionService;
exports.default = _default;