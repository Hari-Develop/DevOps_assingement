const express = require('express');
const router = express.Router();
const db = require('./database');

router.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});

router.get('/users', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
