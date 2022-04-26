import { Request, Response } from 'express';

// @desc Get goals
// @route GET /api/goals
// @access Private
async function getGoals(req: Request, res: Response) {
  try {
    res.status(200).json({ message: 'Get goals' });
  } catch (err) {
    console.log(err);
  }
}

// @desc Get goal by id
// @route GET /api/goals/:id
// @access Private
async function getGoalById(req: Request, res: Response) {
  try {
    res.status(200).json({ message: 'Get goals' });
  } catch (err) {
    console.log(err);
  }
}

// @desc Create goal
// @route GET /api/goals
// @access Private
async function createGoal(req: Request, res: Response) {
  try {
    res.status(200).json({ message: 'Get goals' });
  } catch (err) {
    console.log(err);
  }
}

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
async function updateGoal(req: Request, res: Response) {
  try {
    res.status(200).json({ message: 'Get goals' });
  } catch (err) {
    console.log(err);
  }
}

// @desc Delete goal
// @route GET /api/goals/:id
// @access Private
async function deleteGoal(req: Request, res: Response) {
  try {
    res.status(200).json({ message: 'Get goals' });
  } catch (err) {
    console.log(err);
  }
}

export default {
  getGoals,
  getGoalById,
  createGoal,
  updateGoal,
  deleteGoal,
};
