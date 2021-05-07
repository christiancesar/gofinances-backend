"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class CreateTransactions1616267982314 {
  async up(queryRunner) {
    queryRunner.createTable(new _typeorm.Table({
      name: 'transactions',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        isGenerated: true,
        default: 'uuid_generate_v4()'
      }, {
        name: 'title',
        type: 'varchar'
      }, {
        name: 'value',
        type: 'decimal',
        precision: 10,
        scale: 2
      }, {
        name: 'type',
        type: 'varchar'
      }, {
        name: 'category_id',
        type: 'uuid',
        isNullable: true
      }, {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      }, {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()'
      }]
    }));
  }

  async down(queryRunner) {
    queryRunner.dropTable('transactions');
  }

}

exports.default = CreateTransactions1616267982314;