module.exports = function (err: any, req: any, res: any, next: any) {
    console.log(err);
    res.status(500).json({ error: 'Something failed' });
    
};
