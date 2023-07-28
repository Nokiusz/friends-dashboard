import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Auth Route!');
  res.status(200);
});

export default router;
