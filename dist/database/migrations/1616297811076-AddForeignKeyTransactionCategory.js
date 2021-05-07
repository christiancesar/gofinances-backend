"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class AddForeignKeyTransactionCategory1616297811076 {
  async up(queryRunner) {
    await queryRunner.createForeignKey('transactions', new _typeorm.TableForeignKey({
      name: 'TransactionCategory',
      columnNames: ['category_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'categories',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }));
  }

  async down(queryRunner) {
    queryRunner.dropForeignKey('transactions', 'TransactionCategory');
  }

}

exports.default = AddForeignKeyTransactionCategory1616297811076;