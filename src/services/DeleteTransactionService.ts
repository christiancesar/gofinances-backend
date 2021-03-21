import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const transactionExist = transactionsRepository.findOne({ where: { id } });
    if (!transactionExist) {
      throw new AppError('Id not exists');
    }
    transactionsRepository.delete(id);
  }
}

export default DeleteTransactionService;
