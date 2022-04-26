import express from 'express';
import goalControllers from '../controllers/goal.controller';

const {
  getGoals, getGoalById, createGoal, updateGoal, deleteGoal,
} = goalControllers;

const router = express.Router();

router.get('/', getGoals);

router.get('/:id', getGoalById);

router.post('/', createGoal);

router.put('/:id', updateGoal);

router.delete('/:id', deleteGoal);

export default router;
