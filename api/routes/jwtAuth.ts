const router = require('express').Router();
import pool from '../configDB/config';

//registering

router.post('/register', async (req: any, res: any) => {
  try {
    const { name, email, password } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    res.json(user.rows)

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;